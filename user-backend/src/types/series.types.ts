export interface CreateSeriesInput {
  title: string
  description?: string
  genres: string[]
  status: 'DRAFT' | 'ACTIVE' | 'UPCOMING' | 'ARCHIVED'
  releaseDate?: Date | string
  isFeatured?: boolean
  thumbnailUrl?: string
  bannerUrl?: string
}

export interface UpdateSeriesInput {
  title?: string
  description?: string
  genres?: string[]
  status?: 'DRAFT' | 'ACTIVE' | 'UPCOMING' | 'ARCHIVED'
  releaseDate?: Date | string | null
  isFeatured?: boolean
  thumbnailUrl?: string | null
  bannerUrl?: string | null
}

export interface SeriesResponse {
  id: string
  title: string
  slug: string
  description?: string | null
  genres: string[]
  thumbnailUrl?: string | null
  bannerUrl?: string | null
  status: 'DRAFT' | 'ACTIVE' | 'UPCOMING' | 'ARCHIVED'
  releaseDate?: Date | null
  totalEpisodes: number
  viewCount: number
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}
