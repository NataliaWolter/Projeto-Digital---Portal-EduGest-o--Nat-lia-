import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { turmas as turmasIniciais } from "../data/dados";
import "./dashboard.css";

function Turmas() {
  const navigate = useNavigate();

  const [turmas, setTurmas] = useState(turmasIniciais);
  const [nome, setNome] = useState("");
  const [alunos, setAlunos] = useState("");

  function adicionarTurma() {
    if (!nome || !alunos) return;

    const novaTurma = {
      id: Date.now(),
      nome: nome,
      alunos: Number(alunos),
    };

    setTurmas([...turmas, novaTurma]);
    setNome("");
    setAlunos("");
  }

  return (
    <div className="dashboard">

      <button
        className="btn-voltar"
        onClick={() => navigate("/dashboard-escola")}
      >
        ← Voltar
      </button>

      <h1>Gestão de Turmas</h1>

      <div className="form-turma">
        <input
          type="text"
          placeholder="Nome da turma"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantidade de alunos"
          value={alunos}
          onChange={(e) => setAlunos(e.target.value)}
        />

        <button onClick={adicionarTurma}>
          Adicionar Turma
        </button>
      </div>

      <div className="lista-turmas">
        {turmas.map((turma) => (
          <div key={turma.id} className="card">
            <h3>{turma.nome}</h3>
            <p>{turma.alunos} alunos</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Turmas;
