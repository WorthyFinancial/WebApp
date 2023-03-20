import Logo from "@/components/Logo";
import { SigninForm } from "@/features/auth/components/signin-form";

const SigninPage = () => {
    return (
        <div>
            <div className="center logo"><Logo size={200}/></div>
            <h1 className="tc">Enter Your Worthy Credentials</h1>
            <SigninForm />
        </div>
    )
}

export default SigninPage