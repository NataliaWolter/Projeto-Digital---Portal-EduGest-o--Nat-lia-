import { useState } from "react";
import "./login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!user || !password) {
      alert("Preencha usuário e senha");
      return;
    }

    alert(`Bem-vindo(a), ${user}!`);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Portal EduGestão</h1>

        <input
          type="text"
          placeholder="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
