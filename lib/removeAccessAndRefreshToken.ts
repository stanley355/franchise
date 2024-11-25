'use server'
import {cookies} from "next/headers";

export const removeAccessAndRefreshToken = async () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken")
}