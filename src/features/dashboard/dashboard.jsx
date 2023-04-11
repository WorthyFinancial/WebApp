import BudgetModule from "./../../components/BudgetModule"
import FinancialStandingModule from '@/components/FinancialStandingModule'


const budgetData = [
    {
        title: "Variable Expenses",
        money: "3,846.51",
        next_deposit: 9
    },
    {
        title: "Fun Money",
        money: "1,431.17",
        next_deposit: 9
    },
    {
        title: "Car Expenses",
        money: "1564.53",
        next_deposit: 3
    }
]

export default function Dashboard() {
    return (
        <>
            <div className='flex flex-nowrap'>
                {
                    budgetData.map((budget) => (
                            <BudgetModule title={budget.title} money={budget.money} next_deposit={budget.next_deposit} />
                    ))
                    }
            </div>
            <div className="flex">
                <FinancialStandingModule/>
            </div>
        
        </>
        
    )
  }