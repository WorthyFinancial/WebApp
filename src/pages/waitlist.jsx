import Logo from "@/components/Logo";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { useAddToWaitlist } from "@/hooks/useWaitlist";

const Headline = styled.h1`
  font-weight: bold;
  font-size: 75px;
  background: transparent;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  text-shadow: rgba(0, 0, 0, 0.4) 0 4px 5px;
`;

const Description = styled.span`
  font-weight: 400;
  background: transparent;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  text-align: center;
  font-size: 20px;
`;

const WaitListPage = () => {
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [position, setPosition] = useState("");
  const mutation = useAddToWaitlist((data) => {
    setReferralCode(data.data.referralCode);
    setPosition(data.data.position);
  });
  const onSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ email, referralCode });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 text-center">
      <div className="center logo">
        <Logo size={200} />
      </div>
      {mutation.data === undefined && (<div>
        <div className="flex flex-col gap-6">
          <Headline>Personal Finance Automation</Headline>
          <Description> Corporate professionals, don't struggle with money living paycheck to paycheck.<br />Instead,
            use an automated budget to personalized to accomplish your unique circumstance and money
            goals.</Description>
        </div>
        <div className="w-5/12">
          <form className="flex flex-col gap-4">
            <input className="register_input p-1" type="text" placeholder="Enter your email.."
                   onChange={(e) => setEmail(e.target.value)} value={email} />
            <div className="flex justify-end">
              <button className="submit_btn py-2 px-3 rounded text-sm" onClick={(event) => onSubmit(event)}>Request
                FREE Early Access
              </button>
            </div>

          </form>
        </div>
      </div>)}
      {mutation.data && (
        <div className="flex flex-col gap-6">
          <Headline>Thank you!!!</Headline>
          <Description> Your position is {position} in the waiting list. If you want to move up in the list please share
            this
            <Link
              href={"app.worhtysinancial.com/waitlist?code=" + referralCode}>app.worhtysinancial.com/waitlist?code={referralCode}</Link> with
            your friends.</Description>
        </div>
      )}
    </div>
  );
};

export default WaitListPage;

