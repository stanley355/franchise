
'use client'
import dynamic from "next/dynamic";
import {findAllInventoriesBrands} from "@/lib/api/nest/inventories/findAllInventoriesBrands";
import {useSuspenseQuery} from "@tanstack/react-query";

const Select = dynamic(() => import("react-select"), { ssr: false });

const InventoriesBrandFilter = () => {
    const {data, isFetching} = useSuspenseQuery({queryKey: ["inventoriesBrandFilter"], queryFn: async ()=> {
        return await findAllInventoriesBrands()
        }})

    if (isFetching) {
        return  <div className="w-full h-10 bg-slate-500 animate-pulse rounded-lg" />
    }

    return (
       <Select options={data} name="brand" />
    )
};

export default InventoriesBrandFilter;