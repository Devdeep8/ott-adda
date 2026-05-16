'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import { ArrowLeft, Play } from 'lucide-react'
import { VideoPlayer } from '@/components/player/VideoPlayer'
import { Button } from '@/components/ui/button'
import { streamService } from '@/services/stream.service'
import { episodesService } from '@/services/episodes.service'
import { watchHistoryService } from '@/services/watchHistory.service'
import { seriesService } from '@/services/series.service'
import { Episode, Series } from '@/types/ott.types'
import type { AxiosError } from 'axios'

export default function WatchPage() {
  const router = useRouter()
  const params = useParams()
  const episodeId = params.episodeId as string

  const [streamUrl, setStreamUrl] = useState<string | null>(null)
  const [episode, setEpisode] = useState<Episode | null>(null)
  const [series, setSeries] = useState<Series | null>(null)
  const [nextEpisode, setNextEpisode] = useState<Episode | null>(null)
  const [startTime, setStartTime] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<{
    type: 'subscription' | 'processing' | 'not-found' | 'generic'
    message: string
  } | null>(null)
  const [durationSeconds, setDurationSeconds] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Fetch manifest for stream URL
        try {
          const manifestRes = await streamService.getManifest(episodeId)
          const manifestData = manifestRes.data?.data
          setStreamUrl(manifestData?.hlsManifestPath || manifestData)
          setDurationSeconds(manifestData?.durationSeconds || 0)
        } catch (err: any) {
          const statusCode = err?.response?.status
          if (statusCode === 403) {
            setError({
              type: 'subscription',
              message: 'You need an active subscription to watch this episode.',
            })
            return
          } else if (statusCode === 503) {
            setError({
              type: 'processing',
              message: 'This video is still being processed. Please check back soon.',
            })
            return
          } else if (statusCode === 404) {
            setError({
              type: 'not-found',
              message: 'Episode not found.',
            })
            return
          }
          throw err
        }

        // Fetch episode details
        const episodeRes = await episodesService.getById(episodeId)
        const episodeData = episodeRes.data?.data
        setEpisode(episodeData)
        setDurationSeconds(episodeData?.durationSeconds || durationSeconds)

        // Fetch series details to get next episode
        if (episodeData?.seriesId) {
          const seriesRes = await seriesService.getById(episodeData.seriesId)
          const seriesData = seriesRes.data?.data
          setSeries(seriesData)

          // Fetch episodes to find next episode
          const episodesRes = await seriesService.getEpisodes(episodeData.seriesId)
          const episodes = episodesRes.data?.data || []
          const currentIdx = episodes.findIndex((ep: Episode) => ep.id === episodeId)
          if (currentIdx >= 0 && currentIdx < episodes.length - 1) {
            setNextEpisode(episodes[currentIdx + 1])
          }
        }

        // Fetch continue-watching data to get start time
        try {
          const historyRes = await watchHistoryService.getHistory()
          const history = historyRes.data?.data || []
          const watchItem = history.find((item: any) => item.episodeId === episodeId)
          if (watchItem) {
            setStartTime(watchItem.progressSeconds || 0)
          }
        } catch {
          // Continue even if history fetch fails
        }
      } catch (err: any) {
        console.error('Failed to load episode:', err)
        const message =
          err?.response?.data?.message || 'Failed to load episode. Please try again.'
        setError({
          type: 'generic',
          message,
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (episodeId) {
      fetchData()
    }
  }, [episodeId])

  const handleProgress = async (seconds: number) => {
    if (!episode || !series) return

    try {
      await watchHistoryService.saveProgress({
        episodeId: episode.id,
        seriesId: series.id,
        progressSeconds: seconds,
        durationSeconds,
      })
    } catch (err) {
      console.error('Failed to save progress:', err)
    }
  }

  const handleEnded = async () => {
    if (!episode || !series) return

    try {
      await watchHistoryService.saveProgress({
        episodeId: episode.id,
        seriesId: series.id,
        progressSeconds: durationSeconds,
        durationSeconds,
      })
      toast.success('Episode completed!')

      // Auto-play next episode if available
      if (nextEpisode) {
        setTimeout(() => {
          router.push(`/watch/${nextEpisode.id}`)
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to save completion:', err)
    }
  }

  if (isLoading) {
    return (
      <main className="bg-black min-h-screen text-white">
        <div className="h-[80vh] flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-300">Loading episode...</p>
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="bg-black min-h-screen text-white">
        <div className="h-screen flex items-center justify-center">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              {error.type === 'subscription'
                ? 'Premium Content'
                : error.type === 'processing'
                  ? 'Video Processing'
                  : error.type === 'not-found'
                    ? 'Episode Not Found'
                    : 'Error'}
            </h2>
            <p className="text-gray-400 mb-8">{error.message}</p>

            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => router.back()}
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>

              {error.type === 'subscription' && (
                <Button
                  onClick={() => router.push('/subscribe')}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Subscribe Now
                </Button>
              )}

              {error.type !== 'not-found' && (
                <Button
                  onClick={() => router.push('/home')}
                  className="bg-gray-700 hover:bg-gray-600"
                >
                  Back to Home
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!streamUrl || !episode || !series) {
    return null
  }

  const percentageWatched =
    durationSeconds > 0 ? Math.round((startTime / durationSeconds) * 100) : 0

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Video Player */}
      <div className="h-[80vh] w-full">
        <VideoPlayer
          streamUrl={streamUrl}
          startTime={startTime}
          onProgress={handleProgress}
          onEnded={handleEnded}
        />
      </div>

      {/* Episode Info & Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link */}
        <Link
          href={`/series/${series.slug}`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {series.title}
        </Link>

        {/* Episode Title & Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            EP{episode.episodeNumber} • {episode.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <span>{series.title}</span>
            {episode.durationSeconds && (
              <span>
                {Math.floor(episode.durationSeconds / 60)}m{' '}
                {episode.durationSeconds % 60}s
              </span>
            )}
            {percentageWatched > 0 && (
              <span className="text-gray-300">
                {percentageWatched}% watched
              </span>
            )}
          </div>

          {episode.description && (
            <p className="text-gray-300 mt-4 max-w-3xl">{episode.description}</p>
          )}
        </div>

        {/* Next Episode Section */}
        {nextEpisode && (
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Next Episode</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">
                  EP{nextEpisode.episodeNumber} • {nextEpisode.title}
                </p>
                {nextEpisode.description && (
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                    {nextEpisode.description}
                  </p>
                )}
              </div>
              <Button
                onClick={() => router.push(`/watch/${nextEpisode.id}`)}
                className="bg-red-600 hover:bg-red-700 flex items-center gap-2 shrink-0"
              >
                <Play className="w-4 h-4" />
                <span className="hidden sm:inline">Play Next</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
