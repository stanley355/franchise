
// https://github.com/JedWatson/react-select/issues/5459
import dynamic from "next/dynamic";
import {INVENTORY_COLOR_OPTIONS} from "@/app/(main)/inventories/_components/constants";
import {useShallow} from "zustand/react/shallow";
import {useAddInventoriesStore} from "@/app/(main)/inventories/_stores/addInventoriesStore";

const Select = dynamic(() => import("react-select"), { ssr: false });

const AddInventoriesColorSelect = () => {
    const {updateStore} = useAddInventoriesStore(
        useShallow((state) => ({
            updateStore: state.updateStore
        }))
    )

    const onChange = (options: unknown) => {
        const COLOR_OPTIONS = options as typeof INVENTORY_COLOR_OPTIONS ;
       if (COLOR_OPTIONS.length >0) {
           const colors = COLOR_OPTIONS.map((option)=> option.value).join(", ");
           updateStore("colors", colors);
       } else {
           updateStore("colors", "");
       }
    }

    return (
        <Select isMulti options={INVENTORY_COLOR_OPTIONS} onChange={onChange}  className="mb-4" name="color" />
    )
};

export default AddInventoriesColorSelect