'use client'
import {LuSearch} from "react-icons/lu";
import {Input} from "@/components/ui/input";
import {usePathname, useRouter} from "next/navigation";
import {ChangeEvent, useRef} from "react";

const InventoriesSearchInput = () => {
    const typingTimeoutRef = useRef<any>(null);
    const router = useRouter();
    const pathname = usePathname()

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const searchValue = e.target.value.toLowerCase().trim();
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set("name", searchValue);
            const newQueryString = urlParams.toString();
            const newPath = pathname + "?" + newQueryString;
            router.replace(newPath);
        }, 500);
    };

    return (
        <div className="flex items-center border rounded-md pl-2 flex-1">
            <LuSearch className="text-xl" />
            <Input type="text" placeholder="Search inventory name" onChange={onSearch} className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"/>
        </div>
    )
};

export default InventoriesSearchInput;