import Logo from "@/components/Logo";
import Link from "next/link";


const SigninPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8 text-center">
            <div className="center logo">
                <Logo size={200}/>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-xl font-semibold"> Create an account to use Worthy</span>
            </div>
            <div className="w-5/12">
                <form className="flex flex-col gap-4">
                    <input className="register_input p-1" type="text" placeholder="First Name" />
                    <input className="register_input p-1" type="text" placeholder="Last Name" />
                    <input className="register_input p-1" type="text" placeholder="Email" />
                    <input className="register_input p-1" type="text" placeholder="Password" />
                    <div className="flex justify-end">
                        <Link href="/email-login">      
                            <button className="submit_btn py-2 px-3 rounded text-sm">Submit</button>
                        </Link>
                    </div>
                </form>
            </div>
           <div className="mt-10 ">
                <span className="text-xs">Already have an account? Sign-in <Link href="/email-login">here</Link></span>
           </div>
        </div>
    )
}

export default SigninPage