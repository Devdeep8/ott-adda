import v1Routes from './v1/index.js'

const router = (await import('express')).Router()

router.use('/v1', v1Routes)

export default router
