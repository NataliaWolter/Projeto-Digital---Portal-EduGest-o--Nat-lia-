import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function DashboardEscola() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Minha Escola</h1>

      <div className="cards-container">
        <div className="card alunos">
          <h3>Total de Alunos</h3>
          <p>320</p>
        </div>

        <div className="card vagas">
          <h3>Vagas Livres</h3>
          <p>45</p>
        </div>
      </div>

      {/* AÇÕES */}
      <div className="acoes-container">
        <div
          className="card-acao"
          onClick={() => navigate("/turmas")}
        >
          <h3>📚 Gestão de Turmas</h3>
          <p>Criar e gerenciar turmas e alunos</p>
        </div>

        <div
          className="card-acao"
          onClick={() => navigate("/servidores")}
        >
          <h3>👩‍🏫 Gestão de Servidores</h3>
          <p>Visualizar e organizar o corpo docente</p>
        </div>
      </div>

    </div>
  );
}

export default DashboardEscola;
