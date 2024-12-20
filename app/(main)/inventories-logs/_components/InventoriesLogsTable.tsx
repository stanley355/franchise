import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {LuMinus, LuPlus} from "react-icons/lu";
import {formatDateToIndonesian } from '@/lib/formatDateToIndonesian';
import {findAllInventoriesLogs} from "@/lib/api/nest/inventories-logs/findAllInventoriesLogs";
import ErrorPage from "@/components/custom-ui/ErrorPage";
import InventoriesNotFound from "@/app/(main)/inventories/_components/InventoriesNotFound";

type TInventoriesLogsTableProps = {
    name?: string | undefined,
    brand?: string | undefined,
    size?: string | undefined,
    color?: string | undefined
}

const InventoriesLogsTable = async ({name, brand, size, color}: TInventoriesLogsTableProps) => {
    const inventoriesLogs = await findAllInventoriesLogs(name, brand, size, color)

    if (!inventoriesLogs) {
        return <ErrorPage />
    }

    if (inventoriesLogs.length === 0) {
        return <InventoriesNotFound />
    }

    return (
        <div className="max-h-[70vh] lg:max-h-[80vh] overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Brand</TableHead>
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
                            <TableCell className="capitalize">{inventory.brand}</TableCell>
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