'use server'
import {cookies} from "next/headers";
import {API_URL} from "@/lib/api/constant";

export const deleteBills= async (id: number) =>{
    const token = cookies().get('accessToken')?.value as string;
    const url = `${API_URL}/bills/${id}`;

    try {
        const fetchResponse = await fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
            },
        })
        return await  fetchResponse.json();
    } catch (error) {
        throw error;
    }
}
