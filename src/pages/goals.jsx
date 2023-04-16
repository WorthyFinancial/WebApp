import { Home } from "react-feather"
import { Checkbox } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';
import Layout from "@/components/layout";
import { useGoals } from "@/stores/goals";


export default function GoalsPage() {
    return (
        <>
            <h1 className="text-xl font-semibold">Goals</h1>
            <div className="flex gap-8">
                <div className="w-7/12">
                    <p className="my-2">Step 1: Select goals that are important to you.</p>
                    <GoalsDirectory />
                </div>
                <div className="w-5/12">
                    <p className="my-2">Step 2: Prioritize your selected goals</p>
                    <SelectedGoals />
                </div>   
            </div>
            
        </>
    )
}

GoalsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

const GoalsDirectory = () => {
    const { goals } = useGoals();
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                goals.map(goal => <GoalItem goal={goal} key={goal.id} />)
            }
        </div>
    )
}

const GoalItem = ({ goal }) => {
    const { title, id, isSelected } = goal;
    const { toggleSelectedStatus, addSelectedGoal, removeSelectedGoal } = useGoals();

    const handleChecked = (e) => {
        const { checked } = e.target;
        
        toggleSelectedStatus(id);
        
        if (checked) {
            addSelectedGoal(goal);
        } else {
            removeSelectedGoal(id);
        }
    }

    return (
        <div className="border flex flex-col p-4 gap-2">
            <Checkbox className="self-end" isChecked={isSelected} onChange={(e) => handleChecked(e)} />
            <div className="mx-auto"><Home size={30} /></div>
            <p className="text-center">{title}</p>
        </div>
    )
}

const SelectedGoals = () => {
    const { selectedGoals } = useGoals();

    return (<div className="min-h-screen bg-slate-50 p-2">
        <Accordion allowToggle className="bg-white">
            {
                selectedGoals.map(goal => {
                    return (<SelectedGoalItem goal={goal} key={goal.id} />)
                })
            }
        </Accordion>
    </div>)
}

const SelectedGoalItem = ({ goal }) => {
    const { title, description } = goal; 
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        {title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
              <AccordionPanel pb={4}>
                {description}
                </AccordionPanel>
        </AccordionItem>
    )
}