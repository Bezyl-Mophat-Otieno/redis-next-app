import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import type { NextRequest } from "next/server";


export function middleware (req: NextRequest) {

    const userId = req.cookies.get("user_id")
    const res = NextResponse.next()

    if(!userId) {
        res.cookies.set("user_id", nanoid())
    }
    return res

}

export const  config ={

    matcher :[
            /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
        
    ]


}