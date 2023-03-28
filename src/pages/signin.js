import React from 'react';
import {Logo} from '../components/Logo';
import { SigninForm } from "@/features/auth/components/signin-form";

const SigninPage = () => {
    return (
        <div>
            <h1 className="tc">Enter Your Worthy Credentials</h1>
            <SigninForm />
        </div>
    )
}

export default SigninPage;