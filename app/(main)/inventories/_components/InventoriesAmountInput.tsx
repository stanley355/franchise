'use client'
import {Input} from "@/components/ui/input";
import {ChangeEvent, useRef} from "react";
import {updateInventories} from "@/lib/api/nest/inventories/updateInventories";
import {checkApiSessionExpired} from "@/lib/checkApiSessionExpired";
import {useLoginStore} from "@/app/accounts/login/_stores/useLoginStore";
import {useShallow} from "zustand/react/shallow";
import {toast} from "react-toastify";

type TInventoriesAmountInputProps = {
    inventoryId: number
    defaultAmount: number;
}

const InventoriesAmountInput = ({ inventoryId, defaultAmount}: TInventoriesAmountInputProps) => {
    const typingTimeoutRef = useRef<any>(null);
    const {updateLoginStore} = useLoginStore(
        useShallow((state) => ({
            updateLoginStore: state.updateStore
        }))
    )

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(async () => {
            const newAmount= Number(e.target.value);
            const inventories = await updateInventories(inventoryId, {amount: newAmount});
            if (!inventories) {
                const isExpired = checkApiSessionExpired(inventories)
                if (isExpired) {
                   updateLoginStore("openSessionExpiredDialogue", true)
                } else {
                   toast("Something went wrong, please try again later.")
                }
            }
        }, 500);
    };
    return (
        <Input type="number" step={0.5} min={0} id="amount" name="amount" className="w-fit" onChange={onChange} defaultValue={defaultAmount}/>
    )
};

export default InventoriesAmountInput;