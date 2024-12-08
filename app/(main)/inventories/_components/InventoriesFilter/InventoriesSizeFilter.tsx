
'use client'
import {memo} from "react";
import dynamic from "next/dynamic";
import {useQuery } from "@tanstack/react-query";
import {findAllInventoriesSize} from "@/lib/api/nest/inventories/findAllInventoriesSize";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Select = dynamic(() => import("react-select"), { ssr: false });

const InventoriesSizeFilter = () => {
    const pathname = usePathname();
    const router = useRouter()
    const searchParams = useSearchParams();
    const size = searchParams.get("size");
    const {data, isFetching} = useQuery({
        gcTime: 0,
        queryKey: ["inventoriesSizeFilter"], queryFn: async ()=> {
        return await findAllInventoriesSize()
        }})

    if (isFetching) {
        return  <div className="w-full h-10 bg-slate-100 animate-pulse rounded-lg" />
    }

    const onChange = (option: unknown) => {
        const selectedOption= option as {label: string, value: string};
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("size", selectedOption.value);
        const newQueryString = urlParams.toString();
        const newPath = pathname + "?" + newQueryString;
        router.replace(newPath)
    }

    return (
       <Select options={data} name="size" placeholder={size || "Semua"}  className="mb-4" onChange={onChange} />
    )
};

export default memo(InventoriesSizeFilter);