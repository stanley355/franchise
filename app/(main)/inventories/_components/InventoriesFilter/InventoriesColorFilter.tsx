'use client'
import {memo} from "react";
import dynamic from "next/dynamic";
import {useQuery } from "@tanstack/react-query";
import {findAllInventoriesColor} from "@/lib/api/nest/inventories/findAllInventoriesColor";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Select = dynamic(() => import("react-select"), { ssr: false });

const InventoriesColorFilter = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const color = searchParams.get("color")
    const {data, isFetching} = useQuery({
        gcTime: 0,
        queryKey: ["inventoriesColorFilter"], queryFn: async ()=> {
        return await findAllInventoriesColor()
        }})

    const onChange = (option: unknown) => {
        const selectedOption= option as {label: string, value: string};
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("color", selectedOption.value);
        const newQueryString = urlParams.toString();
        const newPath = pathname + "?" + newQueryString;
        router.replace(newPath)
    }

    if (isFetching) {
        return  <div className="w-full h-10 bg-slate-100 animate-pulse rounded-lg" />
    }

    return (
       <Select options={data} name="color" placeholder={color || "Semua"} className="mb-4" onChange={onChange} />
    )
};

export default memo(InventoriesColorFilter);