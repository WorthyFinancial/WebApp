import Logo from "@/components/Logo";


const SigninPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8 text-center">
            <div className="center logo">
                <Logo size={200}/>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-xl font-semibold"> Sign in to your Worthy Workspace</span>
                <span className="text-sm">Using employer credentials</span>
            </div>
            <div className="flex flex-col gap-4 hover: cursor-pointer">
                <span className="px-10 py-2 rounded-full login_banner">Sign in with SSO</span>
                <span className="px-10 py-2 rounded-full login_banner">Sign in with company email</span>
                <span className="px-10 py-2 rounded-full login_banner">Sign in with workspace URL</span>
            </div>
           <div className="mt-10 ">
                <span className="text-xs">Not using Worthy with an employer?</span>
           </div>
        </div>
    )
}

export default SigninPage