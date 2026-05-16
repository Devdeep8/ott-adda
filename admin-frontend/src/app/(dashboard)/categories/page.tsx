'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Search, X } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { adminAxios } from '@/lib/admin-axios'
import { adminSeriesService, Series } from '@/services/admin.series.service'

interface Category {
  id: string
  name: string
  description: string
  isAutomatic: boolean
  isActive: boolean
  series: Series[]
  createdAt: string
  updatedAt: string
}

const AUTOMATIC_CATEGORIES = ['New Releases', 'Upcoming', 'Trending']

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [allSeries, setAllSeries] = useState<Series[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const [categorySearch, setCategorySearch] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const [categoriesRes, seriesRes] = await Promise.all([
        adminAxios.get('/categories'),
        adminSeriesService.getAll({ page: 1, limit: 100, status: 'ACTIVE' }),
      ])

      setCategories(categoriesRes.data?.data || [])
      setAllSeries(seriesRes.data || [])
    } catch (error) {
      console.error('Failed to fetch data:', error)
      toast.error('Failed to load categories')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveSeries = async (categoryId: string, seriesId: string) => {
    try {
      await adminAxios.delete(`/categories/${categoryId}/series/${seriesId}`)
      toast.success('Series removed from category')
      await fetchData()
    } catch (error: any) {
      console.error('Failed to remove series:', error)
      toast.error('Failed to remove series')
    }
  }

  const handleAddSeries = async (categoryId: string, seriesId: string) => {
    try {
      await adminAxios.post(`/categories/${categoryId}/series`, { seriesId })
      toast.success('Series added to category')
      setCategorySearch((prev) => ({ ...prev, [categoryId]: '' }))
      await fetchData()
    } catch (error: any) {
      console.error('Failed to add series:', error)
      toast.error('Failed to add series')
    }
  }

  const handleToggleAutomatic = async (categoryId: string, isActive: boolean) => {
    try {
      await adminAxios.put(`/categories/${categoryId}`, { isActive: !isActive })
      toast.success(`Category ${!isActive ? 'enabled' : 'disabled'}`)
      await fetchData()
    } catch (error: any) {
      console.error('Failed to update category:', error)
      toast.error('Failed to update category')
    }
  }

  if (isLoading) {
    return <div className="text-center text-gray-400">Loading...</div>
  }

  const manualCategories = categories.filter((c) => !c.isAutomatic)
  const automaticCategories = categories.filter((c) => c.isAutomatic)

  const getAvailableSeries = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    const categorySeriesIds = new Set(category?.series.map((s) => s.id) || [])
    return allSeries.filter((s) => !categorySeriesIds.has(s.id))
  }

  const getFilteredAvailableSeries = (categoryId: string) => {
    const query = categorySearch[categoryId] || ''
    if (!query) return []
    return getAvailableSeries(categoryId)
      .filter((s) => s.title.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 8)
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Categories Management</h1>
        <p className="text-gray-400 mt-1">Organize and manage content categories</p>
      </div>

      {/* Manual Categories Section */}
      {manualCategories.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Manual Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {manualCategories.map((category) => (
              <Card
                key={category.id}
                className="bg-gray-900 border-gray-800 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <Badge className="bg-blue-600">Manual</Badge>
                  </div>
                  {category.description && (
                    <CardDescription>{category.description}</CardDescription>
                  )}
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  {/* Current Series */}
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Series ({category.series.length})
                    </p>
                    {category.series.length > 0 ? (
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {category.series.map((series) => (
                          <div
                            key={series.id}
                            className="relative shrink-0 group"
                          >
                            <div className="relative w-24 h-32 rounded-md overflow-hidden">
                              {series.thumbnail && (
                                <Image
                                  src={series.thumbnail}
                                  alt={series.title}
                                  fill
                                  className="object-cover"
                                />
                              )}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <button
                                  onClick={() =>
                                    handleRemoveSeries(category.id, series.id)
                                  }
                                  className="bg-red-600 hover:bg-red-700 p-2 rounded"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <p className="text-xs mt-1 truncate">{series.title}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400">No series yet</p>
                    )}
                  </div>

                  {/* Add Series Section */}
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-sm font-medium mb-2">Add Series</p>
                    <div className="space-y-2">
                      <Input
                        placeholder="Search series..."
                        value={categorySearch[category.id] || ''}
                        onChange={(e) =>
                          setCategorySearch((prev) => ({
                            ...prev,
                            [category.id]: e.target.value,
                          }))
                        }
                        className="bg-gray-800 border-gray-700 text-sm"
                      />

                      {categorySearch[category.id] && (
                        <div className="bg-gray-800 rounded-lg max-h-40 overflow-y-auto">
                          {getFilteredAvailableSeries(category.id).map((series) => (
                            <button
                              key={series.id}
                              onClick={() =>
                                handleAddSeries(category.id, series.id)
                              }
                              className="w-full text-left px-3 py-2 hover:bg-gray-700 text-sm transition"
                            >
                              {series.title}
                            </button>
                          ))}
                          {getFilteredAvailableSeries(category.id).length === 0 && (
                            <p className="px-3 py-2 text-xs text-gray-400">
                              No matching series
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Automatic Categories Section */}
      {automaticCategories.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Automatic Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {automaticCategories.map((category) => (
              <Card
                key={category.id}
                className="bg-gray-900 border-gray-800"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <Badge className="bg-green-600">Auto</Badge>
                  </div>
                  {category.description && (
                    <CardDescription>{category.description}</CardDescription>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Status Toggle */}
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span className="text-sm font-medium">Status</span>
                    <Switch
                      checked={category.isActive}
                      onCheckedChange={() =>
                        handleToggleAutomatic(category.id, category.isActive)
                      }
                    />
                  </div>

                  {/* Preview */}
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-sm font-medium mb-2">Preview</p>
                    <p className="text-xs text-gray-400">
                      Currently showing{' '}
                      <span className="text-white font-semibold">
                        {category.series.length}
                      </span>{' '}
                      series
                    </p>
                    {category.series.length > 0 && (
                      <div className="flex gap-2 mt-2 overflow-x-auto">
                        {category.series.slice(0, 3).map((series) => (
                          <div
                            key={series.id}
                            className="shrink-0 relative w-16 h-20 rounded-md overflow-hidden"
                          >
                            {series.thumbnail && (
                              <Image
                                src={series.thumbnail}
                                alt={series.title}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                        ))}
                        {category.series.length > 3 && (
                          <div className="shrink-0 w-16 h-20 bg-gray-700 rounded-md flex items-center justify-center">
                            <span className="text-xs font-medium">
                              +{category.series.length - 3}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Logic Explanation */}
                  <div className="p-3 bg-gray-800 rounded-lg text-xs text-gray-400 space-y-1">
                    {category.name === 'New Releases' && (
                      <>
                        <p>
                          <span className="font-medium text-white">Logic:</span> Shows latest
                          series from last 30 days
                        </p>
                      </>
                    )}
                    {category.name === 'Upcoming' && (
                      <>
                        <p>
                          <span className="font-medium text-white">Logic:</span> Shows series
                          with status UPCOMING
                        </p>
                      </>
                    )}
                    {category.name === 'Trending' && (
                      <>
                        <p>
                          <span className="font-medium text-white">Logic:</span> Shows most
                          viewed series in last 7 days
                        </p>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {categories.length === 0 && (
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6 text-center text-gray-400">
            No categories found
          </CardContent>
        </Card>
      )}
    </div>
  )
}
