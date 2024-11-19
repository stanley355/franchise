'use client'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useLoginStore} from "@/app/accounts/login/_stores/useLoginStore";
import {useShallow} from "zustand/react/shallow";
import {LuLoader2} from "react-icons/lu";
import {toast} from "react-toastify";
import {fetchSupertokensLogin} from "@/lib/api/supertokens/fetchSupertokensLogin";

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
          console.log(supertokensLogin);
          if (supertokensLogin.status === "OK") {

          } else {
              toast(supertokensLogin.status)
          }

      } catch (e) {
          console.error(e);
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
           <Button type="submit" className="w-full">
               {isLoading ? <LuLoader2 className="animate-spin" /> : "Login"}
           </Button>
       </form>
   )
};

export default LoginForm;