import { create } from "zustand";

type TUseAddInventoriesStore = {
    openDialog: boolean
    isLoading: boolean
    colors: string;
    updateStore: (key: keyof TUseAddInventoriesStore, value: any) => void;
};

export const useAddInventoriesStore = create<TUseAddInventoriesStore>((set) => ({
    openDialog: false,
    isLoading: false,
    colors: "",
    updateStore: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),
}));
