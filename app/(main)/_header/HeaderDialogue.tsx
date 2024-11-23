import * as Dialog from "@radix-ui/react-dialog";
import {LuMenu, LuX } from "react-icons/lu";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {HEADER_MENU} from "@/app/(main)/_header/constant";
import {cn} from "@/lib/utils";

const HeaderDialogue = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild  className="lg:hidden">
                <Button variant="ghost" size="icon">
                    <LuMenu className="text-3xl" />
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0" />
                <Dialog.Content className="bg-popover fixed top-[50%] left-[50%] p-4 rounded-md -translate-x-1/2 -translate-y-1/2 w-80 md:w-96">
                    <div className="flex items-center justify-between mb-4">
                        <Dialog.Title className="font-bold text-base">Menu</Dialog.Title>
                        <Dialog.Close asChild>
                            <LuX className="text-xl" />
                        </Dialog.Close>
                    </div>
                    <div>
                        {HEADER_MENU.map((menu)=> <Link href={menu.href} key={`mobile_menu_${menu.href}`} className={cn(buttonVariants({variant: "ghost"}), "w-full justify-start")}>
                            {menu.icon}
                            {menu.title}
                        </Link> )}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default HeaderDialogue;