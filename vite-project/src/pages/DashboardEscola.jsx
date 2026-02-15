import { useNavigate } from "react-router-dom";
import { escola, turmas } from "../data/dados";
import "./dashboard.css";

function DashboardEscola() {
  const navigate = useNavigate();

  // somar todos os alunos das turmas
  const totalAlunos = turmas.reduce(
    (total, turma) => total + turma.alunos,
    0
  );

  const vagasLivres = escola.totalVagas - totalAlunos;

  return (
    <div className="dashboard">

      <button
        className="btn-voltar"
        onClick={() => navigate("/dashboard-secretaria")}
      >
        ← Voltar para Secretaria
      </button>

      <h1>Minha Escola</h1>

      <div className="cards-container">
        <div className="card alunos">
          <h3>Total de Alunos</h3>
          <p>{totalAlunos}</p>
        </div>

        <div className="card vagas">
          <h3>Vagas Livres</h3>
          <p>{vagasLivres}</p>
        </div>
      </div>

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
