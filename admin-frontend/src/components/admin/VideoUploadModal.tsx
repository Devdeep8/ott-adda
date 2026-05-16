'use client'

import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Upload, Check, X, Loader } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { adminAxios } from '@/lib/admin-axios'
import { adminEpisodeService } from '@/services/admin.episode.service'

interface VideoUploadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  episodeId: string
  episodeTitle: string
  onUploadSuccess?: () => void
}

type UploadStatus = 'idle' | 'uploading' | 'processing' | 'ready' | 'failed'

export function VideoUploadModal({
  open,
  onOpenChange,
  episodeId,
  episodeTitle,
  onUploadSuccess,
}: VideoUploadModalProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle')
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const pollIntervalRef = useRef<NodeJS.Timeout>()

  // Cleanup polling on unmount or when modal closes
  useEffect(() => {
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current)
      }
    }
  }, [])

  // Stop polling when modal closes
  useEffect(() => {
    if (!open) {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current)
      }
    }
  }, [open])

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const droppedFile = files[0]
      if (droppedFile.type.startsWith('video/')) {
        setFile(droppedFile)
      } else {
        toast.error('Please select a video file')
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const selectedFile = files[0]
      if (selectedFile.type.startsWith('video/')) {
        setFile(selectedFile)
      } else {
        toast.error('Please select a video file')
      }
    }
  }

  const startPolling = async () => {
    setUploadStatus('processing')

    const pollStatus = async () => {
      try {
        const response = await adminEpisodeService.getById(episodeId)
        const status = response.data?.status

        if (status === 'READY') {
          setUploadStatus('ready')
          if (pollIntervalRef.current) {
            clearInterval(pollIntervalRef.current)
          }
          toast.success('Video is ready!')
          if (onUploadSuccess) {
            onUploadSuccess()
          }
        } else if (status === 'FAILED') {
          setUploadStatus('failed')
          if (pollIntervalRef.current) {
            clearInterval(pollIntervalRef.current)
          }
          toast.error('Video processing failed')
        }
      } catch (error) {
        console.error('Failed to check episode status:', error)
      }
    }

    // Initial check immediately
    await pollStatus()

    // Poll every 3 seconds if still processing
    if (uploadStatus !== 'ready' && uploadStatus !== 'failed') {
      pollIntervalRef.current = setInterval(pollStatus, 3000)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file')
      return
    }

    try {
      setUploadStatus('uploading')
      const formData = new FormData()
      formData.append('video', file)

      const response = await adminAxios.post(
        `/upload/episodes/${episodeId}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (e) => {
            if (e.total) {
              const progress = Math.round((e.loaded / e.total) * 100)
              setUploadProgress(progress)
            }
          },
        }
      )

      // Check if upload was successful (202 Accepted for async processing)
      if (response.status === 202 || response.status === 200) {
        setUploadProgress(100)
        // Start polling for processing status
        await startPolling()
      }
    } catch (error: any) {
      console.error('Upload failed:', error)
      setUploadStatus('failed')
      toast.error(error.response?.data?.message || 'Upload failed')
    }
  }

  const handleClose = () => {
    if (uploadStatus === 'uploading' || uploadStatus === 'processing') {
      toast.error('Cannot close while uploading or processing')
      return
    }
    onOpenChange(false)
    // Reset state
    setFile(null)
    setUploadProgress(0)
    setUploadStatus('idle')
  }

  const handleReset = () => {
    setFile(null)
    setUploadProgress(0)
    setUploadStatus('idle')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-gray-900 border-gray-800 max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Video</DialogTitle>
          <DialogDescription className="text-gray-400">
            Episode: <span className="text-white font-medium">{episodeTitle}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* File Drop Zone */}
          {uploadStatus === 'idle' && !file && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
                isDragging
                  ? 'border-red-400 bg-red-900/20'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm font-medium">Drop MP4 here or click to browse</p>
              <p className="text-xs text-gray-400 mt-1">Max 5GB</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          )}

          {/* File Selected */}
          {file && uploadStatus === 'idle' && (
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setFile(null)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Uploading Progress */}
          {uploadStatus === 'uploading' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Uploading...</p>
                <p className="text-sm text-gray-400">{uploadProgress}%</p>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          {/* Processing Status */}
          {uploadStatus === 'processing' && (
            <div className="space-y-3 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Processing video...</p>
                <Loader className="h-4 w-4 animate-spin text-blue-400" />
              </div>
              <Progress value={100} className="h-2" />
              <p className="text-xs text-gray-400">
                Converting to HLS format and creating segments. This may take a few minutes.
              </p>
            </div>
          )}

          {/* Success Status */}
          {uploadStatus === 'ready' && (
            <div className="space-y-3 py-4 text-center">
              <div className="flex justify-center">
                <Check className="h-8 w-8 text-green-400" />
              </div>
              <p className="text-sm font-medium text-green-400">Video ready!</p>
              <p className="text-xs text-gray-400">
                Your video is now available for streaming.
              </p>
            </div>
          )}

          {/* Failed Status */}
          {uploadStatus === 'failed' && (
            <div className="space-y-3 py-4 text-center">
              <div className="flex justify-center">
                <X className="h-8 w-8 text-red-400" />
              </div>
              <p className="text-sm font-medium text-red-400">Upload failed</p>
              <p className="text-xs text-gray-400">
                Please try again. Make sure the file is a valid video.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            {uploadStatus === 'idle' && !file && (
              <Button
                variant="outline"
                className="flex-1 border-gray-700 hover:bg-gray-800"
                onClick={() => fileInputRef.current?.click()}
              >
                Select File
              </Button>
            )}

            {uploadStatus === 'idle' && file && (
              <>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700 hover:bg-gray-800"
                  onClick={() => setFile(null)}
                >
                  Clear
                </Button>
                <Button
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  onClick={handleUpload}
                >
                  Start Upload
                </Button>
              </>
            )}

            {uploadStatus === 'ready' && (
              <Button
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => {
                  handleClose()
                }}
              >
                Close
              </Button>
            )}

            {uploadStatus === 'failed' && (
              <>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700 hover:bg-gray-800"
                  onClick={handleReset}
                >
                  Try Again
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700 hover:bg-gray-800"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
