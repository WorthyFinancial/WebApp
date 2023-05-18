import Layout from "@/components/layout"
import PageTitle from "@/components/PageTitle"
import { withAuth } from "../HOC/protected"

const NotificationsPage = () => {
  return (
      <>
      <PageTitle title='Notifications'/>
      </>
  )
}

NotificationsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default withAuth(NotificationsPage)
