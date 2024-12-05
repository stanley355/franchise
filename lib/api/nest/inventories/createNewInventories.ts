'use server'
import {cookies} from "next/headers";
import {API_URL} from "@/lib/api/constant";
import {TInventories} from "@/lib/api/nest/inventories/TInventories";

type TRequest = {
    name: string;
    brand: string;
    size?: string;
    color?: string;
    amount: number;
    unit?: string;
}

export const createNewInventories = async (reqData: TRequest): Promise<TInventories> =>{
    const token = cookies().get('accessToken')?.value as string;
    const url = `${API_URL}/inventories/create`;

    try {
        const fetchResponse = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqData)
        })
        return await  fetchResponse.json();
    } catch (error) {
        throw error;
    }
}