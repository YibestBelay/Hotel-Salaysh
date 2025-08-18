import { prisma } from "@/utils/singleinstance"
import { NextResponse } from "next/server";

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params
    const body = await req.json()
    const { status } = body
    const order = await prisma.order.update ({
        where: { id:id },
        data: { status },
    })
    return NextResponse.json(order) 
}