import { NextResponse } from "next/server"
import { prisma } from "@/utils/singleinstance"
import { getAuthSession } from "@/utils/auth"

export const PUT = async (
  req: Request,
  context: { params: Promise<{ intentId: string }> }
) => {
  try {
    const { intentId } = await context.params
    const session = await getAuthSession()

    if (!session) {
      return NextResponse.json(
        { message: "You are not authorized" },
        { status: 401 }
      )
    }
    
    const order = await prisma.order.findUnique({
      where: { 
        internalId: intentId, 
        }
    });

    if (!order) {
      return NextResponse.json(
        { message: "Order is not here" }, 
        { status: 404 }
      )
    }

   
    await prisma.order.update({ 
      where: { internalId: intentId },
      data: { status: "being prepared" },
    });

    return NextResponse.json(
      {  message: "Order is confirmed" }, 
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { 
        message: "Internal Server Error"
      },
      { status: 500 }
    )
  }
}
