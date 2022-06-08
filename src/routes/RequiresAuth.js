import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts";

const RequiresAuth = ({ children }) => {
  const {
    auth: { isAuth },
  } = useAuth();
  const location = useLocation();
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequiresAuth;
