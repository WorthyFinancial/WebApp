import {create, useStore} from 'zustand';
import transactions from "@/lib/transactions";

const ExpenseStore = create((set) => ({
    expenses: transactions,
    selectedExpense: [],
    active:true,
    setActiveState:() => set(state => ({active: !state.active})),
    addExpense: (expense) => set(state=> ({selectedExpense: [...state.selectedExpense, expense]})),
    removeExpense: () => set({selectedExpense:[]}),
}))

export const useExpenses = () => useStore(ExpenseStore);