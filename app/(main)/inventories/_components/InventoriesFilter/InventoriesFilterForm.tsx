'use client'
import InventoriesBrandFilter from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesBrandFilter";
import {Label} from "@/components/ui/label";
import InventoriesSizeFilter from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesSizeFilter";
import InventoriesColorFilter from "@/app/(main)/inventories/_components/InventoriesFilter/InventoriesColorFilter";

const InventoriesFilterForm = () => {
   return (
       <form action=""  className="flex flex-col gap-4">
           <div>

           <Label htmlFor="brand">Brand</Label>
           <InventoriesBrandFilter />
           </div>
           <div>

           <Label htmlFor="size">Size</Label>
           <InventoriesSizeFilter />
           </div>
           <div>
              <Label htmlFor="color">Color</Label>
               <InventoriesColorFilter />
           </div>
       </form>
   )
};

export default InventoriesFilterForm;