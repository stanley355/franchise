import InventoriesSearchInput from "@/app/(main)/inventories/_components/InventoriesSearchInput";
import InventoriesFilterDialog from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesFilterDialog";

const InventoriesHeader = () => {
    return (
       <div className="mb-4">
           <div className="inline-flex items-center gap-2">
               <InventoriesSearchInput />
               <InventoriesFilterDialog />
           </div>
           {/*<AddInventoriesDialog />*/}
       </div>
    )
};

export default InventoriesHeader;