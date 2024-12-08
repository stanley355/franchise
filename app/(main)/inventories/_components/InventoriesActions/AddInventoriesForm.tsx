'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
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

            updateStore("isLoading", true);
            const inventories = await createNewInventories(createData);
            if (inventories.id) {
                toast(`${name} ${brand} added to inventories!`)
                router.refresh()
            } else if (checkApiSessionExpired(inventories)) {
                updateLoginStore("openSessionExpiredDialogue", true)
            } else {
                toast("Something went wrong, please try again later.")
            }
        } catch (e: any) {
            console.error(e.message);
            toast("Something went wrong, please try again later.")
        } finally {
            updateStore("colors", "")
            updateStore("isLoading", false);
            updateStore("openDialog", false)
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
            <div className="flex items-center justify-between gap-2">
            <Button type="submit" className="w-full" variant="outline" onClick={()=> setTimeout(()=> updateStore("openDialog", true), 500)}>
               Save & Add new
            </Button>
            <Button type="submit" className="w-full">
               Save
            </Button>
            </div>
        </form>
    )
};

export default AddInventoriesForm;