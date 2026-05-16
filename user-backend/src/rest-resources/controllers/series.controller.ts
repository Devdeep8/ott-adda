import type { NextFunction, Request, Response } from 'express'
import { GetAllSeriesService } from '@/src/services/series/get-all-series.service.js'
import { GetSeriesByIdService } from '@/src/services/series/get-series-by-id.service.js'
import { GetSeriesEpisodesService } from '@/src/services/series/get-series-episodes.service.js'
import { CreateSeriesService } from '@/src/services/series/create-series.service.js'
import { UpdateSeriesService } from '@/src/services/series/update-series.service.js'
import { DeleteSeriesService } from '@/src/services/series/delete-series.service.js'
import type { CreateSeriesInput, UpdateSeriesInput } from '@/src/types/series.types.js'

type AuthUser = {
  id: string
  role?: string
  subscription?: {
    status?: string
    endDate?: string | Date | null
  } | null
} | null

type MulterFiles = {
  thumbnail?: Express.Multer.File[]
  banner?: Express.Multer.File[]
}

const parseGenres = (rawGenres: unknown): string[] | undefined => {
  if (Array.isArray(rawGenres)) {
    return rawGenres.map((g) => String(g)).filter(Boolean)
  }

  if (typeof rawGenres === 'string') {
    const trimmed = rawGenres.trim()
    if (!trimmed) return []

    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        const parsed = JSON.parse(trimmed)
        if (Array.isArray(parsed)) {
          return parsed.map((g) => String(g)).filter(Boolean)
        }
      } catch {
        // Fall back to comma-separated parsing
      }
    }

    return trimmed.split(',').map((g) => g.trim()).filter(Boolean)
  }

  return undefined
}

const getFirstUploadedFile = (files: unknown, key: 'thumbnail' | 'banner'): Express.Multer.File | undefined => {
  if (!files || typeof files !== 'object') return undefined
  const typed = files as MulterFiles
  const fileArray = typed[key]
  if (!Array.isArray(fileArray) || fileArray.length === 0) return undefined
  return fileArray[0]
}

export class SeriesController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, genre, page, limit } = req.query

      const result = await GetAllSeriesService.execute(
        {
          status: status as 'DRAFT' | 'ACTIVE' | 'UPCOMING' | 'ARCHIVED' | undefined,
          genre: genre as string | undefined,
          page: page as string | undefined,
          limit: limit as string | undefined,
        },
        (req as any).context ?? {}
      )

      return res.json({ success: true, ...result })
    } catch (error) {
      return next(error)
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const result = await GetSeriesByIdService.execute(id, (req as any).context ?? {})
      return res.json({ success: true, data: result })
    } catch (error) {
      return next(error)
    }
  }

  static async getBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { slug } = req.params

      // Import here to avoid circular dependency
      const { prisma } = await import('@/src/lib/prisma.js')

      const series = await prisma.series.findUnique({
        where: { slug },
        include: {
          _count: {
            select: { episodes: true },
          },
        },
      })

      if (!series) {
        const { AppError, Errors } = await import('@/src/errors/index.js')
        throw new AppError(Errors.SERIES_NOT_FOUND.message, Errors.SERIES_NOT_FOUND.code)
      }

      const totalEpisodes = series._count?.episodes || 0
      const { _count, ...seriesData } = series

      return res.json({
        success: true,
        data: {
          ...seriesData,
          totalEpisodes,
        },
      })
    } catch (error) {
      return next(error)
    }
  }

  static async getEpisodes(req: Request, res: Response, next: NextFunction) {
    try {
      const seriesId = req.params.id
      const user = ((req as any).user ?? (req as any).context?.user ?? null) as AuthUser

      const userRole = user?.role
      const hasSubscription = Boolean(
        user?.subscription?.status === 'ACTIVE' &&
          (!user?.subscription?.endDate || new Date(user.subscription.endDate) > new Date())
      )

      const episodes = await GetSeriesEpisodesService.execute(
        seriesId,
        userRole,
        hasSubscription,
        (req as any).context ?? {}
      )

      return res.json({ success: true, data: episodes })
    } catch (error) {
      return next(error)
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body as Partial<CreateSeriesInput>
      const files = (req.files as MulterFiles | undefined) ?? undefined

      const thumbnailFile = getFirstUploadedFile(files, 'thumbnail')
      const bannerFile = getFirstUploadedFile(files, 'banner')

      const data: CreateSeriesInput = {
        title: String(body.title ?? ''),
        description: body.description,
        genres: parseGenres(body.genres) ?? [],
        status: (body.status as CreateSeriesInput['status']) ?? 'DRAFT',
        releaseDate: body.releaseDate,
        isFeatured: body.isFeatured === true || body.isFeatured === 'true',
        thumbnailUrl: thumbnailFile ? `/${thumbnailFile.path.replace(/\\/g, '/')}` : body.thumbnailUrl,
        bannerUrl: bannerFile ? `/${bannerFile.path.replace(/\\/g, '/')}` : body.bannerUrl,
      }

      const created = await CreateSeriesService.execute(data, (req as any).context ?? {})

      return res.status(201).json({ success: true, data: created })
    } catch (error) {
      return next(error)
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const body = req.body as Partial<UpdateSeriesInput>
      const files = (req.files as MulterFiles | undefined) ?? undefined

      const thumbnailFile = getFirstUploadedFile(files, 'thumbnail')
      const bannerFile = getFirstUploadedFile(files, 'banner')

      const data: UpdateSeriesInput = {
        ...(body.title !== undefined ? { title: body.title } : {}),
        ...(body.description !== undefined ? { description: body.description } : {}),
        ...(body.genres !== undefined ? { genres: parseGenres(body.genres) ?? [] } : {}),
        ...(body.status !== undefined ? { status: body.status as UpdateSeriesInput['status'] } : {}),
        ...(body.releaseDate !== undefined ? { releaseDate: body.releaseDate } : {}),
        ...(body.isFeatured !== undefined
          ? { isFeatured: body.isFeatured === true || body.isFeatured === 'true' }
          : {}),
        ...(body.thumbnailUrl !== undefined ? { thumbnailUrl: body.thumbnailUrl } : {}),
        ...(body.bannerUrl !== undefined ? { bannerUrl: body.bannerUrl } : {}),
      }

      if (thumbnailFile) {
        data.thumbnailUrl = `/${thumbnailFile.path.replace(/\\/g, '/')}`
      }
      if (bannerFile) {
        data.bannerUrl = `/${bannerFile.path.replace(/\\/g, '/')}`
      }

      const updated = await UpdateSeriesService.execute(id, data, (req as any).context ?? {})
      return res.json({ success: true, data: updated })
    } catch (error) {
      return next(error)
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await DeleteSeriesService.execute(req.params.id, (req as any).context ?? {})
      return res.json({ success: true, message: 'Series deleted' })
    } catch (error) {
      return next(error)
    }
  }
}

export default SeriesController
