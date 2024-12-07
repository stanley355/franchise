import * as Dialog from "@radix-ui/react-dialog";
import {Button} from "@/components/ui/button";
import {LuFilter, LuX} from "react-icons/lu";
import InventoriesFilterForm from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesFilterForm";

const InventoriesFilterDialog = () => {
    return <Dialog.Root>
        <Dialog.Trigger asChild>
            <Button variant="outline">
                <LuFilter />
            </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0" />
            <Dialog.Content className="bg-popover fixed top-[50%] left-[50%] p-4 rounded-md -translate-x-1/2 -translate-y-1/2 w-80 md:w-96 h-96">
                <div className="flex items-center justify-between mb-4">
                    <Dialog.Title className="text-base font-semibold">
                        Filter Inventory
                    </Dialog.Title>
                    <Dialog.Close asChild className="cursor-pointer">
                        <LuX className="text-2xl" />
                    </Dialog.Close>
                </div>
                <InventoriesFilterForm  />
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
}

export default InventoriesFilterDialog
