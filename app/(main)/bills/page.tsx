import BillsSearchInput from "@/app/(main)/bills/_components/BillsSearchInput";
import BillsTable from "@/app/(main)/bills/_components/BillsTable";

type TBillsPage = {
    searchParams: {
        id: string | undefined;
    }
}
const BillsPage = ({searchParams}: TBillsPage) => {
    return (
        <div className="p-4">
            <div className="mb-4">
            <BillsSearchInput />
            </div>
            <BillsTable id={Number(searchParams.id)} />
        </div>
    )
};

export default BillsPage;