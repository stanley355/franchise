export type TInventories = {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    size: string | null;
    color: string | null;
    amount: number;
    unit: string | null;
    brand: string;
}