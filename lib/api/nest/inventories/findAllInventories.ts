'use server'
import {cookies} from "next/headers";
import {API_URL} from "@/lib/api/constant";
import {TInventories} from "@/lib/api/nest/inventories/TInventories";

export const findAllInventories = async (name?: string, brand?: string, size?: string, color?: string): Promise<TInventories[]> => {

    const token = cookies().get('accessToken')?.value as string;
    let url = `${API_URL}/inventories/findAll`;

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

    if (color) {
        url += `color=${color}&`;
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