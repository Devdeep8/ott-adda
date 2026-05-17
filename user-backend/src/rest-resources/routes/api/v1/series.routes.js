import { Router } from 'express'
import multer from 'multer'
import { authMiddleware } from '@/src/rest-resources/middlewares/auth.middleware.js'
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

const optionalAuthMiddleware = async (req, res, next) => {
  const strictAuth = authMiddleware()

  return strictAuth(req, res, (error) => {
    if (error) {
      req.user = null
      req.context = req.context || {}
      req.context.user = null
      req.context.userId = null
      return next()
    }

    req.user = req.context?.user ?? null
    return next()
  })
}

seriesRouter.get('/', optionalAuthMiddleware, SeriesController.list)
seriesRouter.get('/by-slug/:slug', SeriesController.getBySlug)
// seriesRouter.get('/:id', SeriesController.getById)
seriesRouter.get('/:id/episodes', optionalAuthMiddleware, SeriesController.getEpisodes)
// seriesRouter.post('/', authMiddleware(), requireAdmin(), uploadThumbnail, SeriesController.create)
// seriesRouter.put('/:id', authMiddleware(), requireAdmin(), uploadThumbnail, SeriesController.update)
// seriesRouter.delete('/:id', authMiddleware(), requireAdmin(), SeriesController.delete)

export { optionalAuthMiddleware, uploadThumbnail }
export default seriesRouter