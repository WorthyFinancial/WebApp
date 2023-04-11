import Layout from "@/components/layout"

const SettingsPage = () => {
  return (
      <>
        <h1 className="text-xl font-semibold">Settings</h1>
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
