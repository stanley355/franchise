'use client'
import {toast} from "react-toastify";
import {LuLogOut} from "react-icons/lu";
import {Button} from "@/components/ui/button";
import {fetchSupertokensSessionRemove} from "@/lib/api/supertokens/fetchSupertokensSessionRemove";

const LogoutBtn = () => {

   const onClick = async () => {
       try {
           const sessionRemove = await fetchSupertokensSessionRemove();

           if (sessionRemove.status === "OK") {
               window.location.href = "/accounts/login";
           } else {
               toast("Something went wrong, please try again later.");
           }
       } catch (e:any) {
           console.error(e.message);
           toast("Something went wrong, please try again later.");
       }
   }

    return (
        <Button className="gap-2 w-fit" variant="outline" onClick={onClick}>
            <LuLogOut />
            Log out
        </Button>
    )
};

export default LogoutBtn