import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRole }) {
  const role = localStorage.getItem("userRole");

  if (role !== allowedRole) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;