import { useAuth } from "@/stores/auth";
import Link from "next/link";

const SignInNav = () => {
   const logout = useAuth(state => state.logout)
   return (
     <nav className="flex gap-4">
        <p className="text-2xl"><Link href="/">Profile</Link></p>
        <p className="text-2xl" onClick={logout}>Sign Out</p>
    </nav>
   )
}


export default SignInNav;