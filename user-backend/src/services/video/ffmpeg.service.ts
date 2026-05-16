import fs from 'fs'
import path from 'path'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegStatic from 'ffmpeg-static'

if (ffmpegStatic) {
  ;(ffmpeg as any).setFfmpegPath(ffmpegStatic as string)
}

export type VideoMetadata = {
  durationSeconds: number
  resolution: string
  fileSizeBytes: number
}

export type HLSResult = {
  hlsDirectory: string
  hlsManifestPath: string
}

export async function getVideoMetadata(inputPath: string): Promise<VideoMetadata> {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(inputPath, (err, metadata) => {
      if (err) {
        return reject(new Error(`Failed to probe video: ${err.message}`))
      }

      const durationSeconds = Math.round(Number(metadata.format?.duration ?? 0))
      const fileSizeBytes = Number(metadata.format?.size ?? 0)
      const videoStream = metadata.streams.find((stream) => stream.codec_type === 'video')
      const resolution = videoStream?.width && videoStream?.height
        ? `${videoStream.width}x${videoStream.height}`
        : 'unknown'

      resolve({
        durationSeconds,
        resolution,
        fileSizeBytes,
      })
    })
  })
}

export async function convertToHLS(inputPath: string, episodeId: string): Promise<HLSResult> {
  const outputDir = path.join(process.cwd(), 'uploads', 'hls', episodeId)
  fs.mkdirSync(outputDir, { recursive: true })

  const manifestPath = path.join(outputDir, 'index.m3u8')
  const segmentPattern = path.join(outputDir, 'seg_%03d.ts')

  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .videoCodec('libx264')
      .audioCodec('aac')
      .outputOptions([
        '-hls_time 10',
        '-hls_list_size 0',
        `-hls_segment_filename ${segmentPattern}`,
        '-preset fast',
        '-crf 23',
        '-movflags +faststart',
      ])
      .output(manifestPath)
      .on('start', (cmd) => console.log('FFmpeg started:', cmd))
      .on('progress', (progress) => console.log(`Processing: ${Math.round(progress.percent || 0)}%`))
      .on('end', () => resolve({ hlsDirectory: outputDir, hlsManifestPath: manifestPath }))
      .on('error', (err) => reject(new Error(`FFmpeg failed: ${err.message}`)))
      .run()
  })
}

export function deleteVideoFiles(episodeId: string): void {
  const hlsDir = path.join(process.cwd(), 'uploads', 'hls', episodeId)
  fs.rmSync(hlsDir, { recursive: true, force: true })
}
