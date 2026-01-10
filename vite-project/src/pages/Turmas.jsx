import { useNavigate } from "react-router-dom";
import "./turmas.css";

function Turmas() {
  const navigate = useNavigate();

  const turmas = [
    { id: 1, nome: "1º Ano A", alunos: 25 },
    { id: 2, nome: "2º Ano B", alunos: 28 },
    { id: 3, nome: "3º Ano C", alunos: 22 },
  ];

  return (
    <div className="pagina">
      <h1>Gestão de Turmas</h1>

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
