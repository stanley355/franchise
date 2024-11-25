'use client'
import Link from "next/link";
import {useShallow} from "zustand/react/shallow";
import * as Dialog from "@radix-ui/react-dialog";

import { buttonVariants} from "@/components/ui/button";

import {useLoginStore} from "@/app/accounts/login/_stores/useLoginStore";
import {removeAccessAndRefreshToken} from "@/lib/removeAccessAndRefreshToken";

const SessionExpiredDialog = () => {
    const {  updateStore, openSessionExpiredDialogue } = useLoginStore(
        useShallow((state) => ({
            updateStore: state.updateStore,
            openSessionExpiredDialogue: state.openSessionExpiredDialogue
        })),
    );

    const handleClick = async () => {
        await removeAccessAndRefreshToken();
        updateStore("openSessionExpiredDialogue", false)
    }

    return (
        <Dialog.Root open={openSessionExpiredDialogue}>
            <Dialog.Portal >
                <Dialog.Overlay className="bg-popover-foreground/50 fixed inset-0" />
                <Dialog.Content className="bg-popover fixed top-[50%] left-[50%] p-4 rounded-md -translate-x-1/2 -translate-y-1/2 w-80 md:w-96">
                        <Dialog.Title className="font-bold text-base mb-2">Session Expired</Dialog.Title>
                        <Dialog.Description className="text-base mb-4">Please login to continue</Dialog.Description>
                        <Link href="/accounts/login" className={buttonVariants()} onClick={handleClick}>
                           Login
                        </Link>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default SessionExpiredDialog;