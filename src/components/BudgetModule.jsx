import React from 'react'

const BudgetModule = ({ title, money, next_deposit }) => {
    console.log(title, money, next_deposit)
    return (
        <div className="w-1/3 h-45 shadow-lg rounded bg-slate-100 m-5 p-2 text-center">
            <h2 className='text-2xl'>{title}</h2>
            <div className='m-2'>
                <p>Available Balance</p>
                <h1 className='text-3xl font-bold'>{money}</h1>
            </div>
            <p>Next Deposit: {next_deposit} days</p>
        </div>
    )
}

export default BudgetModule