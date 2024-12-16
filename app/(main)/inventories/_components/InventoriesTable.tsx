import {findAllInventories} from "@/lib/api/nest/inventories/findAllInventories";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {formatDateToIndonesian } from '@/lib/formatDateToIndonesian';
import DeleteInventoriesDialog from "@/app/(main)/inventories/_components/InventoriesActions/DeleteInventoriesDialog";
import InventoriesAmountInput from "@/app/(main)/inventories/_components/InventoriesAmountInput";
import ErrorPage from "@/components/custom-ui/ErrorPage";
import InventoriesNotFound from "@/app/(main)/inventories/_components/InventoriesNotFound";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

type TInventoriesTableProps = {
   name?: string | undefined;
   brand?: string | undefined;
   size?: string | undefined;
   color?: string | undefined;
}

const InventoriesTable = async ({name, brand, size, color}: TInventoriesTableProps) => {
    const inventories = await findAllInventories(name, brand, size, color);

    if (!inventories) {
        return <ErrorPage />
    }

    if (inventories.length === 0) {
        return <InventoriesNotFound />
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
                            <TableCell className="gap-2 flex items-center">
                                <Link
                                    href={`/inventories-logs?name=${inventory.name}&brand=${inventory.brand}`}
                                      className={buttonVariants()}
                                >
                                    Logs
                                </Link>
                                <DeleteInventoriesDialog id={inventory.id} name={inventory.name} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
    )
};

export default InventoriesTable;