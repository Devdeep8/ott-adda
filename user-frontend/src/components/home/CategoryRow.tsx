'use client'

import { Series } from '@/types/ott.types'
import { SeriesCard } from './SeriesCard'

interface CategoryRowProps {
  title: string
  series: Series[]
}

export function CategoryRow({ title, series }: CategoryRowProps) {
  if (!series || series.length === 0) {
    return null
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4">
          {series.map((item) => (
            <SeriesCard key={item.id} series={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
