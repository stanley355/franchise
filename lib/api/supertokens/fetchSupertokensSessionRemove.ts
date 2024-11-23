'use server'
import {cookies} from "next/headers";
import {SUPERTOKENS_API_KEY, SUPERTOKENS_API_URL} from "@/lib/api/supertokens/constant";
import {decode, JwtPayload} from "jsonwebtoken";

type TResponse = {
    "status": string,
    "sessionHandlesRevoked": string[]
}

export const fetchSupertokensSessionRemove= async (): Promise<TResponse> => {
    const token = cookies().get("accessToken")?.value as string;
    const jwtPayload = decode(token) as JwtPayload;

    const url = `${SUPERTOKENS_API_URL}/recipe/session/remove`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: SUPERTOKENS_API_KEY,
            },
            body: JSON.stringify({userId: jwtPayload.id}),
        });

        const session: TResponse = await response.json();
        if (session.status === "OK") {
            cookies().delete('accessToken');
            cookies().delete('refreshToken');
        }
        return session
    } catch (err: any) {
        throw new Error(err);
    }
}