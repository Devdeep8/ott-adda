export interface CreateEpisodeInput {
  seriesId: string
  title: string
  episodeNumber: number
  description?: string
  isFree?: boolean
  thumbnailUrl?: string
}

export interface UpdateEpisodeInput {
  title?: string
  episodeNumber?: number
  description?: string
  isFree?: boolean
  thumbnailUrl?: string
  status?: 'PROCESSING' | 'READY' | 'FAILED'
}
