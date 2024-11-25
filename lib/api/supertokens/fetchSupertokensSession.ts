'use server'
import {cookies} from "next/headers";
import {SUPERTOKENS_API_KEY, SUPERTOKENS_API_URL} from "@/lib/api/constant";
import {TSessionToken} from "@/lib/api/supertokens/types/TSessionToken";
import {TSession} from "@/lib/api/supertokens/types/TSession";

type TResponse = {
    session: TSession
    accessToken: TSessionToken
    refreshToken: TSessionToken
    status: string
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