import { useNavigate } from "react-router-dom";
import { signOut, useSession } from "../lib/auth-client";

export default function Dashboard() {
  const { data } = useSession();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate("/login");
  }

  return (
    <div className="card">
      <h1>Dashboard</h1>
      <p>
        Bem-vindo, <strong>{data?.user.name || data?.user.email}</strong>!
      </p>
      <p className="muted">{data?.user.email}</p>
      <button onClick={handleSignOut}>Sair</button>
    </div>
  );
}
