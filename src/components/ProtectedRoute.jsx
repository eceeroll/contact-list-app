import { Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ path, element }) {
  const user = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  // `path` prop'unu mutlak yolda başlatın
  const absolutePath = `/protected${path}`;

  return <Route path={absolutePath} element={element} />;
}

export default ProtectedRoute;
