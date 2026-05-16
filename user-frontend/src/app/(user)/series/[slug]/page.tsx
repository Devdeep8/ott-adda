'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import { toast } from 'sonner'
import { ArrowLeft } from 'lucide-react'
import { seriesService } from '@/services/series.service'
import { Series, Episode } from '@/types/ott.types'
import { EpisodeCard } from '@/components/series/EpisodeCard'
import { SubscribeModal } from '@/components/series/SubscribeModal'

export default function SeriesDetailPage() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string

  const [series, setSeries] = useState<Series | null>(null)
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showSubscribeModal, setShowSubscribeModal] = useState(false)
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        // Fetch series by slug
        const seriesRes = await seriesService.getBySlug(slug)
        const seriesData = seriesRes.data?.data

        if (!seriesData) {
          toast.error('Series not found')
          router.push('/home')
          return
        }

        setSeries(seriesData)

        // Fetch episodes for this series
        const episodesRes = await seriesService.getEpisodes(seriesData.id)
        const episodesData = episodesRes.data?.data || []
        setEpisodes(episodesData)
      } catch (error: any) {
        console.error('Failed to fetch series details:', error)
        toast.error(error?.response?.data?.message || 'Failed to load series')
        router.push('/home')
      } finally {
        setIsLoading(false)
      }
    }

    if (slug) {
      fetchData()
    }
  }, [slug, router])

  if (isLoading) {
    return (
      <main className="bg-black min-h-screen text-white">
        <div className="h-[50vh] bg-gray-800 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="h-8 bg-gray-800 rounded w-1/4 animate-pulse mb-4" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-800 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </main>
    )
  }

  if (!series) {
    return null
  }

  const backgroundImage = series.bannerUrl || series.thumbnailUrl

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundColor: backgroundImage ? 'transparent' : '#1a1a1a',
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black" />

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 z-10 p-2 hover:bg-black/50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Hero Content - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4 max-w-4xl">
          {/* Genre Tags */}
          <div className="flex flex-wrap gap-2">
            {series.genres?.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Series Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {series.title}
          </h1>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{episodes.length}</span>
              <span>Episodes</span>
            </div>
            {series.releaseDate && (
              <div className="flex items-center gap-2">
                <span>Released:</span>
                <span className="font-semibold">
                  {new Date(series.releaseDate).getFullYear()}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="font-semibold">{series.viewCount?.toLocaleString() || 0}</span>
              <span>Views</span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p
              className={`text-gray-200 leading-relaxed ${
                !descriptionExpanded ? 'line-clamp-3' : ''
              }`}
            >
              {series.description}
            </p>
            {series.description && series.description.length > 200 && (
              <button
                onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                className="text-red-500 hover:text-red-400 text-sm font-medium mt-2 transition-colors"
              >
                {descriptionExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Episodes ({episodes.length})
        </h2>

        <div className="space-y-4">
          {episodes.length > 0 ? (
            episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                onWatchClick={() => {
                  if (episode.isPremiumLocked) {
                    setShowSubscribeModal(true)
                  } else {
                    router.push(`/watch/${episode.id}`)
                  }
                }}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No episodes available yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Subscribe Modal */}
      <SubscribeModal
        open={showSubscribeModal}
        onOpenChange={setShowSubscribeModal}
      />
    </main>
  )
}
