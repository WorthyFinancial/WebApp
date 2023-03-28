import Layout from "@/components/layout"
import Dashboard from "../components/dashboard"
import debts from '../lib/debts';

const Home = () => {
  console.log('debts = ', debts)
  return (
    <main>
      <Layout />
      <Dashboard />
    </main>
  )
}

export default Home;