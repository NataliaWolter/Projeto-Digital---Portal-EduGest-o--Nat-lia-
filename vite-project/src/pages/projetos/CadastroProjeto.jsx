import { useNavigate } from "react-router-dom";
import "./cadastroProjeto.css";

function CadastroProjeto() {
  const navigate = useNavigate();

  // 🔹 Lista fake de professores (por enquanto)
  const professores = [
    { id: 1, nome: "Ana Souza" },
    { id: 2, nome: "Carlos Lima" },
    { id: 3, nome: "Fernanda Rocha" }
  ];

  return (
    <div className="pagina">
      <button className="btn-voltar" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <h1>Cadastro de Projeto</h1>

      <form className="form-projeto">
        <input type="text" placeholder="Nome do Projeto" />

        <textarea placeholder="Descrição" />

        <label>Data de Início</label>
        <input type="date" />

        <label>Data de Fim</label>
        <input type="date" />

        <label>Status</label>
        <select>
          <option>Em andamento</option>
          <option>Concluído</option>
          <option>Cancelado</option>
        </select>

        {/* 🔹 LISTA DE PROFESSORES */}
        <label>Selecionar Professores:</label>

        <div className="lista-professores">
          {professores.map((prof) => (
            <div key={prof.id} className="professor-item">
              <input type="checkbox" />
              <span>{prof.nome}</span>
            </div>
          ))}
        </div>

        <button type="submit" className="btn-salvar">
          Salvar Projeto
        </button>
      </form>
    </div>
  );
}

export default CadastroProjeto;
