'use server'
import {cookies} from "next/headers";
import {API_URL} from "@/lib/api/constant";
import {TInventoriesLogs} from "@/lib/api/nest/inventories-logs/TInventoriesLogs";

export const findAllInventoriesLogs= async (name?: string, brand?:string, size?: string, color?:string): Promise<TInventoriesLogs[]> =>{

    const token = cookies().get('accessToken')?.value as string;
    let url = `${API_URL}/inventories-logs/findAll`;

    if (name || brand || size|| color) {
        url += "?";
    }

    if (name) {
        url += `name=${name}&`;
    }

    if (brand) {
        url += `brand=${brand}&`;
    }

    if (size) {
        url += `size=${size}&`;
    }

    try {
        const fetchResponse = await fetch(url, {
            method: "GET",
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
