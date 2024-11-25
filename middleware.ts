import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {decode, JwtPayload} from "jsonwebtoken";
import {fetchSupertokensSessionRefresh} from "@/lib/api/supertokens/fetchSupertokensSessionRefresh";

export async function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("accessToken")?.value as string;
    const isLoginPage = request.url.includes("/accounts/login");
    const loginRedirect = NextResponse.redirect(new URL('/accounts/login', request.url))
    if (!accessToken && !isLoginPage) {
        return loginRedirect
    }

    const response = NextResponse.next()
    const jwtPayload = decode(accessToken) as JwtPayload;
    if (new Date().getTime() > Number(jwtPayload.exp) * 1000) {
        try {
            const newSession = await fetchSupertokensSessionRefresh()
            if (newSession?.accessToken?.token && newSession?.refreshToken?.token) {
                response.cookies.set("accessToken", newSession?.accessToken?.token)
                response.cookies.set("refreshToken", newSession?.refreshToken?.token)
            } else {
                return loginRedirect
            }
        } catch (error: any) {
            console.error(error.message);
            return loginRedirect
        }
    }

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}