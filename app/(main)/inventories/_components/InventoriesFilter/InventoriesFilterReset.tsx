'use client'
import {Button} from "@/components/ui/button";
import {usePathname, useRouter} from "next/navigation";

const InventoriesFilterReset = () => {
    const pathname = usePathname();
    const router = useRouter();
   return (
           <Button variant="outline" onClick={()=> router.replace(pathname)}>
              Reset
           </Button>
   )
};

export default InventoriesFilterReset