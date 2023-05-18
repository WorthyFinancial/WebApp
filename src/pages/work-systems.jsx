import Layout from "@/components/layout"
import PageTitle from "@/components/PageTitle"
import { withAuth } from "@/components/protected"

const WorkSystemsPage = () => {
  return (
      <>
        <PageTitle  title='Work Systems' />
      </>
  )
}

WorkSystemsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default withAuth(WorkSystemsPage)
