'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { Pencil, Trash2, Upload, Plus } from 'lucide-react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { adminSeriesService, Series } from '@/services/admin.series.service'
import { adminEpisodeService, Episode, EpisodeFormData } from '@/services/admin.episode.service'
import { VideoUploadModal } from '@/components/admin/VideoUploadModal'

const getStatusColor = (status: string) => {
  switch (status) {
    case 'READY':
      return 'bg-green-600'
    case 'PROCESSING':
      return 'bg-blue-600'
    case 'PENDING':
      return 'bg-yellow-600'
    case 'FAILED':
      return 'bg-red-600'
    default:
      return 'bg-gray-600'
  }
}

export default function EpisodesPage() {
  const searchParams = useSearchParams()
  const initialSeriesId = searchParams.get('seriesId') || ''

  const [allSeries, setAllSeries] = useState<Series[]>([])
  const [selectedSeriesId, setSelectedSeriesId] = useState<string>(initialSeriesId)
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [isLoadingSeries, setIsLoadingSeries] = useState(true)
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingEpisode, setEditingEpisode] = useState<Episode | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadingEpisodeId, setUploadingEpisodeId] = useState<string | null>(null)
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)

  const [formData, setFormData] = useState<Partial<EpisodeFormData>>({
    seriesId: initialSeriesId,
    episodeNumber: 1,
    title: '',
    description: '',
    isFreePreview: false,
  })

  const [thumbnailPreview, setThumbnailPreview] = useState<string>('')

  useEffect(() => {
    fetchAllSeries()
  }, [])

  useEffect(() => {
    if (selectedSeriesId) {
      fetchEpisodes()
    }
  }, [selectedSeriesId])

  const fetchAllSeries = async () => {
    try {
      setIsLoadingSeries(true)
      const response = await adminSeriesService.getAll({ page: 1, limit: 100 })
      setAllSeries(response.data || [])
    } catch (error) {
      console.error('Failed to fetch series:', error)
      toast.error('Failed to fetch series')
    } finally {
      setIsLoadingSeries(false)
    }
  }

  const fetchEpisodes = async () => {
    if (!selectedSeriesId) return

    try {
      setIsLoadingEpisodes(true)
      const response = await adminEpisodeService.getBySeries(selectedSeriesId, {
        page: 1,
        limit: 50,
      })
      setEpisodes(response.data || [])
    } catch (error) {
      console.error('Failed to fetch episodes:', error)
      toast.error('Failed to fetch episodes')
    } finally {
      setIsLoadingEpisodes(false)
    }
  }

  const handleSeriesChange = (seriesId: string) => {
    setSelectedSeriesId(seriesId)
    setFormData((prev) => ({ ...prev, seriesId }))
    resetForm()
  }

  const handleFormChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
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

  const handleSubmit = async () => {
    try {
      if (!formData.title) {
        toast.error('Title is required')
        return
      }

      if (!selectedSeriesId) {
        toast.error('Please select a series')
        return
      }

      setIsSubmitting(true)

      const dataToSubmit = {
        ...formData,
        seriesId: selectedSeriesId,
      } as EpisodeFormData

      if (editingEpisode) {
        await adminEpisodeService.update(editingEpisode.id, dataToSubmit)
        toast.success('Episode updated successfully')
      } else {
        await adminEpisodeService.create(dataToSubmit)
        toast.success('Episode created successfully')
      }

      await fetchEpisodes()
      setShowForm(false)
      resetForm()
    } catch (error: any) {
      console.error('Failed to save episode:', error)
      toast.error(error.response?.data?.message || 'Failed to save episode')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (episode: Episode) => {
    setEditingEpisode(episode)
    setFormData({
      seriesId: episode.seriesId,
      episodeNumber: episode.episodeNumber,
      title: episode.title,
      description: episode.description,
      isFreePreview: episode.isFreePreview,
    })
    setThumbnailPreview(episode.thumbnail || '')
    setShowForm(true)
  }

  const handleDelete = async () => {
    if (!deleteConfirm) return

    try {
      await adminEpisodeService.delete(deleteConfirm)
      toast.success('Episode deleted successfully')
      await fetchEpisodes()
    } catch (error: any) {
      console.error('Failed to delete episode:', error)
      toast.error('Failed to delete episode')
    } finally {
      setDeleteConfirm(null)
    }
  }

  const handleUploadClick = (episodeId: string) => {
    setUploadingEpisodeId(episodeId)
    setUploadDialogOpen(true)
  }

  const handleUploadSuccess = async () => {
    await fetchEpisodes()
    setUploadDialogOpen(false)
    setUploadingEpisodeId(null)
  }

  const resetForm = () => {
    setFormData({
      seriesId: selectedSeriesId,
      episodeNumber: 1,
      title: '',
      description: '',
      isFreePreview: false,
    })
    setThumbnailPreview('')
    setEditingEpisode(null)
  }

  const handleOpenChange = (open: boolean) => {
    setShowForm(open)
    if (!open) {
      resetForm()
    }
  }

  const selectedSeries = allSeries.find((s) => s.id === selectedSeriesId)
  const uploadingEpisode = episodes.find((e) => e.id === uploadingEpisodeId)

  if (isLoadingSeries) {
    return <div className="text-center text-gray-400">Loading...</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Episode Management</h1>
          <p className="text-gray-400 mt-1">Manage episodes for your series</p>
        </div>
        <Sheet open={showForm} onOpenChange={handleOpenChange}>
          <SheetTrigger asChild disabled={!selectedSeriesId}>
            <Button
              className="bg-red-600 hover:bg-red-700 gap-2 disabled:opacity-50"
              disabled={!selectedSeriesId}
            >
              <Plus className="h-4 w-4" />
              New Episode
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full md:w-[600px] bg-gray-900 border-l border-gray-800 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>{editingEpisode ? 'Edit Episode' : 'Create New Episode'}</SheetTitle>
              <SheetDescription>Add or update episode details</SheetDescription>
            </SheetHeader>

            <div className="space-y-4 mt-6">
              {/* Series (pre-filled) */}
              <div className="space-y-2">
                <Label htmlFor="series">Series</Label>
                <Input
                  id="series"
                  value={selectedSeries?.title || ''}
                  disabled
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              {/* Episode Number */}
              <div className="space-y-2">
                <Label htmlFor="episodeNumber">Episode Number</Label>
                <Input
                  id="episodeNumber"
                  type="number"
                  min="1"
                  value={formData.episodeNumber || 1}
                  onChange={(e) =>
                    handleFormChange('episodeNumber', parseInt(e.target.value))
                  }
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title || ''}
                  onChange={(e) => handleFormChange('title', e.target.value)}
                  placeholder="Enter episode title"
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
                  placeholder="Enter episode description"
                  className="bg-gray-800 border-gray-700"
                  rows={4}
                />
              </div>

              {/* Is Free Preview */}
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <Label htmlFor="free" className="cursor-pointer">
                  Free Preview
                </Label>
                <Switch
                  id="free"
                  checked={formData.isFreePreview || false}
                  onCheckedChange={(value) =>
                    handleFormChange('isFreePreview', value)
                  }
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

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.title}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                {isSubmitting
                  ? 'Saving...'
                  : editingEpisode
                  ? 'Update Episode'
                  : 'Create Episode'}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Series Selector */}
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="pt-6">
          <Label htmlFor="series-select" className="mb-2 block">
            Select Series
          </Label>
          <Select value={selectedSeriesId} onValueChange={handleSeriesChange}>
            <SelectTrigger className="bg-gray-800 border-gray-700">
              <SelectValue placeholder="Choose a series..." />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {allSeries.map((series) => (
                <SelectItem key={series.id} value={series.id}>
                  {series.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Episodes Table */}
      {selectedSeriesId && (
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>
              Episodes{' '}
              {selectedSeries && (
                <span className="text-sm font-normal text-gray-400">
                  — {selectedSeries.title}
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingEpisodes ? (
              <div className="text-center text-gray-400">Loading episodes...</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="border-b border-gray-700">
                    <TableRow>
                      <TableHead className="text-gray-400">EP #</TableHead>
                      <TableHead className="text-gray-400">Thumbnail</TableHead>
                      <TableHead className="text-gray-400">Title</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                      <TableHead className="text-gray-400">Duration</TableHead>
                      <TableHead className="text-gray-400">Free?</TableHead>
                      <TableHead className="text-gray-400">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {episodes.map((episode) => (
                      <TableRow
                        key={episode.id}
                        className="border-b border-gray-800 hover:bg-gray-800/50"
                      >
                        <TableCell className="font-medium">
                          {episode.episodeNumber}
                        </TableCell>
                        <TableCell>
                          {episode.thumbnail && (
                            <div className="relative w-12 h-12 rounded overflow-hidden">
                              <Image
                                src={episode.thumbnail}
                                alt={episode.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="font-medium">{episode.title}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(episode.status)}>
                            {episode.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {episode.duration
                            ? `${Math.floor(episode.duration / 60)}m ${episode.duration % 60}s`
                            : 'N/A'}
                        </TableCell>
                        <TableCell>
                          {episode.isFreePreview ? (
                            <Badge className="bg-green-600">Yes</Badge>
                          ) : (
                            <Badge className="bg-gray-600">No</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {episode.status === 'PENDING' && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleUploadClick(episode.id)}
                                className="h-8 w-8 p-0 text-blue-400 hover:text-blue-300"
                                title="Upload video"
                              >
                                <Upload className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEdit(episode)}
                              className="h-8 w-8 p-0"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setDeleteConfirm(episode.id)}
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
            )}

            {!isLoadingEpisodes && episodes.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No episodes found. Create one to get started!
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {!selectedSeriesId && (
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6 text-center text-gray-400">
            Select a series to manage its episodes
          </CardContent>
        </Card>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent className="bg-gray-900 border-gray-800">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Episode</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure? This action cannot be undone.
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

      {/* Video Upload Modal */}
      {uploadingEpisode && (
        <VideoUploadModal
          open={uploadDialogOpen}
          onOpenChange={setUploadDialogOpen}
          episodeId={uploadingEpisode.id}
          episodeTitle={uploadingEpisode.title}
          onUploadSuccess={handleUploadSuccess}
        />
      )}
    </div>
  )
}
