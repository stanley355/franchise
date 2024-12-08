'use client'
import * as Dialog from "@radix-ui/react-dialog";
import {Button } from "@/components/ui/button";
import {LuPlusCircle, LuX} from "react-icons/lu";
import AddInventoriesForm from "@/app/(main)/inventories/_components/InventoriesActions/AddInventoriesForm";
import {useAddInventoriesStore} from "@/app/(main)/inventories/_stores/addInventoriesStore";
import {useShallow} from "zustand/react/shallow";

const AddInventoriesDialog = () => {
    const { openDialog, updateStore} = useAddInventoriesStore(
        useShallow((state) => ({
            openDialog: state.openDialog,
            updateStore: state.updateStore
        }))
    )
    return (
        <Dialog.Root open={openDialog}>
            <Dialog.Trigger asChild onClick={()=> updateStore("openDialog", true)}>
                <Button variant="outline" size="icon">
                    <LuPlusCircle />
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 "onClick={()=> updateStore("openDialog", false)} />
                <Dialog.Content className="bg-popover fixed top-[50%] left-[50%] p-4 rounded-md -translate-x-1/2 -translate-y-1/2 w-80 md:w-96  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    <div className="flex items-center justify-between mb-4">
                        <Dialog.Title className="text-base font-semibold">
                            Add new inventory
                        </Dialog.Title>
                        <Dialog.Close asChild className="cursor-pointer" onClick={()=> updateStore("openDialog", false)}>
                                <LuX className="text-2xl" />
                        </Dialog.Close>
                    </div>
                    <AddInventoriesForm />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default AddInventoriesDialog;