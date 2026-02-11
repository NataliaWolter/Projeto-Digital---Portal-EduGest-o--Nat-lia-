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

    //  Simulação de tipos de usuário
    if (user === "secretaria" && password === "123") {
      navigate("/dashboard-secretaria");
    } 
    else if (user === "diretora" && password === "123") {
      navigate("/dashboard");
    } 
    else {
      alert("Usuário ou senha inválidos");
    }
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

        <div style={{ fontSize: "12px", marginTop: "10px", opacity: 0.7 }}>
          <p><strong>Teste:</strong></p>
          <p>Diretora → diretora / 123</p>
          <p>Secretaria → secretaria / 123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
