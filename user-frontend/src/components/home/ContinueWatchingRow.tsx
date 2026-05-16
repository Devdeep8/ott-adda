'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import { WatchHistoryItem } from '@/types/ott.types'

interface ContinueWatchingRowProps {
  items: WatchHistoryItem[]
}

export function ContinueWatchingRow({ items }: ContinueWatchingRowProps) {
  const router = useRouter()

  if (!items || items.length === 0) {
    return null
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl font-bold text-white mb-4">Continue Watching</h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4">
          {items.map((item) => (
            <ContinueWatchingCard
              key={item.id}
              item={item}
              onClickHandler={() => router.push(`/watch/${item.episodeId}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ContinueWatchingCardProps {
  item: WatchHistoryItem
  onClickHandler: () => void
}

function ContinueWatchingCard({ item, onClickHandler }: ContinueWatchingCardProps) {
  const [imageError, setImageError] = useState(false)

  const percentage = item.percentageWatched || 0
  const initials = item.series?.title
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'OT'

  return (
    <div className="w-48 shrink-0 cursor-pointer group" onClick={onClickHandler}>
      <div className="relative w-full aspect-video rounded-md overflow-hidden bg-gray-800">
        {!imageError && item.episode?.thumbnailUrl ? (
          <Image
            src={item.episode.thumbnailUrl}
            alt={item.episode.title}
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

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
          <div
            className="h-full bg-red-600 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white font-bold text-sm">{percentage}% Watched</p>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="mt-2 space-y-1">
        <p className="text-gray-400 text-xs font-medium">
          {item.series?.title}
        </p>
        <p className="text-white text-sm font-medium line-clamp-1">
          Ep {item.episode?.episodeNumber}: {item.episode?.title}
        </p>
      </div>
    </div>
  )
}
