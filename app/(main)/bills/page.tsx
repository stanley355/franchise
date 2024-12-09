import BillsSearchInput from "@/app/(main)/bills/_components/BillsSearchInput";
import BillsTable from "@/app/(main)/bills/_components/BillsTable";

const BillsPage = () => {
    return (
        <div className="p-4">
            <div className="mb-4">
            <BillsSearchInput />
            </div>
            <BillsTable />
        </div>
    )
};

export default BillsPage;