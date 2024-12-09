import {findAllBills} from "@/lib/api/nest/bills/findAllBills";
import ErrorPage from "@/components/custom-ui/ErrorPage";
import BillsNotFound from "@/app/(main)/bills/_components/BillsNotFound";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {formatDateToIndonesian} from "@/lib/formatDateToIndonesian";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import BillsFinalPriceInput from "@/app/(main)/bills/_components/BillsFinalPriceInput";

const BillsTable = async () => {
    const bills = await findAllBills();

    if (!bills) {
        return <ErrorPage />
    }

    if (bills.length === 0) {
        return <BillsNotFound />
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead>Item Count</TableHead>
                    <TableHead>Total Price</TableHead>
                    <TableHead>Final Price</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {bills.map((bill) =>
                    <TableRow key={bill.id}>
                        <TableCell>{bill.id}</TableCell>
                        <TableCell>{formatDateToIndonesian(bill.created_at)}</TableCell>
                        <TableCell>{formatDateToIndonesian(bill.updated_at)}</TableCell>
                        <TableCell>{bill.item_count}</TableCell>
                        <TableCell>Rp {bill.total_price}</TableCell>
                        <TableCell className="flex items-center gap-1">
                            <span>Rp</span>
                            <BillsFinalPriceInput billsId={bill.id} defaultFinalPrice={bill.final_price} />
                        </TableCell>
                        <TableCell>
                            <Link href={`/bills/${bill.id}`} className={buttonVariants()}>
                                See items
                            </Link>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
};

export default BillsTable;