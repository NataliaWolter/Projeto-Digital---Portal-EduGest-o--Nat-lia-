import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./turmas.css";

function Turmas() {
  const navigate = useNavigate();

  const [turmas, setTurmas] = useState([
    { id: 1, nome: "1º Ano A", alunos: 25 },
    { id: 2, nome: "2º Ano B", alunos: 28 },
    { id: 3, nome: "3º Ano C", alunos: 22 },
  ]);

  const [novaTurma, setNovaTurma] = useState("");

  function adicionarTurma() {
    if (!novaTurma.trim()) {
      alert("Digite o nome da turma");
      return;
    }

    const nova = {
      id: Date.now(),
      nome: novaTurma,
      alunos: 0,
    };

    setTurmas([...turmas, nova]);
    setNovaTurma("");
  }

  return (
    <div className="pagina">

      <button
        className="btn-voltar"
        onClick={() => navigate("/dashboard")}
      >
        ← Voltar para o Dashboard
      </button>

      <h1>Gestão de Turmas</h1>

      <div className="form-turma">
        <input
          type="text"
          placeholder="Nome da nova turma"
          value={novaTurma}
          onChange={(e) => setNovaTurma(e.target.value)}
        />
        <button onClick={adicionarTurma}>Adicionar</button>
      </div>

      <div className="lista-turmas">
        {turmas.map((turma) => (
          <div
            key={turma.id}
            className="card-turma"
            onClick={() => navigate(`/turma/${turma.id}`)}
          >
            <h2>{turma.nome}</h2>
            <p>{turma.alunos} alunos</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Turmas;
