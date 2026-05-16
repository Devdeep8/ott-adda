'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

type HlsType = any // HLS.js type

interface VideoPlayerProps {
  streamUrl: string
  startTime?: number
  onProgress?: (seconds: number) => void
  onEnded?: () => void
}

export function VideoPlayer({ streamUrl, startTime = 0, onProgress, onEnded }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<HlsType>(null)
  const [error, setError] = useState<string | null>(null)
  const lastSavedRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: HlsType | null = null

    const setupPlayer = async () => {
      try {
        // Dynamically import HLS.js only on client
        const HLS = (await import('hls.js')).default

        if (HLS.isSupported()) {
          hls = new HLS({
            debug: false,
            maxBufferLength: 30,
            maxMaxBufferLength: 60,
          })

          hls.loadSource(streamUrl)
          hls.attachMedia(video)

          hls.on(HLS.Events.MANIFEST_PARSED, () => {
            if (startTime > 0) {
              video.currentTime = startTime
            }
            video.play().catch((err) => {
              console.warn('Auto-play prevented:', err)
            })
          })

          hls.on(HLS.Events.ERROR, (_event: string, data: any) => {
            if (data.fatal) {
              switch (data.type) {
                case HLS.ErrorTypes.NETWORK_ERROR:
                  setError('Network error. Please check your connection.')
                  break
                case HLS.ErrorTypes.MEDIA_ERROR:
                  setError('Media error. Unable to play this video.')
                  break
                default:
                  setError('Video playback failed. Please try again.')
              }
            } else {
              console.warn('HLS warning:', data)
            }
          })

          hlsRef.current = hls
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          // Safari/iOS fallback
          video.src = streamUrl
          if (startTime > 0) {
            video.currentTime = startTime
          }
          video.play().catch((err) => {
            console.warn('Auto-play prevented:', err)
          })
        } else {
          setError('Your browser does not support HLS video playback.')
        }
      } catch (err) {
        console.error('Player setup error:', err)
        setError('Failed to initialize video player.')
      }
    }

    setupPlayer()

    return () => {
      if (hls) {
        hls.destroy()
        hlsRef.current = null
      }
    }
  }, [streamUrl, startTime])

  // Progress tracking with debouncing
  useEffect(() => {
    const video = videoRef.current
    if (!video || !onProgress) return

    const handleTimeUpdate = () => {
      const currentTime = Math.floor(video.currentTime)
      // Only save every 10 seconds or when close to the same timestamp
      if (Math.abs(currentTime - lastSavedRef.current) >= 10) {
        lastSavedRef.current = currentTime
        onProgress(currentTime)
      }
    }

    const handleEnded = () => {
      if (onEnded) {
        onEnded()
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [onProgress, onEnded])

  if (error) {
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg font-semibold mb-2">Playback Error</p>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <video
      ref={videoRef}
      controls
      className="w-full h-full bg-black"
      crossOrigin="anonymous"
    />
  )
}
