import { create } from "zustand";

type TUseChangePasswordStore = {
    isLoading: boolean;
    openDialogue: boolean;
    updateStore: (key: keyof TUseChangePasswordStore, value: any) => void;
};

export const useChangePasswordStore= create<TUseChangePasswordStore>((set) => ({
    isLoading: false,
    openDialogue: false,
    updateStore: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),
}));
