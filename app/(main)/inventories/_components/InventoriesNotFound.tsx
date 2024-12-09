import {LuBox} from "react-icons/lu";

const InventoriesNotFound = () => {
    return (
        <div className="w-full h-full min-h-96 flex flex-col items-center justify-center gap-2">
            <LuBox className="text-5xl"/>
            <div>Inventory not found</div>
        </div>
    )
};

export default InventoriesNotFound;