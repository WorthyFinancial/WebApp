import Logo from "@/components/Logo";
import { useSignIn } from "@/hooks/useAuth";
import { useAuth } from "@/stores/auth";
import { useEffect } from "react";
import { useState } from "react";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, data } = useSignIn();
  const setUser = useAuth((state) => state.setUser);
  const user = useAuth((state) => state.user);

  console.log("zustand store", user);
  const onSubmmit = (event) => {
    event.preventDefault();
    mutate({ email, password });
  };

  useEffect(() => {
    if (data) {
      setUser(data.data);
    }
  }, [data, setUser]);

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-8 text-center'>
      <div className='center logo'>
        <Logo size={200} />
      </div>
      <div className='flex flex-col gap-6'>
        <span className='text-xl font-semibold'>
          {" "}
          Sign in with your Personal Email
        </span>
      </div>
      <div className='w-5/12'>
        <form className='flex flex-col gap-4' onSubmit={onSubmmit}>
          <input
            className='register_input p-1'
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className='register_input p-1'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className='flex justify-end'>
            <button
              className='submit_btn py-2 px-3 rounded text-sm'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
