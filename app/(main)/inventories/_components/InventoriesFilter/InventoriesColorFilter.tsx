'use client'
import {memo} from "react";
import dynamic from "next/dynamic";
import {useSuspenseQuery} from "@tanstack/react-query";
import {findAllInventoriesColor} from "@/lib/api/nest/inventories/findAllInventoriesColor";

const Select = dynamic(() => import("react-select"), { ssr: false });

const InventoriesColorFilter = () => {
    const {data, isFetching} = useSuspenseQuery({queryKey: ["inventoriesColorFilter"], queryFn: async ()=> {
        return await findAllInventoriesColor()
        }})

    if (isFetching) {
        return  <div className="w-full h-10 bg-slate-100 animate-pulse rounded-lg" />
    }

    return (
       <Select options={data} name="color" placeholder="Select color" />
    )
};

export default memo(InventoriesColorFilter);