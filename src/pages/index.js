import DebtPlan from "@/components/DebtPlan"
import Layout from "@/components/layout"
import { withAuth } from "../HOC/protected"
import Dashboard from "@/features/dashboard/dashboard"
import { useAuth } from "@/stores/auth"

const Home = () => {
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

export default withAuth(Home)
