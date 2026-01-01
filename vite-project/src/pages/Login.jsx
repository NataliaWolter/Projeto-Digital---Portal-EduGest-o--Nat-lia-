import "./login.css";

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Portal EduGestão</h2>


                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />


                <button>Entrar</button>
            </div>
        </div>
    );
}
export default Login;