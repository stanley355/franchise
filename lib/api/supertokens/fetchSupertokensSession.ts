'use server'
import {cookies} from "next/headers";
import {SUPERTOKENS_API_KEY, SUPERTOKENS_API_URL} from "@/lib/api/supertokens/constant";

type TResponse = {
    session: TSession
    accessToken: TSessionToken
    refreshToken: TSessionToken
    status: string
}

type TSession = {
    handle: string
    userId: string
    recipeUserId: string
    userDataInJWT: Record<string, any>
    tenantId: string
}

type TSessionToken = {
    token: string
    expiry: number
    createdTime: number
}


export const fetchSupertokensSession = async (
    userId: string,
    userDataInJWT: Record<string, any>,
    userDataInDatabase: Record<string, any>): Promise<TResponse> => {

    const url = `${SUPERTOKENS_API_URL}/recipe/session/`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: SUPERTOKENS_API_KEY,
            },
            body: JSON.stringify({userId, enableAntiCsrf: false, userDataInJWT, userDataInDatabase}),
        });

        const session: TResponse = await response.json();
        cookies().set('accessToken', session.accessToken.token);
        cookies().set('refreshToken', session.refreshToken.token);
        return session
    } catch (error) {
        throw error;
    }
}