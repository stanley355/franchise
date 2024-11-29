import {findAllInventories} from "@/lib/api/nest/inventories/findAllInventories";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {LuBoxes} from "react-icons/lu";
import {formatDateToIndonesian } from '../../../../lib/formatDateToIndonesian';

const InventoriesTable = async () => {
    const inventories = await findAllInventories()

    if (!inventories) {
        return <>Error</>
    }

    if (inventories.length === 0) {
        return <div className="w-full h-96 flex items-center justify-center flex-col">
            <LuBoxes className="text-5xl" />
            <div>Inventory is empty</div>
        </div>
    }

    return (
        <div className="h-[80vh] overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Updated At</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {inventories.map((inventory) =>
                        <TableRow key={inventory.id}>
                            <TableCell>{inventory.id}</TableCell>
                            <TableCell>{formatDateToIndonesian(inventory.created_at)}</TableCell>
                            <TableCell>{formatDateToIndonesian(inventory.updated_at)}</TableCell>
                            <TableCell>{inventory.name}</TableCell>
                            <TableCell>{inventory.size}</TableCell>
                            <TableCell>{inventory.color}</TableCell>
                            <TableCell>{inventory.amount} {inventory.unit}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
};

export default InventoriesTable;