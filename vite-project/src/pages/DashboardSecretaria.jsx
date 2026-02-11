import { useNavigate } from "react-router-dom";
import "./dashboardSecretaria.css";

function DashboardSecretaria() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-secretaria">
            <h1>Secretaria de Educação</h1>

            <div className="cards-container">

                <div className="card resumo">
                    <h3>Total de Escolas</h3>
                    <p>12</p>
                </div>

                <div className="card resumo">
                    <h3>Total de Vagas</h3>
                    <p>1.280</p>
                </div>

                <div className="card resumo">
                    <h3>Projetos em Andamento</h3>
                    <p>4</p>
                </div>

            </div>
            <div
                className="card-acao"
                onClick={() => navigate("/cadastro-projeto")}
            >
                <h3>📌 Cadastro de Projetos</h3>
                <p>Criar e gerenciar projetos educacionais</p>
            </div>


            {/* AÇÕES */}
            <div className="acoes-container">

                <div
                    className="card-acao"
                    onClick={() => navigate("/cadastro-projeto")}
                >
                    <h3>📌 Cadastrar Projeto</h3>
                    <p>Criar novo projeto educacional</p>
                </div>

                <div
                    className="card-acao"
                    onClick={() => navigate("/dashboard")}
                >
                    <h3>🏫 Ver Dashboard Escola</h3>
                    <p>Visualizar como diretora</p>
                </div>

            </div>
        </div>
    );
}

export default DashboardSecretaria;
