import {Suspense} from "react";
import InventoriesTable from "@/app/(main)/inventories/_components/InventoriesTable";
import InventoriesHeader from "@/app/(main)/inventories/_components/InventoriesHeader";

type TInventories = {
    searchParams?: { name: string | undefined }
}

const Inventories = ({searchParams}: TInventories) => {
    return (
        <div className="p-4">
            <InventoriesHeader />
            <Suspense>
                <InventoriesTable name={searchParams?.name}/>
            </Suspense>
        </div>
    )
};

export default Inventories;