import DebtPlan from "@/components/debtPlan"
import Layout from "@/components/layout"
import Dashboard from "@/features/dashboard/dashboard"
import debts from '../lib/debts';

const Home = () => {
  console.log('debts = ', debts)
  return (
      <>
        <Dashboard />
        <DebtPlan debts={[]} />
      </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;