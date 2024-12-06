import { create } from "zustand";

type TUseAddInventoriesStore = {
    colors: string;
    updateStore: (key: keyof TUseAddInventoriesStore, value: any) => void;
};

export const useAddInventoriesStore = create<TUseAddInventoriesStore>((set) => ({
    colors: "",
    updateStore: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),
}));
