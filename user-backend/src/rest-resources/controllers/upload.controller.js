import { VideoUploadService } from '../../services/video/video-upload.service.js'

class UploadController {
  static async uploadEpisodeVideo(req, res, next) {
    try {
      const episodeId = req.params?.episodeId
      const file = req.file

      if (!file) {
        return res.status(400).json({ success: false, message: 'No video file provided' })
      }

      await VideoUploadService.execute(episodeId, file.path, req.context ?? {})

      return res.status(202).json({ success: true, message: 'Upload received, HLS conversion started', episodeId })
    } catch (error) {
      return next(error)
    }
  }
}

export default UploadController