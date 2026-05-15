import jwt from 'jsonwebtoken'
import config from '@/src/configs/app.config.js'

export const generateAdminToken = (payload) => {
  return jwt.sign(payload, config.get('jwt.adminSecret'), {
    expiresIn: config.get('jwt.adminExpiry')
  })
}

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, config.get('jwt.secret'), {
    expiresIn: config.get('jwt.expiry')
  })
}

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, config.get('jwt.secret'), {
    expiresIn: config.get('jwt.refreshExpiry')
  })
}

export const verifyAdminToken = (token) => {
  return jwt.verify(token, config.get('jwt.adminSecret'))
}

export const verifyAccessToken = (token) => {
  return jwt.verify(token, config.get('jwt.secret'))
}

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, config.get('jwt.secret'))
}
