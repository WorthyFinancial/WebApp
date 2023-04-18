import Layout from "@/components/layout"
import PageTitle from "@/components/PageTitle"

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

export default ProfilePage;
