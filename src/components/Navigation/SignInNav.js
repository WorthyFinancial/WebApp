import Link from "next/link";


const SignInNav = () => {
   return (
     <nav className="flex gap-4">
        <p className="text-2xl"><Link href="/">Profile</Link></p>
        <p className="text-2xl"><Link href="/">Sign Out</Link></p>
    </nav>
   )
}


export default SignInNav;