import Layout from "@/components/layout"

const  HelpPage = () => {
  return (
      <>
        <h1 className="text-xl font-semibold">Help</h1>
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

export default HelpPage;
