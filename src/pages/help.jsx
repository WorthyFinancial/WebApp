import Layout from "@/components/layout"
import PageTitle from "@/components/PageTitle"
import { withAuth } from "@/components/protected"

const  HelpPage = () => {
  return (
      <>
        <PageTitle title='Help'/>
      </>
  )
}

HelpPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default withAuth(HelpPage)
