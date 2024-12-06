'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {LuMenu, LuX} from "react-icons/lu";

import {Button, buttonVariants} from "@/components/ui/button";
import {HEADER_MENU} from "@/app/(main)/_header/constant";
import {cn} from "@/lib/utils";

const HeaderDialogue = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                    <LuMenu className="text-3xl"/>
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0 p-4"/>
                <Dialog.Content className="bg-popover fixed top-0 left-0 w-full h-full">
                    <div className="flex items-center justify-between p-4">
                        <Dialog.Title className="font-bold text-base">Menu</Dialog.Title>
                        <Dialog.Close asChild>
                            <LuX className="text-xl"/>
                        </Dialog.Close>
                    </div>

                    {HEADER_MENU.map((menu) =>
                        <Dialog.Close asChild key={`header_dialogue_${menu.href}`} className="mb-2">
                            <Link
                                href={menu.href}
                                className={cn(buttonVariants({variant: "ghost"}), "w-full justify-start")}>
                                {menu.icon}
                                {menu.title}
                            </Link>
                        </Dialog.Close>
                    )}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default HeaderDialogue;