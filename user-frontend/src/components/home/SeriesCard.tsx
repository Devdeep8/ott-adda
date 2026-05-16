'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import { Series } from '@/types/ott.types'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

interface SeriesCardProps {
  series: Series
}

export function SeriesCard({ series }: SeriesCardProps) {
  const router = useRouter()
  const [imageError, setImageError] = useState(false)

  const handleClick = () => {
    router.push(`/series/${series.slug}`)
  }

  const initials = series.title
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'OT'

  return (
    <div
      className="w-48 shrink-0 cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative w-full aspect-video rounded-md overflow-hidden bg-gray-800">
        {!imageError && series.thumbnailUrl ? (
          <Image
            src={series.thumbnailUrl}
            alt={series.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">{initials}</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 space-y-3">
          <div>
            <h3 className="text-white font-bold text-sm line-clamp-2">{series.title}</h3>
            <p className="text-gray-300 text-xs mt-1">
              {series.genres?.slice(0, 2).join(', ')}
            </p>
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/series/${series.slug}`)
            }}
            className="bg-red-600 hover:bg-red-700 text-white w-full flex items-center justify-center gap-2"
            size="sm"
          >
            <Play className="w-4 h-4" />
            Watch Now
          </Button>
        </div>
      </div>

      {/* Card Title */}
      <p className="text-white text-sm font-medium mt-2 line-clamp-2">{series.title}</p>
    </div>
  )
}
