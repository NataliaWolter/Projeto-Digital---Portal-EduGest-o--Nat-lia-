import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../assets/logoPortalInicio.png";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (!user || !password) {
      alert("Preencha usuário e senha");
      return;
    }

    console.log("Login OK, indo para dashboard");
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src={logo}
          alt="Logo do Portal EduGestão"
          className="login-logo"
        />

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
