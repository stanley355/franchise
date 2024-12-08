import InventoriesTable from "@/app/(main)/inventories/_components/InventoriesTable";
import InventoriesHeader from "@/app/(main)/inventories/_components/InventoriesHeader";

type TInventories = {
    searchParams?: {
        name: string | undefined,
        brand: string | undefined,
        size: string | undefined,
        color: string | undefined
    };
}

const Inventories = ({searchParams}: TInventories) => {
    return (
        <div className="p-4">
            <InventoriesHeader/>
                <InventoriesTable name={searchParams?.name} brand={searchParams?.brand} size={searchParams?.size} color={searchParams?.color} />
        </div>
    )
};

export default Inventories;