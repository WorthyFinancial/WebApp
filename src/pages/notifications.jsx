import Layout from "@/components/layout"

const NotificationsPage = () => {
  return (
      <>
        <h1 className="text-xl font-semibold">Notifications</h1>
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
