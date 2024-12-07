
'use client'
import {memo} from "react";
import dynamic from "next/dynamic";
import {useSuspenseQuery} from "@tanstack/react-query";
import {findAllInventoriesSize} from "@/lib/api/nest/inventories/findAllInventoriesSize";

const Select = dynamic(() => import("react-select"), { ssr: false });

const InventoriesSizeFilter = () => {
    const {data, isFetching} = useSuspenseQuery({queryKey: ["inventoriesSizeFilter"], queryFn: async ()=> {
        return await findAllInventoriesSize()
        }})

    if (isFetching) {
        return  <div className="w-full h-10 bg-slate-100 animate-pulse rounded-lg" />
    }

    return (
       <Select options={data} name="size" placeholder="Select size" />
    )
};

export default memo(InventoriesSizeFilter);