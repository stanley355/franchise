import {cookies} from "next/headers";
import Link from "next/link";
import {decode, JwtPayload} from "jsonwebtoken";
import {buttonVariants} from "@/components/ui/button";
import LogoutBtn from "@/app/(main)/accounts/_components/LogoutBtn";

const AccountsPage = async () => {
    const token = cookies().get("accessToken")?.value as string;
    const jwtPayload = decode(token) as JwtPayload;

   return (
       <div className="p-4">
           <h1 className="text-lg font-bold mb-4">My Account</h1>

           <div>Email:</div>
           <div className="font-semibold mb-4">{jwtPayload.emails[0]}</div>

           <div className="flex flex-col gap-4 w-fit">
           <Link href="/accounts/change-password" className={buttonVariants()}>
              Change Password
           </Link>
               <LogoutBtn />
           </div>
       </div>
   )
};

export default AccountsPage;