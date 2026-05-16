import fs from 'fs'
import path from 'path'
import multer from 'multer'
import type { NextFunction, Request, Response } from 'express'

const ensureDir = (dir: string) => {
  fs.mkdirSync(path.join(process.cwd(), dir), { recursive: true })
}

export const ensureUploadDirs = () => {
  ['uploads/originals', 'uploads/thumbnails', 'uploads/hls'].forEach(ensureDir)
}

const sanitizeFilename = (name: string): string => {
  return name
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9._-]/g, '')
}

const thumbnailStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads', 'thumbnails'))
  },
  filename: (_req, file, cb) => {
    cb(null, `thumb-${Date.now()}-${sanitizeFilename(file.originalname)}`)
  },
})

const videoStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads', 'originals'))
  },
  filename: (req, file, cb) => {
    const episodeId = req.params?.episodeId ?? req.params?.id ?? 'unknown'
    const ext = path.extname(file.originalname)
    cb(null, `video-${Date.now()}-${episodeId}${ext}`)
  },
})

const thumbnailFileFilter: multer.Options['fileFilter'] = (_req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/webp']
  if (!allowed.includes(file.mimetype)) {
    return cb(new Error('Only JPEG, PNG, and WEBP images are allowed'))
  }
  return cb(null, true)
}

const videoFileFilter: multer.Options['fileFilter'] = (_req, file, cb) => {
  if (file.mimetype !== 'video/mp4') {
    return cb(new Error('Only MP4 videos are allowed'))
  }
  return cb(null, true)
}

export const uploadThumbnail = multer({
  storage: thumbnailStorage,
  fileFilter: thumbnailFileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}).single('thumbnail')

export const uploadVideo = multer({
  storage: videoStorage,
  fileFilter: videoFileFilter,
  limits: { fileSize: 500 * 1024 * 1024 },
}).single('video')

export const handleMulterError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ success: false, message: 'File too large' })
    }
    return res.status(400).json({ success: false, message: err.message })
  }

  if (err) return res.status(400).json({ success: false, message: err.message })
  next()
}

export { sanitizeFilename }
