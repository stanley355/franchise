

"use server";
import {SUPERTOKENS_API_KEY, SUPERTOKENS_API_URL} from "@/lib/api/constant";

type TResponse  = {
    status: string
    user: TUser
    recipeUserId: string
}

type TUser = {
    id: string
    isPrimaryUser: boolean
    tenantIds: string[]
    timeJoined: number
    emails: string[]
    phoneNumbers: any[]
    thirdParty: any[]
    loginMethods: TLoginMethod[]
}

type TLoginMethod = {
    tenantIds: string[]
    recipeUserId: string
    verified: boolean
    timeJoined: number
    recipeId: string
    email: string
}


export const fetchSupertokensLogin= async (
    email: string,
    password: string,
): Promise<TResponse> => {
    const url = `${SUPERTOKENS_API_URL}/recipe/signin/`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: SUPERTOKENS_API_KEY,
            },
            body: JSON.stringify({ email, password }),
        });

        return await response.json();
    } catch (error) {
        throw error
    }
};