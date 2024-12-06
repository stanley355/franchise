import {LuBoxes} from "react-icons/lu";
import InventoriesSearchInput from "@/app/(main)/inventories/_components/InventoriesSearchInput";
import InventoriesLogsTable from "@/app/(main)/inventories-logs/_components/InventoriesLogsTable";

type TInventoriesLogs = {
    searchParams?: { name: string | undefined }
}

const InventoriesLogsPage = ({searchParams}: TInventoriesLogs) => {
    return (
        <div className="p-4">

            <div className="flex items-center justify-between w-full mb-4 flex-col md:flex-row gap-4">
                <h1 className="text-lg font-bold flex gap-2 items-center">
                    <LuBoxes/>
                    INVENTORIES LOGS
                </h1>
                <div className="flex items-center gap-2">
                    <InventoriesSearchInput/>
                </div>
            </div>

            <InventoriesLogsTable name={searchParams?.name} />
        </div>
    )
};

export default InventoriesLogsPage;