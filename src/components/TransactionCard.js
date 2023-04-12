import { Card, Box, CardBody } from "@chakra-ui/react";
import { useState } from "react";

const TransactionCard = ({selectedExpense}) => {

    return(
        <>
        {selectedExpense.map(expense=> {
            <Card size="sm" >
                <CardBody className="border card-font fw ">
                    <Box textAlign="right" display="flex" flexDirection="column" justifyContent="flex-end">
                        <div className="select"> 
                            <select defaultValue="cost-type" > 
                                <option name="Fixed"> Fixed</option>
                                <option name="Variable">Variable</option>
                            </select>
                        </div>
                    <div className="pa2">
                        This expense will repeat <input type="checkbox"></input>
                    </div>
                    </Box>
                    <Box className="pa-top">
                        <div className="expense-title line-h"> {expense.Merchant} </div>
                        <div className="italic fw line-h">{expense.Date}</div>
                        <div className="line-h">Amount: <span className="red fw2"> {expense.amount}</span> </div>
                        <div className="italic fw line-h">Balance: - $100.00 </div>
                        <div className="line-h">Description: {expense.Description} </div>
                        <div className="line-h">Card Used: {expense.Card_Last_Four}</div>
                    </Box>
                </CardBody>
            </Card>

        })}
           
        </>
    )
}

export default TransactionCard;

