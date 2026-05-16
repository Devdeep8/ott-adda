import { Router, type NextFunction, type Request, type Response } from 'express'
import multer from 'multer'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'
import { requireAdmin } from '@/src/rest-resources/middlewares/subscription.middleware.js'
import EpisodeController from '@/src/rest-resources/controllers/episode.controller.js'

const episodeRouter = Router()

const storage = multer.diskStorage({
  destination: 'uploads/thumbnails/',
  filename: (_req, file, cb) => {
    const safeName = file.originalname.replace(/\s+/g, '-').toLowerCase()
    cb(null, `${Date.now()}-${safeName}`)
  },
})

const uploadThumbnail = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      return cb(null, true)
    }
    return cb(new Error('Only image files are allowed'))
  },
}).single('thumbnail')

const optionalAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const strictAuth = authMiddleware()

  return strictAuth(req as any, res as any, (error?: unknown) => {
    if (error) {
      ;(req as any).user = null
      ;(req as any).context = (req as any).context || {}
      ;(req as any).context.user = null
      ;(req as any).context.userId = null
      return next()
    }

    ;(req as any).user = (req as any).context?.user ?? null
    return next()
  })
}

episodeRouter.post('/', authMiddleware(), requireAdmin(), uploadThumbnail, EpisodeController.create)
episodeRouter.get('/:id', optionalAuthMiddleware, EpisodeController.getById)
episodeRouter.put('/:id', authMiddleware(), requireAdmin(), uploadThumbnail, EpisodeController.update)
episodeRouter.delete('/:id', authMiddleware(), requireAdmin(), EpisodeController.delete)

export { optionalAuthMiddleware, uploadThumbnail }
export default episodeRouter
