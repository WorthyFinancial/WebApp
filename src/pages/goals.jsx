import { Home } from "react-feather"
import { Checkbox } from "@chakra-ui/react";
import { create } from "zustand"
import { goals } from "@/lib/goals";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
    AccordionIcon,
  Box
} from '@chakra-ui/react'

const useGoalsStore = create(set => ({
    selectedGoals: [],
    addGoal: (goal) => set((state) => ({selectedGoals: [...state.selectedGoals, goal]})),
    removeGoal: (id) =>  set((state) => ({ selectedGoals: state.selectedGoals.filter(goal => goal.id !== id) }))
} ))

export default function GoalsPage() {
    return (
        <div>
            <h1>Goals</h1>
            <div className="flex gap-8">
                <div className="w-7/12">
                    <p>Step 1: Select goals that are important to you.</p>
                    <GoalsDirectory />
                </div>
                <div className="w-5/12">
                    <p>Step 2: Prioritize your selected goals</p>
                    <SelectedGoals />
                </div>   
            </div>
            
        </div>
    )
}

const GoalsDirectory = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                goals.map(goal => <GoalItem goal={goal} key={goal.id} />)
            }
        </div>
    )
}

const GoalItem = ({ goal }) => {
    const { title, id } = goal;
    const { addGoal, removeGoal } = useGoalsStore();
    const handleChecked = (e) => {
        const { checked } = e.target;

        if (checked) {
            addGoal(goal)
        } else {
            removeGoal(id);

        }
    }

    return (
        <div className="border flex flex-col p-8">
            <Checkbox onChange={(e) => handleChecked(e)} />
            <div className="mx-auto"><Home size={30} /></div>
            <p className="text-center">{title}</p>
        </div>
    )
}

const SelectedGoals = () => {
    const { selectedGoals } = useGoalsStore();

    return (<div className="border">
        <Accordion allowToggle>
            {
                selectedGoals.map(goal => {
                    return (<SelectedGoalItem goal={goal} />)
                })
            }
        </Accordion>
    </div>)
}

const SelectedGoalItem = ({ goal }) => {
    const { id, title, description } = goal; 
    return (
        <AccordionItem key={id}>
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