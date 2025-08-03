import {prisma} from "@/utils/singleinstance"
import { NextResponse } from "next/server";



export const GET = async() => {
    const categories = await prisma.category.findMany()
    try {
        return new NextResponse(JSON.stringify(categories),{status:200}) 
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Error fetching categories"}),{status:500});
    }
}
