import {Suspense} from "react";
import InventoriesTable from "@/app/(main)/inventories/_components/InventoriesTable";
import AddInventoriesDialog from "@/app/(main)/inventories/_components/AddInventoriesDialog";
import {LuBox} from "react-icons/lu";

const Inventories = () => {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between w-full mb-4">
                <h1 className="text-lg font-bold flex gap-2 items-center">
                    <LuBox />
                    INVENTORIES
                </h1>
                <AddInventoriesDialog />
            </div>

            <Suspense>
                <InventoriesTable/>
            </Suspense>
        </div>
    )
};

export default Inventories;