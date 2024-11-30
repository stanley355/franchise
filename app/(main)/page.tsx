import {Suspense} from "react";
import InventoriesTable from "@/app/(main)/inventories/_components/InventoriesTable";
import InventoriesLogsTable from "@/app/(main)/inventories-logs/_components/InventoriesLogsTable";

export default function Home() {
  return (
      <div className="p-4  overflow-hidden">
          <div className="max-h-[85vh] grid gap-4 lg:grid-cols-2 overflow-auto">

          <Suspense>
              <div>

              <h1 className="text-lg font-bold mb-4">INVENTORIES</h1>
             <InventoriesTable />
              </div>
          </Suspense>
          <Suspense>
              <div>
              <h1 className="text-lg font-bold mb-4">INVENTORIES LOGS</h1>
              <InventoriesLogsTable/>
              </div>
          </Suspense>
          </div>
      </div>
  );
}
