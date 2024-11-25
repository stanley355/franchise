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

export const fetchSupertokensSessionRefresh = async (): Promise<TResponse> => {
    const refreshToken = cookies().get("refreshToken")?.value as string;
    const url = `${SUPERTOKENS_API_URL}/recipe/session/refresh`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: SUPERTOKENS_API_KEY,
            },
            body: JSON.stringify({ refreshToken, enableAntiCsrf: false, useDynamicSigningKey: true}),
        });

        return  await response.json();
    } catch (error) {
        throw error;
    }
}