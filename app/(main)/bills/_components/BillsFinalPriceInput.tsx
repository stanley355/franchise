'use client'
import {Input} from "@/components/ui/input";
import {ChangeEvent, useRef} from "react";
import {updateInventories} from "@/lib/api/nest/inventories/updateInventories";
import {checkApiSessionExpired} from "@/lib/checkApiSessionExpired";
import {useLoginStore} from "@/app/accounts/login/_stores/useLoginStore";
import {useShallow} from "zustand/react/shallow";
import {toast} from "react-toastify";
import {updateBills} from "@/lib/api/nest/bills/updateBills";

type TBillsFinalPriceInputProps = {
    billsId: number
    defaultFinalPrice: number;
}

const BillsFinalPriceInput= ({ billsId, defaultFinalPrice}: TBillsFinalPriceInputProps) => {
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
            const newFinalPrice= Number(e.target.value);
            const bills = await updateBills(billsId, newFinalPrice);
            if (!bills) {
                const isExpired = checkApiSessionExpired(bills)
                if (isExpired) {
                    updateLoginStore("openSessionExpiredDialogue", true)
                } else {
                    toast("Something went wrong, please try again later.")
                }
            }
        }, 500);
    };
    return (
        <Input type="number" min={0} id="amount" name="final_price" className="w-fit" onChange={onChange} defaultValue={defaultFinalPrice}/>
    )
};

export default BillsFinalPriceInput;
