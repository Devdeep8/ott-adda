export const sendResponse = ({ res }, data, message = 'success') => {
  res.payload = {
    success: true,
    message: message,
    data,
    locale: 'en',
    timestamp: new Date().toISOString()
  }

  return res.json(res.payload)
}
