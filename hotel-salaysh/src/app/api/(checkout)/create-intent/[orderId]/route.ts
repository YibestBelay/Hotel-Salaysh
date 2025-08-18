
import { NextResponse } from "next/server"
import { prisma } from "@/utils/singleinstance"
import { getAuthSession } from "@/utils/auth"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export const POST = async (
  req: Request,
  { params }: { params: Promise<{ orderId: string }> }
) => {
  try {
    const { orderId } = await params
    const session = await getAuthSession()

    if (!session) {
      return NextResponse.json({ message: "You are not authorized" }, { status: 401 })
    }

   
    const order = await prisma.order.findUnique({
      where: { id:orderId },
    })
    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(order.price) * 100, 
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    })

    
    await prisma.order.update({
      where: { id: orderId },
      data: { internalId: paymentIntent.id },
    })

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret, internalId: paymentIntent.id },
      { status: 200 }
    ) 
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
