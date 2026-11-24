import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { token, user, checking } = useAuth();

  if (checking) return <main className="center-page"><p>Checking your session...</p></main>;
  if (!token || !user) return <Navigate to="/login" replace />;
  return <Outlet />;
}
