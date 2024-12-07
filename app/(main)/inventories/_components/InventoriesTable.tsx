import {findAllInventories} from "@/lib/api/nest/inventories/findAllInventories";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {LuBoxes} from "react-icons/lu";
import {formatDateToIndonesian } from '@/lib/formatDateToIndonesian';
import DeleteInventoriesDialog from "@/app/(main)/inventories/_components/DeleteInventoriesDialog";
import InventoriesAmountInput from "@/app/(main)/inventories/_components/InventoriesAmountInput";

type TInventoriesTableProps = {
   name?: string | undefined;
   brand?: string | undefined;
   size?: string | undefined;
   color?: string | undefined;
}

const InventoriesTable = async ({name, brand, size, color}: TInventoriesTableProps) => {
    const inventories = await findAllInventories(name, brand, size, color);

    if (!inventories) {
        return <>Error</>
    }

    if (inventories.length === 0) {
        return <div className="w-full h-96 flex items-center justify-center flex-col gap-4">
            <LuBoxes className="text-5xl" />
            <div>{name ? `No inventory with "${name}" name found`: "Inventory is empty"}</div>
        </div>
    }

    return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Updated</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Item Name</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Unit</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {inventories.map((inventory) =>
                        <TableRow key={inventory.id}>
                            <TableCell>{inventory.id}</TableCell>
                            <TableCell>{formatDateToIndonesian(inventory.created_at)}</TableCell>
                            <TableCell>{formatDateToIndonesian(inventory.updated_at)}</TableCell>
                            <TableCell className="capitalize">{inventory.brand}</TableCell>
                            <TableCell className="capitalize">{inventory.name}</TableCell>
                            <TableCell>{inventory.size}</TableCell>
                            <TableCell>{inventory.color}</TableCell>
                            <TableCell>
                                <InventoriesAmountInput inventoryId={inventory.id} defaultAmount={inventory.amount} />
                            </TableCell>
                            <TableCell>{inventory.unit}</TableCell>
                            <TableCell>
                                <DeleteInventoriesDialog id={inventory.id} name={inventory.name} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
    )
};

export default InventoriesTable;