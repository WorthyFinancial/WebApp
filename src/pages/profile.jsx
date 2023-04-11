import Layout from "@/components/layout"

const ProfilePage = () => {
  return (
      <>
        <h1 className="text-xl font-semibold">Profile</h1>
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
