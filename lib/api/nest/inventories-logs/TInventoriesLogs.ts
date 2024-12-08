
export type TInventoriesLogs = {
    id: number;
    created_at: string;
    brand: string;
    name: string;
    size: string | null;
    color: string | null;
    amount: number;
    unit: string | null;
    action: "addition" | "substraction"
}
