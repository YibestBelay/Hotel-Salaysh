import { prisma } from "@/utils/singleinstance"
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    
    try {
        console.log('Fetching products with category:', category || 'featured');
        
        const products = await prisma.product.findMany({
            where: {
                ...(category ? { catslug: category } : { isFeatured: true })
            }
        });

        console.log('Successfully fetched products:', products.length);
        
        return NextResponse.json(products, { status: 200 });
        
    } catch (error) {
        console.error('Error in /api/products:', error);
        
        
        if (error instanceof Error) {
            if (error.message.includes('prisma') || error.message.includes('connection')) {
                console.error('Database connection error:', error);
                return NextResponse.json(
                    { message: "Database connection error", error: error.message },
                    { status: 500 }
                );
            }
        }
        
        return NextResponse.json(
            { message: "Error fetching products", error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
};

export const POST = async (req: NextRequest) => {
    const { title, desc, price, catslug, options, img } = await req.json();
    
    try {
        const product = await prisma.product.create({
            data: {
                title,
                desc,
                price: Number(price),
                img,
                options: options || [],
                category: {
                    connect: {
                        slug: catslug
                    }
                }
            },
        });
        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "Error creating product", error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
};
