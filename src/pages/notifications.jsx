import Layout from "@/components/layout"
import PageTitle from "@/components/PageTitle"

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

export default NotificationsPage;
