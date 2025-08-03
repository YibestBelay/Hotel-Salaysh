import {prisma} from "@/utils/singleinstance"
import { NextRequest, NextResponse } from "next/server";


export const GET = async(req:NextRequest) => {
    const {searchParams} = new URL(req.url);
    const catagory = searchParams.get("catagory");
    
    try {
        const products = await prisma.product.findMany({
            where:{
                ...(catagory? {catslug:catagory}: {isFeatured:true})
            }
        })
        return new NextResponse(JSON.stringify(products),{status:200}) 
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Error fetching products"}),{status:500});
    }
}
