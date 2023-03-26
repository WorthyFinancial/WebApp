import {
  Flex,
  Spacer,
  Box,
  Divider,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import MainNavigation from "@/components/Navigation/MainNavigation";
import SignInNav from "@/components/Navigation/SignInNav";
import Logo from "@/components/Logo";

export default function Dashboard() {
  return (
    <div>
      <div className='flex flex-nowrap shadow-lg rounded bg-red-100 p-5 absolute basis-4/5 w-4/5 h-4/5 bottom-0 right-0'>
        <div className='w-1/3 h-52 shadow-lg rounded bg-slate-100 m-5 text-center'>
          <h2 className='text-2xl m-4'>Variable Expenses</h2>
          <div className='m-5'>
            <p>Available Balance</p>
            <h1 className='text-3xl font-bold'>$3,846.51</h1>
          </div>
          <p>Next Deposit: 9 days</p>
        </div>
        <div className='w-1/3 h-52 shadow-lg rounded bg-slate-100 m-5 text-center'>
          <h2 className='text-2xl m-4'>Fun Money</h2>
          <div className='m-5'>
            <p>Available Balance</p>
            <h1 className='text-3xl font-bold'>$1,341.17</h1>
          </div>
          <p>Next Deposit: 9 days</p>
        </div>
        <div className='w-1/3 h-52 shadow-lg rounded bg-slate-100 m-5 text-center'>
          <div className='flex no-flex-wrap center h-1/6'>
            <p className='font-bold'>Bills: </p> <p>Good Standing</p>
          </div>
          <div className='flex no-flex-wrap center h-1/6'>
            <p className='font-bold'>Debt: </p> <p>Good Standing</p>
          </div>
          <div className='flex no-flex-wrap center h-1/6'>
            <p className='font-bold'>Subscriptions: </p> <p>Good Standing</p>
          </div>
          <div className='flex no-flex-wrap center h-1/6'>
            <p className='font-bold'>Sinking Funds: </p> <p>Good Standing</p>
          </div>
          <div className='flex no-flex-wrap center h-1/6'>
            <p className='font-bold'>Emergency Fund: </p> <p>3 Months</p>
          </div>{" "}
          <div className='flex no-flex-wrap center h-1/6'>
            <p className='font-bold'>Short Term Savings: </p> <p>55% to goal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
