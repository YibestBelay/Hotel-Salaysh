import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/singleinstance"
import { NextResponse } from "next/server";


export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 })
}
export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    const session = await getAuthSession()
   
        if(session?.user.isAdmin){
            try {
                await prisma.product.delete({
                    where: { id: parseInt(id) },
                });
                return new NextResponse(JSON.stringify({message:"Product deleted successfully"}), { status: 200 })
                } catch (error) {
                return new NextResponse(JSON.stringify({message:"Error deleting product"}), { status: 500 })
            }
        }
      return new NextResponse(JSON.stringify({message:"You are not authorized"}), { status: 401 })
}