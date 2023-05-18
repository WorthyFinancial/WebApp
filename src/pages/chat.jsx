import PageTitle from "@/components/PageTitle"
import Layout from "@/components/layout"
import { withAuth } from "../HOC/protected"

const ChatPage = () => {
  return (
      <>
        <PageTitle title='Chat'/>
      </>
  )
}

ChatPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default withAuth(ChatPage)
