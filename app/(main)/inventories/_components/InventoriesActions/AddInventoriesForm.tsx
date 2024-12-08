'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {LuPlusCircle} from "react-icons/lu";
import {toast} from "react-toastify";
import {createNewInventories} from "@/lib/api/nest/inventories/createNewInventories";
import {useLoginStore} from "@/app/accounts/login/_stores/useLoginStore";
import {useShallow} from "zustand/react/shallow";
import {checkApiSessionExpired} from "@/lib/checkApiSessionExpired";
import {useRouter} from "next/navigation";
import AddInventoriesColorSelect from "@/app/(main)/inventories/_components/InventoriesActions/AddInventoriesColorSelect";
import {useAddInventoriesStore} from "@/app/(main)/inventories/_stores/addInventoriesStore";

const AddInventoriesForm = () => {
    const router = useRouter()
    const {updateLoginStore} = useLoginStore(
        useShallow((state) => ({
            updateLoginStore: state.updateStore
        }))
    )
    const { colors, updateStore} = useAddInventoriesStore(
        useShallow((state) => ({
            colors: state.colors,
            updateStore: state.updateStore
        }))
    )

    const handleAction = async (formData: FormData) => {
        const name = formData.get("name") as string;
        const brand = formData.get("brand") as string;
        const size = formData.get("size") as string;
        const amount = formData.get("amount") as string;
        const unit = formData.get("unit") as string
        try {
            const createData = {
                brand,
                name,
                size,
                color: colors,
                amount: Number(amount),
                unit,
            }

            const inventories = await createNewInventories(createData);
            if (inventories.id) {
                updateStore("colors", "")
                toast(`${name} added to inventories!`)
                router.refresh()
            } else if (checkApiSessionExpired(inventories)) {
                updateStore("colors", "")
                updateLoginStore("openSessionExpiredDialogue", true)
            } else {
                toast("Something went wrong, please try again later.")
            }
        } catch (e: any) {
            console.error(e.message);
            toast("Something went wrong, please try again later.")
        }
    }
    return (
        <form action={handleAction}>
            <Label>Brand</Label>
            <Input type="text" id="brand" name="brand" required className="mb-4" placeholder="Cth: Terry Palmer"/>
            <Label>Item Name</Label>
            <Input type="text" id="name" name="name" required className="mb-4" placeholder="Cth: Handuk Muka"/>
            <Label>Size (optional)</Label>
            <Input type="text" id="size" name="size" className="mb-4" placeholder="S/M/L/XL"/>
            <Label>Color (optional)</Label>
            <AddInventoriesColorSelect />
            <Label>Amount (0.5 multiplier)</Label>
            <Input type="number" step={0.5} min={0} id="amount" name="amount" required className="mb-4" placeholder="Cth: 12"/>
            <Label>Unit (optional)</Label>
            <Input type="text" id="unit" name="unit" className="mb-4" placeholder="Kosongkan jika satuan"/>
            <Button type="submit" className="w-full">
                <LuPlusCircle/>
                Add
            </Button>
        </form>
    )
};

export default AddInventoriesForm;