import express from 'express'
import v1Router from './api/v1/index.js'

const router = express.Router()

router.use('/api/v1', v1Router)

export default router