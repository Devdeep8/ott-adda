'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Pencil, Trash2, ExternalLink, Plus, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { adminSeriesService, Series, SeriesFormData } from '@/services/admin.series.service'

const GENRES = ['Romance', 'Thriller', 'Drama', 'Comedy', 'Action', 'Sci-Fi']
const STATUS_OPTIONS = ['DRAFT', 'ACTIVE', 'UPCOMING', 'ARCHIVED']

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return 'bg-green-600'
    case 'DRAFT':
      return 'bg-yellow-600'
    case 'UPCOMING':
      return 'bg-blue-600'
    case 'ARCHIVED':
      return 'bg-gray-600'
    default:
      return 'bg-gray-600'
  }
}

export default function SeriesPage() {
  const [series, setSeries] = useState<Series[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingSeries, setEditingSeries] = useState<Series | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState<Partial<SeriesFormData>>({
    title: '',
    description: '',
    genres: [],
    status: 'DRAFT',
    releaseDate: '',
    isFeatured: false,
  })

  const [thumbnailPreview, setThumbnailPreview] = useState<string>('')
  const [bannerPreview, setBannerPreview] = useState<string>('')

  useEffect(() => {
    fetchSeries()
  }, [])

  const fetchSeries = async () => {
    try {
      setIsLoading(true)
      const response = await adminSeriesService.getAll({ page: 1, limit: 50 })
      setSeries(response.data || [])
    } catch (error) {
      console.error('Failed to fetch series:', error)
      toast.error('Failed to fetch series')
    } finally {
      setIsLoading(false)
    }
  }

  const handleFormChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleGenreToggle = (genre: string) => {
    setFormData((prev) => {
      const genres = prev.genres || []
      if (genres.includes(genre)) {
        return { ...prev, genres: genres.filter((g) => g !== genre) }
      } else {
        return { ...prev, genres: [...genres, genre] }
      }
    })
  }

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, thumbnail: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, banner: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setBannerPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async () => {
    try {
      if (!formData.title) {
        toast.error('Title is required')
        return
      }

      setIsSubmitting(true)

      if (editingSeries) {
        await adminSeriesService.update(editingSeries.id, formData as SeriesFormData)
        toast.success('Series updated successfully')
      } else {
        await adminSeriesService.create(formData as SeriesFormData)
        toast.success('Series created successfully')
      }

      await fetchSeries()
      setShowForm(false)
      resetForm()
    } catch (error: any) {
      console.error('Failed to save series:', error)
      toast.error(error.response?.data?.message || 'Failed to save series')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (item: Series) => {
    setEditingSeries(item)
    setFormData({
      title: item.title,
      description: item.description,
      genres: item.genres || [],
      status: (item.status as any) || 'DRAFT',
      releaseDate: item.releaseDate?.split('T')[0] || '',
      isFeatured: item.isFeatured || false,
    })
    setThumbnailPreview(item.thumbnail || '')
    setBannerPreview(item.banner || '')
    setShowForm(true)
  }

  const handleDelete = async () => {
    if (!deleteConfirm) return

    try {
      await adminSeriesService.delete(deleteConfirm)
      toast.success('Series deleted successfully')
      await fetchSeries()
    } catch (error: any) {
      console.error('Failed to delete series:', error)
      toast.error('Failed to delete series')
    } finally {
      setDeleteConfirm(null)
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      genres: [],
      status: 'DRAFT',
      releaseDate: '',
      isFeatured: false,
    })
    setThumbnailPreview('')
    setBannerPreview('')
    setEditingSeries(null)
  }

  const handleOpenChange = (open: boolean) => {
    setShowForm(open)
    if (!open) {
      resetForm()
    }
  }

  if (isLoading) {
    return <div className="text-center text-gray-400">Loading...</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Series Management</h1>
          <p className="text-gray-400 mt-1">Manage all series in the platform</p>
        </div>
        <Sheet open={showForm} onOpenChange={handleOpenChange}>
          <SheetTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 gap-2">
              <Plus className="h-4 w-4" />
              New Series
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full md:w-[600px] bg-gray-900 border-l border-gray-800 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>{editingSeries ? 'Edit Series' : 'Create New Series'}</SheetTitle>
              <SheetDescription>Add or update series details</SheetDescription>
            </SheetHeader>

            <div className="space-y-4 mt-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title || ''}
                  onChange={(e) => handleFormChange('title', e.target.value)}
                  placeholder="Enter series title"
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description || ''}
                  onChange={(e) => handleFormChange('description', e.target.value)}
                  placeholder="Enter series description"
                  className="bg-gray-800 border-gray-700"
                  rows={4}
                />
              </div>

              {/* Genres */}
              <div className="space-y-3">
                <Label>Genres</Label>
                <div className="grid grid-cols-2 gap-3">
                  {GENRES.map((genre) => (
                    <div key={genre} className="flex items-center space-x-2">
                      <Checkbox
                        id={genre}
                        checked={(formData.genres || []).includes(genre)}
                        onCheckedChange={() => handleGenreToggle(genre)}
                      />
                      <label
                        htmlFor={genre}
                        className="text-sm cursor-pointer"
                      >
                        {genre}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status || 'DRAFT'}
                  onValueChange={(value) => handleFormChange('status', value)}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    {STATUS_OPTIONS.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Release Date */}
              <div className="space-y-2">
                <Label htmlFor="releaseDate">Release Date</Label>
                <Input
                  id="releaseDate"
                  type="date"
                  value={formData.releaseDate || ''}
                  onChange={(e) => handleFormChange('releaseDate', e.target.value)}
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              {/* Is Featured */}
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <Label htmlFor="featured" className="cursor-pointer">
                  Featured Series
                </Label>
                <Switch
                  id="featured"
                  checked={formData.isFeatured || false}
                  onCheckedChange={(value) => handleFormChange('isFeatured', value)}
                />
              </div>

              {/* Thumbnail */}
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Thumbnail Image</Label>
                {thumbnailPreview && (
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <Image
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <Input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              {/* Banner */}
              <div className="space-y-2">
                <Label htmlFor="banner">Banner Image</Label>
                {bannerPreview && (
                  <div className="relative w-full h-32 rounded-lg overflow-hidden">
                    <Image
                      src={bannerPreview}
                      alt="Banner preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <Input
                  id="banner"
                  type="file"
                  accept="image/*"
                  onChange={handleBannerChange}
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.title}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                {isSubmitting
                  ? 'Saving...'
                  : editingSeries
                  ? 'Update Series'
                  : 'Create Series'}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Series Table */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>All Series</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="border-b border-gray-700">
                <TableRow>
                  <TableHead className="text-gray-400">Thumbnail</TableHead>
                  <TableHead className="text-gray-400">Title</TableHead>
                  <TableHead className="text-gray-400">Genres</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400">Episodes</TableHead>
                  <TableHead className="text-gray-400">Views</TableHead>
                  <TableHead className="text-gray-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {series.map((item) => (
                  <TableRow
                    key={item.id}
                    className="border-b border-gray-800 hover:bg-gray-800/50"
                  >
                    <TableCell>
                      {item.thumbnail && (
                        <div className="relative w-12 h-12 rounded overflow-hidden">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {item.genres?.slice(0, 2).map((genre) => (
                          <Badge key={genre} className="bg-gray-800 text-gray-300 text-xs">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item._count?.episodes || 0}</TableCell>
                    <TableCell>{(item.viewCount || 0).toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEdit(item)}
                          className="h-8 w-8 p-0"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Link
                          href={`/episodes?seriesId=${item.id}`}
                          className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-800"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setDeleteConfirm(item.id)}
                          className="h-8 w-8 p-0 text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {series.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No series found. Create one to get started!
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent className="bg-gray-900 border-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Series</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure? This action cannot be undone. All episodes will also be deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-4">
            <AlertDialogCancel className="bg-gray-800 hover:bg-gray-700 border-gray-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
