import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastroProjeto.css";

function CadastroProjeto() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [status, setStatus] = useState("Em andamento");

  function handleSubmit(e) {
    e.preventDefault();

    if (dataFim < dataInicio) {
      alert("A data final não pode ser menor que a data inicial.");
      return;
    }

    alert("Projeto cadastrado com sucesso!");
    navigate("/dashboard-secretaria");
  }

  return (
    <div className="pagina">
      <button
        className="btn-voltar"
        onClick={() => navigate("/dashboard-secretaria")}
      >
        ← Voltar
      </button>

      <h1>Cadastro de Projeto</h1>

      <form onSubmit={handleSubmit} className="form-projeto">
        <input
          type="text"
          placeholder="Nome do Projeto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <label>Data de Início</label>
        <input
          type="date"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
          required
        />

        <label>Data de Fim</label>
        <input
          type="date"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
          required
        />

        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Em andamento">Em andamento</option>
          <option value="Concluído">Concluído</option>
        </select>

        <button type="submit" className="btn-salvar">
          Salvar Projeto
        </button>
      </form>
    </div>
  );
}

export default CadastroProjeto;
