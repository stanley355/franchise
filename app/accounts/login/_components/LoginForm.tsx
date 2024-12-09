'use client'
import {toast} from "react-toastify";
import {LuLoader} from "react-icons/lu";
import {useShallow} from "zustand/react/shallow";
import {useLoginStore} from "@/app/accounts/login/_stores/useLoginStore";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import {fetchSupertokensLogin} from "@/lib/api/supertokens/fetchSupertokensLogin";
import {fetchSupertokensSession} from "@/lib/api/supertokens/fetchSupertokensSession";

const LoginForm = () => {
    const { isLoading, updateStore } = useLoginStore(
        useShallow((state) => ({
            isLoading: state.isLoading,
            updateStore: state.updateStore,
        })),
    );

   const handleAction = async (formData: FormData) => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      updateStore("isLoading", true);
      try {
          const supertokensLogin = await fetchSupertokensLogin(email, password);
          if (supertokensLogin.status === "OK") {
            const session = await fetchSupertokensSession(supertokensLogin.user.id, supertokensLogin.user, supertokensLogin.user);
            if (session) {
                toast("Login successful, redirecting...");
                window.location.href = "/";
            } else {
                toast("Something went wrong, please try again later.");
            }
          } else {
              toast(supertokensLogin.status)
          }
      } catch (e:any) {
          console.error(e.message);
          toast("Something went wrong, please try again later.");
      } finally {
          updateStore("isLoading", false);
      }
   }

   return (
       <form className="p-4 rounded-lg border w-full md:w-80" action={handleAction}>
            <h1 className="text-xl font-bold mb-2">Login</h1>
           <h2 className="text-lg font-semibold mb-4">Demo App</h2>

           <Label htmlFor="email">Email</Label>
           <Input type="email" placeholder="Email" name="email" required className="mb-4" />
           <Label htmlFor="password">Password</Label>
           <Input type="password" placeholder="Password" name="password" required className="mb-4" />
           <Button type="submit" className="w-full" disabled={isLoading}>
               {isLoading ? <LuLoader className="animate-spin" /> : "Login"}
           </Button>
       </form>
   )
};

export default LoginForm;