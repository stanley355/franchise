'use client'
import * as Dialog from "@radix-ui/react-dialog";
import {Button} from "@/components/ui/button";
import {toast} from "react-toastify";
import {checkApiSessionExpired} from "@/lib/checkApiSessionExpired";
import {useLoginStore} from "@/app/accounts/login/_stores/useLoginStore";
import {useShallow} from "zustand/react/shallow";
import {deleteBills} from "@/lib/api/nest/bills/deleteBills";
import {useRouter} from "next/navigation";

type TDeleteBillsDialog = {
    id: number;
}

const DeleteBillsDialog = ({id }: TDeleteBillsDialog) => {
    const router = useRouter();
    const {updateLoginStore} = useLoginStore(
        useShallow((state) => ({
            updateLoginStore: state.updateStore
        }))
    )

    const onClick = async () => {
        try {
            const inventories = await deleteBills(id);
            if (inventories) {
                toast(`Bill no. ${id} successfully deleted!`)
                router.refresh()
            } else if (checkApiSessionExpired(inventories)) {
                updateLoginStore("openSessionExpiredDialogue", true)
            } else {
                toast("Something went wrong, please try again later.")
            }
        } catch (e) {
            console.error(e);
            toast("Something went wrong, please try again later");
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="destructive">
                    Delete
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0" />
                <Dialog.Content className="bg-popover fixed top-[50%] left-[50%] p-4 rounded-md -translate-x-1/2 -translate-y-1/2 w-80 md:w-96">
                        <Dialog.Title className="text-base font-semibold mb-2">
                            Are you sure you want to delete bill no. {id}?
                        </Dialog.Title>
                        <Dialog.Description className="mb-4">
                           This will also remove the related bill items
                        </Dialog.Description>
                        <div className="flex items-center gap-4 flex-col md:flex-row w-full">
                            <Dialog.Close asChild>
                            <Button variant="destructive" type="button" onClick={onClick}>
                               Yes, delete
                            </Button>
                            </Dialog.Close>

                            <Dialog.Close asChild>
                                <Button variant="outline" type="button">
                                   Cancel
                                </Button>
                            </Dialog.Close>
                        </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default DeleteBillsDialog