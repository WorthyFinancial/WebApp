import Layout from "@/components/layout"

const ChatPage = () => {
  return (
      <>
        <h1 className="text-xl font-semibold">Chat</h1>
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
