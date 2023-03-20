import MainNavigation from "@/components/Navigation/MainNavigation";
import Avatar from "@/components/Avatar";
import UserDetailForm from "@/features/user-detail/components/user-detail-form";

const UserDetailPage = () => {
  return (
    <div>
      <MainNavigation />
      <Avatar />
      <UserDetailForm />
    </div>
  );
};

export default UserDetailPage;