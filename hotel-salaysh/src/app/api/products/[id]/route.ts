import { prisma } from "@/utils/singleinstance"
import { NextResponse } from "next/server";


export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 })
}