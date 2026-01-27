import { useParams, useNavigate } from "react-router-dom";
import "./turmas.css";

function AlunosTurma() {
  const { id } = useParams();
  const navigate = useNavigate();

  const alunos = [
    { id: 1, nome: "Ana Souza", especial: false },
    { id: 2, nome: "Carlos Lima", especial: true },
    { id: 3, nome: "Mariana Alves", especial: false },
    { id: 4, nome: "João Pedro", especial: true },
  ];

  return (
    <div className="pagina">
      <button className="btn-voltar" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <h1>Alunos da Turma {id}</h1>

      <ul className="lista-alunos">
        {alunos.map((aluno) => (
          <li
            key={aluno.id}
            className={`aluno ${aluno.especial ? "especial" : ""}`}
          >
            <span>{aluno.nome}</span>

            {aluno.especial && (
              <span className="badge">Especial</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlunosTurma;
