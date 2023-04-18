import Layout from "@/components/layout"
import PageTitle from "@/components/PageTitle"

const SettingsPage = () => {
  return (
      <>
        <PageTitle title='Settings'/>
      </>
  )
}

SettingsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default SettingsPage;
