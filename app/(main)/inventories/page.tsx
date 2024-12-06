import {Suspense} from "react";
import InventoriesTable from "@/app/(main)/inventories/_components/InventoriesTable";

type TInventories = {
    searchParams?: { name: string | undefined }
}

const Inventories = ({searchParams}: TInventories) => {
    return (
        <div className="p-4">

            <Suspense>
                <InventoriesTable name={searchParams?.name}/>
            </Suspense>
        </div>
    )
};

export default Inventories;