import Link from "next/link";


const SignInNav = () => {
   return (
<<<<<<< HEAD
     <nav style={ {display: 'flex', justifyContent:'flex-end'} }>
        <p className="f4 link dim black underline pa3 pointer">Profile</p>
        <p className="f4 link dim black underline pa3 pointer">Sign Out</p>
=======
     <nav className="flex gap-4">
        <p className="text-2xl"><Link href="/">Profile</Link></p>
        <p className="text-2xl"><Link href="/">Sign Out</Link></p>
>>>>>>> 55a45c566ae5e33c3c833073d11f32d8267c44c5
    </nav>
   )
}


export default SignInNav;