import { Card, Box, CardBody } from "@chakra-ui/react";
import { useState } from "react";

const TransactionCard = ({title='Expense Title', date ='Apr 1 2023',
amount='-$100.00', balance ='', description='A description of Expense', card='5555'}) => {

    return(
        <>
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
                        <div className="expense-title line-h"> {title} </div>
                        <div className="italic fw line-h">{date}</div>
                        <div className="line-h">Amount: <span className="red fw2"> {amount}</span> </div>
                        <div className="italic fw line-h">Balance: {balance} </div>
                        <div className="line-h">Description: {description} </div>
                        <div className="line-h">Card Used: {card}</div>
                    </Box>
                </CardBody>
            </Card>
        </>
    )
}

export default TransactionCard;

