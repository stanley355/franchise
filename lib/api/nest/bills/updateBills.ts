'use server'
import {cookies} from "next/headers";
import {API_URL} from "@/lib/api/constant";

export const updateBills= async (id: number, final_price: number) =>{
    const token = cookies().get('accessToken')?.value as string;
    const url = `${API_URL}/bills/${id}`;

    try {
        const fetchResponse = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({final_price})
        })
        return await  fetchResponse.json();
    } catch (error) {
        throw error;
    }
}
