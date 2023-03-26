import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [active, setActive] = useState("Home");

  const handleClick = (active) => {
    setActive(active);
  };

  console.log(active);

  return (
    <div>
      <div className='flex flex-row justify-between '>
        <div>
          <Link href={""} className={"text-gray-300"}>
            Home
          </Link>
          <Link href={""} className='ml-16'>
            Goals
          </Link>
        </div>
        <div>
          <Link href={""}>Profile</Link>
          <Link href={""} className='ml-16'>
            Signout
          </Link>
        </div>
      </div>
      <h1 className='text-center text-5xl mt-16'>Debt Pay-off</h1>
      <button className='bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 mt-7 rounded absolute left-2/3'>
        Button
      </button>

      <table class='table-auto mx-auto mt-24 border-separate'>
        <thead className='m-16'>
          <tr>
            <th className='border-b-2'>Debt</th>
            <th className='px-16 py-2 border-b-2'>Balance</th>
            <th className='px-16 py-2 border-b-2'>Payment</th>
            <th className='px-16 py-2 border-b-2'>months</th>
            <th className='border-b-2'>Est.finish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=' px-8 py-4 border-b-2'>storm</td>
            <td className='border-b-2'>$239</td>
            <td className='text-green-500 border-b-2'>$525.00</td>
            <td className='border-b-2'>1</td>
            <td className='border-b-2'>4/1/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
