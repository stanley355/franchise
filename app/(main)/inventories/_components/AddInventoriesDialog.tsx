import * as Dialog from "@radix-ui/react-dialog";
import {Button } from "@/components/ui/button";
import {LuPlusCircle, LuX} from "react-icons/lu";
import AddInventoriesForm from "@/app/(main)/inventories/_components/AddInventoriesForm";

const AddInventoriesDialog = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="outline">
                    <LuPlusCircle />
                    Add new inventory
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0" />
                <Dialog.Content className="bg-popover fixed top-[50%] left-[50%] p-4 rounded-md -translate-x-1/2 -translate-y-1/2 w-80 md:w-96">
                    <div className="flex items-center justify-between mb-4">
                        <Dialog.Title className="text-base font-semibold">
                            Add new inventory
                        </Dialog.Title>
                        <Dialog.Close asChild>
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