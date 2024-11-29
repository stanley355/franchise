import {Suspense} from "react";
import InventoriesTable from "@/app/(main)/inventories/_components/InventoriesTable";
import AddInventoriesDialog from "@/app/(main)/inventories/_components/AddInventoriesDialog";
import {LuBox} from "react-icons/lu";
import SearchInventoriesInput from "@/app/(main)/inventories/_components/SearchInventoriesInput";

type TInventories = {
    searchParams?: {name: string | undefined}
}

const Inventories = ({searchParams}: TInventories) => {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between w-full mb-4">
                <h1 className="text-lg font-bold flex gap-2 items-center">
                    <LuBox />
                    INVENTORIES
                </h1>
                <div className="flex items-center gap-2">
                <SearchInventoriesInput />
                <AddInventoriesDialog />
                </div>
            </div>

            <Suspense>
                <InventoriesTable name={searchParams?.name}/>
            </Suspense>
        </div>
    )
};

export default Inventories;