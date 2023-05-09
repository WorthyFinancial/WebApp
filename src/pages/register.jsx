import Logo from "@/components/Logo";
import { useSignUp } from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const mutation = useSignUp();
  console.log("mutation", mutation.data);
  const onSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ firstName, lastName, email, password });
  };

  //   test3@gmail.com

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-8 text-center'>
      <div className='center logo'>
        <Logo size={200} />
      </div>
      <div className='flex flex-col gap-6'>
        <span className='text-xl font-semibold'>
          Create an account to use Worthy
        </span>
      </div>
      <div className='w-5/12'>
        <form className='flex flex-col gap-4' onSubmit={onSubmit}>
          <input
            className='register_input p-1'
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className='register_input p-1'
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className='register_input p-1'
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className='register_input p-1'
            type='text'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className='flex justify-end'>
            <button className='submit_btn py-2 px-3 rounded text-sm'>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='mt-10 '>
        <span className='text-xs'>
          Already have an account? Sign-in <Link href='/email-login'>here</Link>
        </span>
      </div>
    </div>
  );
};

export default SigninPage;
