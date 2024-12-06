import AddInventoriesDialog from "@/app/(main)/inventories/_components/AddInventoriesDialog";
import InventoriesSearchInput from "@/app/(main)/inventories/_components/InventoriesSearchInput";

const InventoriesHeader = () => {
    return (
       <div>
           <InventoriesSearchInput />
           {/*<AddInventoriesDialog />*/}
       </div>
    )
};

export default InventoriesHeader;