'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Episode } from '@/types/ott.types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Lock } from 'lucide-react'

interface EpisodeCardProps {
  episode: Episode
  onWatchClick: () => void
}

export function EpisodeCard({ episode, onWatchClick }: EpisodeCardProps) {
  const [imageError, setImageError] = useState(false)

  const durationMinutes = Math.floor(episode.durationSeconds / 60)
  const durationSeconds = episode.durationSeconds % 60
  const durationFormatted = `${durationMinutes}m ${durationSeconds}s`

  const initials = episode.title
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'EP'

  return (
    <div className="flex gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-32 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-800">
        {!imageError && episode.thumbnailUrl ? (
          <Image
            src={episode.thumbnailUrl}
            alt={episode.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-400">{initials}</span>
          </div>
        )}

        {/* Play Icon on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
      </div>

      {/* Episode Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
        <div>
          <h3 className="text-white font-semibold text-sm md:text-base">
            EP{episode.episodeNumber} • {episode.title}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm mt-1">{durationFormatted}</p>
          {episode.description && (
            <p className="text-gray-400 text-xs md:text-sm line-clamp-2 mt-1">
              {episode.description}
            </p>
          )}
        </div>
      </div>

      {/* Right Side - Status & Action */}
      <div className="flex items-center gap-3 shrink-0">
        {episode.isFree ? (
          <Badge className="bg-green-600 hover:bg-green-700 text-white">FREE</Badge>
        ) : episode.isPremiumLocked ? (
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-yellow-500" />
            <span className="text-xs md:text-sm text-gray-300">Premium</span>
          </div>
        ) : null}

        <Button
          onClick={onWatchClick}
          size="sm"
          className={`flex items-center gap-2 ${
            episode.isPremiumLocked
              ? 'bg-yellow-600 hover:bg-yellow-700'
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          {episode.isPremiumLocked ? 'Subscribe' : <Play className="w-4 h-4" />}
          {!episode.isPremiumLocked && <span className="hidden sm:inline">Play</span>}
        </Button>
      </div>
    </div>
  )
}
