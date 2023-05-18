import Layout from "@/components/layout"
import PageTitle from "@/components/PageTitle"
import { withAuth } from "../HOC/protected"

const ProfilePage = () => {
  return (
      <>
        <PageTitle title='Profile'/>
      </>
  )
}

ProfilePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default withAuth(ProfilePage)
