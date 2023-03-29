import { useState } from "react";
import {Accordion, VStack, Divider, AccordionItem, AccordionIcon, AccordionButton, Box, AccordionPanel, Spacer } from "@chakra-ui/react";
import PageTitle from "@/components/PageTitle";
import SidePanel from "@/components/SidePanel";


const expense = () => {

    return (
        <>
            
            <div style={{width: 300, margin: "auto"}}>
            <div style={{height: 100}}></div>
                <VStack spacing="6">

                   <PageTitle title='Expense Categories' />

                        <Box p={4} w="100%" className="">
                            <Accordion allowMultiple className="border-rt border-lt"> 

                                  <ExpenseCategory category="Bills" />
                                  <ExpenseCategory category="Debt" />
                                  <ExpenseCategory category="Subscriptions" />
                                  <ExpenseCategory category="Investments" />
                                  <ExpenseCategory category="Other Expenses" />

                            </Accordion>
                        </Box>
                </VStack>
            </div>


        <SidePanel />
        
  
        </>
    )
}

const ExpenseCategory = ({category}) => {

    return(
        <AccordionItem>
            <h1>
                <AccordionButton> 
                <Box flex="1" textAlign='left' className="fw2">
                {category}
                </Box>
                <AccordionIcon />
                </AccordionButton>
            </h1>
            <ExpenseSubcategory />
        </AccordionItem>
    )

}

const ExpenseSubcategory = ({expense = 'Expense', cost = '- $ cost'}) => {
    
    const [active, setActive] = useState(`modal`);

    const handleToggle = (e) => {
        setActive(active => !active)
    }

    let toggleClass = active ? 'active'  : 'modal';

    return (
        <>
        <Divider />
        <AccordionPanel pb={1} className={` fw ${toggleClass}`} display="flex" justifyContent="space-bewteen" 
        onClick={handleToggle}>
        <Box textAlign="left" fontSize="10px">{expense} </Box>
        <Spacer />
        <Box textAlign="right" fontSize="10px">{cost} &gt;</Box>
    </AccordionPanel>
    </>
    )
}

export default expense;