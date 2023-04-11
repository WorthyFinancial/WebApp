import { Home } from "react-feather"
import { Checkbox } from "@chakra-ui/react";
import { create } from "zustand"

const size = 30;
const data = [
  { id: 1, title: "Buy a house", icon: <Home size={size} /> },
  { id: 2, title: "Buy a house", icon: <Home size={size} /> },
  { id: 3, title: "Buy a house", icon: <Home size={size} /> },
  { id: 4, title: "Buy a house", icon: <Home size={size} /> },
  { id: 5, title: "Buy a house", icon: <Home size={size} /> },
  { id: 6, title: "Buy a house", icon: <Home size={size} /> },
  { id: 7, title: "Buy a house", icon: <Home size={size} /> },
  { id: 8, title: "Buy a house", icon: <Home size={size} /> },
  { id: 9, title: "Buy a house", icon: <Home size={size} /> },
  { id: 10, title: "Buy a house", icon: <Home size={size} /> },
  { id: 11, title: "Buy a house", icon: <Home size={size} /> },
  { id: 12, title: "Buy a house", icon: <Home size={size} /> },
  { id: 13, title: "Buy a house", icon: <Home size={size} /> },
  { id: 14, title: "Buy a house", icon: <Home size={size} /> },
  { id: 15, title: "Buy a house", icon: <Home size={size} /> },
  { id: 16, title: "Buy a house", icon: <Home size={size} /> }
];

const useGoalsStore = create(set => ({
    goals: data,
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
    const { goals } = useGoalsStore();

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                goals.map(goal => <GoalItem goal={goal} key={goal.id} />)
            }
        </div>
    )
}

const GoalItem = ({ goal }) => {
    const { icon, title, id } = goal;
    const { addGoal, removeGoal } = useGoalsStore();
    const handleChecked = (e) => {
        const { checked } = e.target;

        if (checked) {
            addGoal(goal)
        } else {
            console.log("REMOVE")
            removeGoal(id);

        }
    }

    return (
        <div className="border flex flex-col p-8">
            <Checkbox onChange={(e) => handleChecked(e)} />
            <div className="mx-auto">{icon}</div>
            <p className="text-center">{title}</p>
        </div>
    )
}

const SelectedGoals = () => {
    const { selectedGoals } = useGoalsStore();

    return (<div className="border">
        {
            selectedGoals.map(goal => {
                return (<p key={goal.id}>{goal.title}</p>)
            })
        }
    </div>)
}