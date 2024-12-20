'use server'
import {cookies} from "next/headers";
import {API_URL} from "@/lib/api/constant";
import {TBills} from "@/lib/api/nest/bills/TBills";

export const findAllBills = async (id?: number): Promise<TBills[]> => {
    const token = cookies().get('accessToken')?.value as string;
    let url = `${API_URL}/bills/findAll`;

    if (id) {
        url += `?id=${id}`;
    }

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
