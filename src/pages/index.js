import DebtPlan from "@/components/debtPlan"
import Layout from "@/components/layout"
import Dashboard from "./dashboard"
import debts from '../lib/debts';

const Home = () => {
  console.log('debts = ', debts)
  return (
    <main>
      <Layout />
      <Dashboard />
      <DebtPlan debts={[]}/>
    </main>
  )
}

export default Home;