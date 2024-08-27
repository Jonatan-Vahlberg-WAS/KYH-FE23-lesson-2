import WeatherKit from "@/utils/weatherKit";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest): Promise<NextResponse> {
    const url = new URL(req.url);
    const searchParamas = url.searchParams;
    const city = searchParamas.get("city")

    if(!city) {
        return NextResponse.json({
            message: `No city found`
        },{
            status: 404
        })
    }

    try {
        const data = await WeatherKit.getWeatherFromCity(city);

        return NextResponse.json(data);
    } catch(e) {
        console.warn(e);
        return NextResponse.json({
            message: `No weather found`
        },{
            status: 404
        })
    }
}