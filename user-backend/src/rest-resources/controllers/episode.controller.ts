// @ts-ignore - Prisma client is JavaScript module in current codebase
import prisma from '@/src/lib/prisma.js'
import { NotFoundError } from '@/src/errors/not-found.error.js'
import { CreateEpisodeService } from '@/src/services/episodes/create-episode.service.js'
import { UpdateEpisodeService } from '@/src/services/episodes/update-episode.service.js'
import { DeleteEpisodeService } from '@/src/services/episodes/delete-episode.service.js'
import type { CreateEpisodeInput, UpdateEpisodeInput } from '@/src/types/episode.types.js'

type Request = any
type Response = any
type NextFunction = (error?: unknown) => void

type AuthUser = {
  role?: string
  subscription?: {
    status?: string
    endDate?: string | Date | null
  } | null
} | null

class EpisodeController {
  private static toBoolean(value: unknown): boolean | undefined {
    if (value === undefined || value === null) return undefined
    if (typeof value === 'boolean') return value
    if (typeof value === 'string') return value.toLowerCase() === 'true'
    return Boolean(value)
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const file = req.file
      const body = req.body as Partial<CreateEpisodeInput>

      const data: CreateEpisodeInput = {
        seriesId: String(body.seriesId ?? ''),
        title: String(body.title ?? ''),
        episodeNumber: Number(body.episodeNumber),
        description: body.description,
        isFree: EpisodeController.toBoolean(body.isFree) ?? false,
        thumbnailUrl: file ? `/${file.path.replace(/\\/g, '/')}` : body.thumbnailUrl,
      }

      const created = await CreateEpisodeService.execute(data, (req as any).context ?? {})

      return res.status(201).json({ success: true, data: created })
    } catch (error) {
      return next(error)
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const episode = await prisma.episode.findUnique({
        where: { id },
        include: { videoAsset: true },
      })

      if (!episode) {
        throw new NotFoundError('Episode not found', { traceId: (req as any).context?.traceId })
      }

      const user = ((req as any).user ?? (req as any).context?.user ?? null) as AuthUser
      const isAdmin = user?.role === 'ADMIN'
      const hasSubscription = Boolean(
        user?.subscription?.status === 'ACTIVE' &&
          (!user?.subscription?.endDate || new Date(user.subscription.endDate) > new Date())
      )

      if (!episode.isFree && !isAdmin && !hasSubscription) {
        const { videoAsset, ...sanitized } = episode
        return res.json({ success: true, data: { ...sanitized, isPremiumLocked: true } })
      }

      return res.json({ success: true, data: { ...episode, isPremiumLocked: false } })
    } catch (error) {
      return next(error)
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const file = req.file
      const body = req.body as Partial<UpdateEpisodeInput>

      const data: UpdateEpisodeInput = {
        ...(body.title !== undefined ? { title: body.title } : {}),
        ...(body.description !== undefined ? { description: body.description } : {}),
        ...(body.episodeNumber !== undefined ? { episodeNumber: Number(body.episodeNumber) } : {}),
        ...(body.isFree !== undefined ? { isFree: EpisodeController.toBoolean(body.isFree) } : {}),
        ...(body.thumbnailUrl !== undefined ? { thumbnailUrl: body.thumbnailUrl } : {}),
        ...(body.status !== undefined ? { status: body.status } : {}),
      }

      if (file) {
        data.thumbnailUrl = `/${file.path.replace(/\\/g, '/')}`
      }

      const updated = await UpdateEpisodeService.execute(id, data, (req as any).context ?? {})
      return res.json({ success: true, data: updated })
    } catch (error) {
      return next(error)
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await DeleteEpisodeService.execute(req.params.id, (req as any).context ?? {})
      return res.json({ success: true, ...result })
    } catch (error) {
      return next(error)
    }
  }
}

export default EpisodeController
