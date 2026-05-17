import Razorpay from 'razorpay'
import crypto from 'crypto'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export async function createRazorpayOrder(amountInPaise, currency = 'INR') {
  const order = await razorpay.orders.create({
    amount: amountInPaise,
    currency,
    receipt: `rcpt_${Date.now()}`,
  })
  return order
}

export function verifyRazorpaySignature(orderId, paymentId, signature) {
  const body = `${orderId}|${paymentId}`
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex')
  return expectedSignature === signature
}

export default razorpay