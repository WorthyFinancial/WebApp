import PageTitle from "@/components/PageTitle"
import Layout from "@/components/layout"

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

export default ChatPage;
