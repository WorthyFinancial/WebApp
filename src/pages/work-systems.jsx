import Layout from "@/components/layout"

const WorkSystemsPage = () => {
  return (
      <>
        <h1 className="text-xl font-semibold">Work Systems</h1>
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

export default WorkSystemsPage;
