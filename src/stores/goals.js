import { create, useStore } from "zustand";
import { goals } from "@/lib/goals";

const goalsStore = create(set => ({
    goals: goals,
    selectedGoals: [],
    toggleSelectedStatus: (id) => {
        set((state) => {
            const goals = [...state.goals];
            const goalIndex = goals.findIndex((goal) => goal.id === id);
            if (goalIndex !== -1) {
                const updatedGoal = { ...goals[goalIndex], isSelected: !goals[goalIndex].isSelected };
                goals[goalIndex] = updatedGoal;
                return { goals };
            }
            return state;
        });
    },
    addSelectedGoal: (goal) => set((state) => ({ selectedGoals: [...state.selectedGoals, goal] })),
    removeSelectedGoal: (id) =>  set((state) => ({ selectedGoals: state.selectedGoals.filter(goal => goal.id !== id) }))
}))

export const useGoals = () => useStore(goalsStore);