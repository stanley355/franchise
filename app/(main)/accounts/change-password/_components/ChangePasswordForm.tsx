'use client'
import Link from "next/link";
import {LuChevronLeft, LuLoader2} from "react-icons/lu";
import {useShallow} from "zustand/react/shallow";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button, buttonVariants} from "@/components/ui/button";

import {useChangePasswordStore} from "@/app/(main)/accounts/change-password/_stores/useChangePasswordStore";
import {fetchChangePassword} from "@/lib/api/nest/fetchChangePassword";
import {toast} from "react-toastify";

const ChangePasswordForm = () => {
    const { isLoading, updateStore } = useChangePasswordStore(
        useShallow((state) => ({
            isLoading: state.isLoading,
            updateStore: state.updateStore,
        })),
    );

    const handleAction = async (formData: FormData) => {
        const oldPassword = formData.get("oldPassword") as string;
        const newPassword = formData.get("newPassword") as string;
        updateStore("isLoading", true);
        try {
            const  changePassword= await fetchChangePassword(oldPassword, newPassword);
            if (changePassword?.status === "OK") {
                toast(changePassword.status)
            } else {
               toast(changePassword.message)
            }
        } catch (e:any) {
            console.error(e.message);
            toast("Something went wrong, please try again later.");
        } finally {
            updateStore("isLoading", false)
        }
    }
   return (
       <form action={handleAction} className="w-fit">
          <Label>Old Password</Label>
           <Input type="password" placeholder="Old Password" className="mb-4" name="oldPassword" required />
           <Label>New Password (Uppercase, lowercase, number, and symbol)</Label>
           <Input type="password" placeholder="New Password" className="mb-4" name="newPassword" required />
           <Button type="submit" className="mb-4 w-full" disabled={isLoading}>
               {isLoading ? <LuLoader2 className="animate-spin" /> : "Change"}
           </Button>
           <Link href="/accounts" className={buttonVariants({variant: "outline"})}>
              <LuChevronLeft />
               Back to account
           </Link>
       </form>
   )
};

export default ChangePasswordForm;