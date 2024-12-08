import InventoriesSearchInput from "@/app/(main)/inventories/_components/InventoriesSearchInput";
import InventoriesFilterDialog from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesFilterDialog";
import InventoriesFilterText from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesFilterText";
import AddInventoriesDialog from "@/app/(main)/inventories/_components/InventoriesActions/AddInventoriesDialog";

const InventoriesHeader = () => {
    return (
       <div className="mb-4">
           <div className="inline-flex items-center gap-2 mb-4 justify-between">
                       <InventoriesSearchInput/>
                       <InventoriesFilterDialog/>
                   <AddInventoriesDialog/>
               </div>
               <InventoriesFilterText/>
           </div>
           )
           };

           export default InventoriesHeader;