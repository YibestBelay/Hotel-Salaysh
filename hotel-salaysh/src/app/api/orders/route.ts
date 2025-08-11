

import { prisma } from "@/utils/singleinstance"
import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";


export const GET = async (req: NextRequest) => {
    const session = await getAuthSession();
    if(session)
        {
            try {
               if(session.user.isAdmin){
                 const orders = await prisma.order.findMany()
                 return new NextResponse(JSON.stringify(orders),{status:200})
               }
               const orders = await prisma.order.findMany({
                where:{
                    userEmail: session.user.email!
                }
               })
               return new NextResponse(JSON.stringify(orders),{status:200})
                } 
            catch (error) {
                console.error('Error in /api/products:', error);
                return NextResponse.json(
                    { message: "Something went wrong" }, { status: 500 } );
            }
        }
        
        return NextResponse.json(
            { message: "you are not authenticated" }, { status: 401 } );
    };