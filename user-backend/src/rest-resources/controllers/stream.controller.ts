import fs from 'fs'
import path from 'path'
import type { NextFunction, Request, Response } from 'express'
import { prisma } from '@/src/lib/prisma.js'

class StreamController {
  static async getManifestUrl(req: Request, res: Response, next: NextFunction) {
    try {
      const episodeId = req.params?.episodeId

      const episode = await prisma.episode.findUnique({ where: { id: episodeId }, include: { videoAssets: true } })
      if (!episode) return res.status(404).json({ success: false, message: 'Episode not found' })

      const asset = episode.videoAssets?.find(a => a.type === 'HLS' || a.status === 'READY')
      if (!asset) return res.status(404).json({ success: false, message: 'HLS manifest not available yet' })

      // The manifest path is stored in asset.externalUrl or filePath
      const manifestUrl = `/api/v1/stream/${episodeId}/index.m3u8`

      return res.json({ success: true, manifestUrl })
    } catch (error) {
      return next(error)
    }
  }

  static async serveHLSFile(req: Request, res: Response, next: NextFunction) {
    try {
      const { episodeId, filename } = req.params
      const hlsDir = path.join(process.cwd(), 'uploads', 'hls', episodeId)
      const filePath = path.join(hlsDir, filename)

      if (!fs.existsSync(filePath)) return res.status(404).send('Not found')

      // Set appropriate content-type
      if (filename.endsWith('.m3u8')) res.setHeader('Content-Type', 'application/vnd.apple.mpegurl')
      if (filename.endsWith('.ts')) res.setHeader('Content-Type', 'video/mp2t')

      const stream = fs.createReadStream(filePath)
      stream.pipe(res)
    } catch (error) {
      return next(error)
    }
  }
}

export default StreamController
