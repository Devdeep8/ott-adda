'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Navbar } from '@/components/common/Navbar'
import { HeroBanner } from '@/components/home/HeroBanner'
import { CategoryRow } from '@/components/home/CategoryRow'
import { ContinueWatchingRow } from '@/components/home/ContinueWatchingRow'
import { categoriesService } from '@/services/categories.service'
import { watchHistoryService } from '@/services/watchHistory.service'
import { Category, WatchHistoryItem, Series } from '@/types/ott.types'

export default function HomePage() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [continueWatching, setContinueWatching] = useState<WatchHistoryItem[]>([])
  const [featuredSeries, setFeaturedSeries] = useState<Series | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        // Fetch categories and continue watching in parallel
        const [categoriesRes, continueWatchingRes] = await Promise.all([
          categoriesService.getAll(),
          watchHistoryService.getContinueWatching(),
        ])

        const categoriesData = categoriesRes.data?.data || []
        const continueWatchingData = continueWatchingRes.data?.data || []

        setCategories(categoriesData)
        setContinueWatching(continueWatchingData)

        // Get featured series (first series from first category or create a default)
        if (categoriesData.length > 0 && categoriesData[0].series?.length > 0) {
          const featured = categoriesData[0].series?.find((s) => s.isFeatured) ||
            categoriesData[0].series?.[0]
          setFeaturedSeries(featured)
        }
      } catch (error: any) {
        console.error('Failed to fetch home page data:', error)
        toast.error(error?.response?.data?.message || 'Failed to load content')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Loading State */}
      {isLoading && (
        <div className="h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-300">Loading your content...</p>
          </div>
        </div>
      )}

      {/* Hero Banner */}
      {!isLoading && featuredSeries && (
        <HeroBanner series={featuredSeries} />
      )}

      {/* Continue Watching Section */}
      {!isLoading && continueWatching.length > 0 && (
        <ContinueWatchingRow items={continueWatching} />
      )}

      {/* Category Rows */}
      {!isLoading && categories.length > 0 ? (
        categories.map((category) => (
          <CategoryRow
            key={category.id}
            title={category.name}
            series={category.series || []}
          />
        ))
      ) : (
        !isLoading && (
          <div className="h-screen flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 text-lg">No content available</p>
            </div>
          </div>
        )
      )}
    </main>
  )
}
