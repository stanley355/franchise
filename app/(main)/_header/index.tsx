'use client'
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import HeaderDialogue from "@/app/(main)/_header/HeaderDialogue";
import {cn} from "@/lib/utils";
import {HEADER_MENU} from "@/app/(main)/_header/constant";
import {usePathname} from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    return (
        <div className="flex items-center justify-between border rounded-md">
            <Link href="/" className={cn(buttonVariants({variant: "ghost"}), "font-bold")}>
                DEMO
            </Link>
            <HeaderDialogue/>
            <div className="items-center gap-2 hidden lg:flex">
                {HEADER_MENU.map((menu) => <Link href={menu.href} key={`desktop_menu_${menu.href}`}
                                                 className={cn(buttonVariants({variant: pathname === menu.href ? "default" : "ghost"}), "w-full justify-start")}>
                    {menu.icon}
                    {menu.title}
                </Link>)}
            </div>
        </div>
    )
};

export default Header;