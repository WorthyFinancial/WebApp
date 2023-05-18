import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/stores/auth";

export const withAuth = (WrappedComponent) =>  (props) => {
        const router = useRouter();
        const user = useAuth((state) => state.user)
    useEffect(() => {
      if (user && !user.jwt) {
        router.push('/email-login');
      }
    }, [user, router]);

    return <WrappedComponent {...props} />;
    }

 