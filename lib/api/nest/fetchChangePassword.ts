'use server'
import {cookies} from "next/headers";
import {decode, JwtPayload} from "jsonwebtoken";
import {API_URL } from "@/lib/api/constant";

type TResponse = {
    error?: string,
    message?: string,
    statusCode?: number
    status?: string
}

export const fetchChangePassword   = async (oldPassword: string, newPassword: string): Promise<TResponse> => {
    const token = cookies().get('accessToken')?.value as string;
    const jwtPayload = decode(token) as JwtPayload;
    const userId = jwtPayload.id as string;
    const email = jwtPayload.emails[0] as string
    const url = `${API_URL}/supertokens/change-password`;

    try {
        const fetchResponse = await fetch(url, {
            method: "POST",
            headers: {
            "Authorization": token,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({userId, email, oldPassword, newPassword})
        })
        return await  fetchResponse.json();
    } catch (error) {
       throw error;
    }
}