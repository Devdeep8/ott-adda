import { Router, type NextFunction, type Request, type Response } from 'express'
import multer from 'multer'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'
import { requireAdmin } from '@/src/rest-resources/middlewares/subscription.middleware.js'
import SeriesController from '@/src/rest-resources/controllers/series.controller.js'

const seriesRouter = Router()

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
}).fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'banner', maxCount: 1 },
])

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

seriesRouter.get('/', optionalAuthMiddleware, SeriesController.getAll)
seriesRouter.get('/by-slug/:slug', SeriesController.getBySlug)
seriesRouter.get('/:id', SeriesController.getById)
seriesRouter.get('/:id/episodes', optionalAuthMiddleware, SeriesController.getEpisodes)
seriesRouter.post('/', authMiddleware(), requireAdmin(), uploadThumbnail, SeriesController.create)
seriesRouter.put('/:id', authMiddleware(), requireAdmin(), uploadThumbnail, SeriesController.update)
seriesRouter.delete('/:id', authMiddleware(), requireAdmin(), SeriesController.delete)

export { optionalAuthMiddleware, uploadThumbnail }
export default seriesRouter
