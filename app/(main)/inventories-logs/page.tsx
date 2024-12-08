import InventoriesLogsTable from "@/app/(main)/inventories-logs/_components/InventoriesLogsTable";
import InventoriesHeader from "@/app/(main)/inventories/_components/InventoriesHeader";

type TInventoriesLogs = {
    searchParams?: {
        name: string | undefined,
        brand: string | undefined,
        size: string | undefined,
        color: string | undefined
    }
}

const InventoriesLogsPage = ({searchParams}: TInventoriesLogs) => {
    return (
        <div className="p-4">
            <InventoriesHeader />

            <InventoriesLogsTable name={searchParams?.name} brand={searchParams?.brand} size={searchParams?.size} color={searchParams?.color} />
        </div>
    )
};

export default InventoriesLogsPage;