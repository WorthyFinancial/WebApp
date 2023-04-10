import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
  
const fundData = [
    {
        name: "Bills",
        standing: "Good standing"
    },
    {
        name: "Debts",
        standing: "Good standing"
    },
    {
        name: "Subscriptions",
        standing: "Good standing"
    },
    {
        name: "Sinking Funds",
        standing: "Good standing"
    }
]

const FinancialStandingModule = ({ fund_name, standing }) => {
    return (
        <div className="w-3/6 h-52">
            <h2 className="text-2xl font-semibold m-5">Funds</h2>
            {/* // height is static, add min-width */}
            <div className="flex flex-col shadow-lg rounded bg-slate-100 m-5 p-5">
                {fundData.map((fund) => (
                    <div className="flex justify-between border-b mb-1">
                        <div className="font-medium">{fund.name}</div>
                        <div className="text-green-500">{fund.standing}</div>
                    </div>
                ))}
        
            </div>
        </div>
    )
}

export default FinancialStandingModule