
import useAuth from "@/hooks/useAuth";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const user = useAuth();

    if (!user) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;