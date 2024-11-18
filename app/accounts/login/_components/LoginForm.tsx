import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const LoginForm = () => {
   return (
       <form className="p-4 rounded-lg border">
            <h1 className="text-xl font-bold mb-2">Login</h1>
           <h2 className="text-lg font-semibold mb-4">Demo App</h2>

           <Label htmlFor="email">Email</Label>
           <Input type="email" placeholder="Email" className="mb-4" />
           <Label htmlFor="password">Password</Label>
           <Input type="password" placeholder="Password" className="mb-4" />
           <Button type="submit" className="w-full">Login</Button>
       </form>
   )
};

export default LoginForm;