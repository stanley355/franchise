'use server'
import {cookies} from "next/headers";
import {API_URL} from "@/lib/api/constant";

type TRequest = {
    amount: number;
}

export const updateInventories= async (id: number, reqBody: TRequest) =>{
    const token = cookies().get('accessToken')?.value as string;
    const url = `${API_URL}/inventories/${id}`;

    try {
        const fetchResponse = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody)
        })
        return await  fetchResponse.json();
    } catch (error) {
        throw error;
    }
}
