import * as Dialog from "@radix-ui/react-dialog";
import {Button, buttonVariants} from "@/components/ui/button";
import {LuFilter } from "react-icons/lu";
import {cn} from "@/lib/utils";
import InventoriesBrandFilter from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesBrandFilter";
import {Label} from "@/components/ui/label";
import InventoriesSizeFilter from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesSizeFilter";
import InventoriesColorFilter from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesColorFilter";
import InventoriesFilterReset from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesFilterReset";

const InventoriesFilterDialog = () => {
    return <Dialog.Root>
        <Dialog.Trigger asChild >
            <Button variant="outline" size="icon">
                <LuFilter />
            </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0" />
            <Dialog.Content className="bg-popover fixed top-[50%] left-[50%] p-4 rounded-md -translate-x-1/2 -translate-y-1/2 w-80 md:w-96">
                <div className="flex items-center justify-between mb-4">
                    <Dialog.Title className="text-base font-semibold">
                        Filter Inventory
                    </Dialog.Title>
                    <InventoriesFilterReset />
                </div>
                <Label>Brand</Label>
                <InventoriesBrandFilter />
                <Label>Size</Label>
                <InventoriesSizeFilter />
                <Label>Color</Label>
                <InventoriesColorFilter />

                <Dialog.Close className={cn(buttonVariants(), "w-full")}>
                    Apply & Close
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
}

export default InventoriesFilterDialog
