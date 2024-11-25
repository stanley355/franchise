'use client'
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {useChangePasswordStore} from "@/app/(main)/accounts/change-password/_stores/useChangePasswordStore";
import {useShallow} from "zustand/react/shallow";

const ChangePasswordDialog = () => {
    const {openDialogue, updateStore} = useChangePasswordStore(
        useShallow((state) => ({
            updateStore: state.updateStore,
            openDialogue: state.openDialogue,
        })),
    );

    return (
    <Dialog.Root open={openDialogue}>
        <Dialog.Portal >
            <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0" />
            <Dialog.Content className="bg-popover fixed top-[50%] left-[50%] p-4 rounded-md -translate-x-1/2 -translate-y-1/2 w-80 md:w-96">
                <Dialog.Title className="font-bold text-base mb-2">Password successfully changed</Dialog.Title>
                <Dialog.Description className="text-base mb-4">Please login again to continue</Dialog.Description>
                <Link href="/accounts/login" className={buttonVariants()} onClick={()=> updateStore("openDialogue", false)}>
                    Login
                </Link>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
    )
};

export default ChangePasswordDialog;