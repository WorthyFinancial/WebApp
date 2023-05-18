import React from "react";
import DebtEntry from "./DebtEntry";

const DebtPlan = ( {debts} ) => {
    const debtArray = debts.map((debt, i) => {
        return (
            <DebtEntry 
                creditor={debts.creditor} 
                debtType={debts.debtType}
                balance={debts.balance} 
                minPayment={debts.minPayment} 
            />
        ) 
    });
    return (
        debtArray
    )
}
export default DebtPlan;