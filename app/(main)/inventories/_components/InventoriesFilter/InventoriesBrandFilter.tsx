
'use client'
import {memo} from "react";
import dynamic from "next/dynamic";
import {findAllInventoriesBrands} from "@/lib/api/nest/inventories/findAllInventoriesBrands";
import {useQuery } from "@tanstack/react-query";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Select = dynamic(() => import("react-select"), { ssr: false });

const InventoriesBrandFilter = () => {
    const pathname = usePathname()
    const router = useRouter();
    const searchParams = useSearchParams();
    const brand = searchParams.get("brand")

    const {data, isFetching} = useQuery({
        gcTime: 0,
        queryKey: ["inventoriesBrandFilter"], queryFn: async ()=> {
        return await findAllInventoriesBrands()
        }})
    const onChange = (option: unknown) => {
        const selectedOption= option as {label: string, value: string};
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("brand", selectedOption.value);
        const newQueryString = urlParams.toString();
        const newPath = pathname + "?" + newQueryString;
        router.replace(newPath)
    }

    if (isFetching) {
        return  <div className="w-full h-10 bg-slate-100 animate-pulse rounded-lg" />
    }

    return (
       <Select options={data} name="brand" placeholder={brand || "Semua"} onChange={onChange} className="mb-4" />
    )
};

export default memo(InventoriesBrandFilter);