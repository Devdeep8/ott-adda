export interface Series {
  id: string
  title: string
  slug: string
  description?: string
  genres: string[]
  thumbnailUrl?: string
  bannerUrl?: string
  status: 'DRAFT' | 'ACTIVE' | 'UPCOMING' | 'ARCHIVED'
  releaseDate?: string
  viewCount: number
  totalEpisodes: number
  isFeatured: boolean
  createdAt?: string
  updatedAt?: string
}

export interface Episode {
  id: string
  seriesId: string
  title: string
  episodeNumber: number
  description?: string
  thumbnailUrl?: string
  durationSeconds: number
  isFree: boolean
  viewCount: number
  status: 'PROCESSING' | 'READY' | 'FAILED'
  isPremiumLocked?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  displayOrder: number
  isAutomatic: boolean
  isActive: boolean
  series?: Series[]
  createdAt?: string
  updatedAt?: string
}

export interface SubscriptionPlan {
  id: string
  name: string
  slug: string
  description?: string
  priceInPaise: number
  durationDays: number
  features: string[]
  isActive: boolean
  createdAt?: string
  updatedAt?: string
}

export interface WatchHistoryItem {
  id: string
  episodeId: string
  seriesId: string
  progressSeconds: number
  durationSeconds: number
  isCompleted: boolean
  percentageWatched?: number
  episode: Episode
  series: Series
  watchedAt: string
  updatedAt?: string
}

export interface VideoAsset {
  id: string
  episodeId: string
  originalPath?: string
  hlsDirectory?: string
  hlsManifestPath?: string
  durationSeconds: number
  fileSizeBytes: bigint
  resolution?: string
  status: 'PENDING' | 'PROCESSING' | 'READY' | 'FAILED'
  processingError?: string
  createdAt?: string
  updatedAt?: string
}
