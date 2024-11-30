import {findAllInventories} from "@/lib/api/nest/inventories/findAllInventories";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {LuBoxes, LuMinus, LuPlus} from "react-icons/lu";
import {formatDateToIndonesian } from '@/lib/formatDateToIndonesian';
import DeleteInventoriesDialog from "@/app/(main)/inventories/_components/DeleteInventoriesDialog";
import InventoriesAmountInput from "@/app/(main)/inventories/_components/InventoriesAmountInput";
import {findAllInventoriesLogs} from "@/lib/api/nest/inventories-logs/findAllInventoriesLogs";

type TInventoriesLogsTableProps = {
   name?: string | undefined;
}

const InventoriesLogsTable = async ({name}: TInventoriesLogsTableProps) => {
    const inventoriesLogs = await findAllInventoriesLogs(name)

    if (!inventoriesLogs) {
        return <>Error</>
    }

    if (inventoriesLogs.length === 0) {
        return <div className="w-full h-96 flex items-center justify-center flex-col gap-4">
            <LuBoxes className="text-5xl" />
            <div>{name ? `No inventory with "${name}" name found`: "Inventory is empty"}</div>
        </div>
    }

    return (
        <div className="max-h-[70vh] lg:max-h-[80vh] overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Unit</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {inventoriesLogs.map((inventory) =>
                        <TableRow key={inventory.id}>
                            <TableCell>{inventory.id}</TableCell>
                            <TableCell>{formatDateToIndonesian(inventory.created_at)}</TableCell>
                            <TableCell className="capitalize">{inventory.name}</TableCell>
                            <TableCell>{inventory.size}</TableCell>
                            <TableCell>{inventory.color}</TableCell>
                            <TableCell className="flex gap-2 items-center">{inventory.action === "addition"? <LuPlus /> : <LuMinus />}{inventory.amount}</TableCell>
                            <TableCell>{inventory.unit}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
};

export default InventoriesLogsTable;