import { Navigate, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";
import { useSession } from "./lib/auth-client";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function Protected({ children }: { children: ReactNode }) {
  const { data, isPending } = useSession();
  if (isPending) return <p className="center">Carregando...</p>;
  if (!data) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
