import {Accordion, VStack, AccordionItem, AccordionIcon, AccordionButton, Box, AccordionPanel, Spacer } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import PageTitle from "@/components/PageTitle";
import transactions from "@/lib/transactions";
import {create} from 'zustand';
import Layout from "@/components/layout";


const useExpenseStore = create((set) => ({
    expenses: transactions,
    selectedExpense: [],
    active:true,
    setActiveState:() => set(state => ({active: !state.active})),
    addExpense: (expense) => set(state=> ({selectedExpense: [...state.selectedExpense, expense]})),
    removeExpense: () => set({selectedExpense:[]}),
}))

const expense = () => {
    const { setActiveState, active } = useExpenseStore();

    return (
        <div className="flex">
            
            <div className="w-8/12">
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
            <div style={{display: active ? "none" : "block"}} className="w-4/12 bg-slate-50 h-screen">
                <div className={`closeBtn`} onClick={setActiveState}>
                &#x2715;
                </div>
                <TransactionCard />
            </div>
        
  
        </div>
    )
}

expense.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
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
            <ExpenseSubcategory category={category}/>
        </AccordionItem>
    )

}

const ExpenseSubcategory = ( {category}) => {
    let expenseResults;

    const { expenses } = useExpenseStore();
    
    
    expenseResults = expenses.filter((expense) => {
        return expense.Item_Category == category})

 

    return (
        <>
        {expenseResults.map(expense => 
            <ExpenseItem expense={expense} key={expense.id} />
        )}
        </>
    )
}

const ExpenseItem =({expense})=>{
    const { addExpense, removeExpense, setActiveState } = useExpenseStore();

    const handleClickedExpense = (addExpense, removeExpense, expense) => {
        removeExpense();
        addExpense(expense);
    }

    
    return(
        <div onClick={setActiveState}>
        <AccordionPanel  borderBottom="1px" borderColor='gray.200' pb={1} key={expense.id} onClick={() => handleClickedExpense(addExpense, removeExpense, expense)} display="flex" justifyContent="space-bewteen" >
        <Box textAlign="left" fontSize="10px">{expense.Merchant} </Box>
        <Spacer />
        <Box textAlign="right" fontSize="10px">{expense.amount} &gt;</Box>
        </AccordionPanel> 
        </div>
    )
}

const TransactionCard = () => {

    const {selectedExpense} = useExpenseStore();

    return (
        <div >
           {selectedExpense.map((expense) => {
            return(
             <Card key={expense.id} size="sm" >
                <CardBody className="border card-font fw ">
                    <Box textAlign="right" display="flex" flexDirection="column" justifyContent="flex-end">
                         <div> 
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
                         <div className="line-h">Card Used: {expense.Card_Last_four}</div>
                    </Box>
                 </CardBody>
             </Card> 
             )
            })}
            </div>
    )
}

export default expense;