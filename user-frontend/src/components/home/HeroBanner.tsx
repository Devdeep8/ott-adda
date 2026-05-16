'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Series } from '@/types/ott.types'
import { Button } from '@/components/ui/button'
import { Play, Info } from 'lucide-react'

interface HeroBannerProps {
  series: Series
}

export function HeroBanner({ series }: HeroBannerProps) {
  const router = useRouter()

  const backgroundImage = series.bannerUrl || series.thumbnailUrl

  return (
    <div
      className="relative w-full h-[70vh] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundColor: backgroundImage ? 'transparent' : '#1a1a1a',
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />

      {/* Content Overlay - Bottom Left */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4 max-w-3xl">
        {/* Genre Tags */}
        <div className="flex flex-wrap gap-2">
          {series.genres?.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="px-3 py-1 bg-gray-600/70 text-white text-xs font-medium rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Series Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {series.title}
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg line-clamp-2 max-w-2xl">
          {series.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            onClick={() => router.push(`/watch/1`)} // TODO: Get first episode ID
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Play
          </Button>

          <Button
            onClick={() => router.push(`/series/${series.slug}`)}
            variant="outline"
            className="bg-gray-600/70 text-white hover:bg-gray-700 border-0 px-8 py-3 text-lg font-semibold flex items-center gap-2"
          >
            <Info className="w-5 h-5" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  )
}
