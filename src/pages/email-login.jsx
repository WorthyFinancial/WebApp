import Logo from "@/components/Logo";


const SigninPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8 text-center">
            <div className="center logo">
                <Logo size={200}/>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-xl font-semibold"> Sign in with your Personal Email</span>
            
            </div>
            <div className="w-5/12">
                <form className="flex flex-col gap-4">
                    <input className="register_input p-1" type="text" placeholder="Email" />
                    <input className="register_input p-1" type="text" placeholder="Password" />
                    <div className="flex justify-end">
                        <button className="submit_btn py-2 px-3 rounded text-sm">Submit</button>
                    </div>
               
                </form>
            </div>
        </div>
    )
}

export default SigninPage