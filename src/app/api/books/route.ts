import BookKit from "@/utils/bookKit";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest): Promise<NextResponse> {
    const url = new URL(req.url)
    const searchParamas = url.searchParams
    const query = searchParamas.get("q")
    
    if(!query) {
        return NextResponse.json({
            message: `Needs a "q" param in order to work`
        },{
            status: 400
        })
    }

    try {
        const data = await BookKit.getBooksFromQuery(query)

        return NextResponse.json({
            books: data.docs
        })
    } catch(e) {
        return NextResponse.json({
            message: `No works found`
        },{
            status: 404
        })
    }
}