'use server'
import {cookies} from "next/headers";
import {API_URL} from "@/lib/api/constant";

export const findAllInventoriesColor = async (): Promise<{label: string, value: string}[]> => {

    const token = cookies().get('accessToken')?.value as string;
    const url = `${API_URL}/inventories/findAllColor`;


    try {
        const fetchResponse = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
            },
        })
        return await fetchResponse.json();
    } catch (error) {
        throw error;
    }
}