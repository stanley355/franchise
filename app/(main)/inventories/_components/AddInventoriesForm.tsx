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

const AddInventoriesForm = () => {
    const router = useRouter()
    const {updateLoginStore} = useLoginStore(
        useShallow((state) => ({
            updateLoginStore: state.updateStore
        }))
    )

    const handleAction = async (formData: FormData) => {
        const name = formData.get("name") as string;
        const size = formData.get("size") as string;
        const color = formData.get("color") as string;
        const amount = formData.get("amount") as string;
        const unit = formData.get("unit") as string
        try {
            const createData = {
                name: name.toLowerCase(),
                size: size.toLowerCase(),
                color: color.toLowerCase(),
                amount: Number(amount),
                unit: unit.toLowerCase(),
            }

            const inventories = await createNewInventories(createData);
            console.log(inventories)
            if (inventories.id) {
                toast(`${name} added to inventories!`)
                router.refresh()
            } else if (checkApiSessionExpired(inventories)) {
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
            <Label>Name</Label>
            <Input type="text" id="name" name="name" required className="mb-4"/>
            <Label>Size (optional)</Label>
            <Input type="text" id="size" name="size" className="mb-4"/>
            <Label>Color (optional)</Label>
            <Input type="text" id="color" name="color" className="mb-4"/>
            <Label>Amount (0.5 multiplier)</Label>
            <Input type="number" step={0.5} min={0} id="amount" name="amount" required className="mb-4"/>
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