import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastroServidor.css";

function CadastroServidor() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    funcao: "",
    cargaHoraria: "",
    situacao: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Servidor cadastrado:", form);

    alert("Servidor cadastrado com sucesso (mock)!");
    navigate("/servidores");
  }

  return (
    <div className="pagina-cadastro">
      <button className="btn-voltar" onClick={() => navigate("/servidores")}>
        ← Voltar
      </button>

      <h1>Cadastro de Servidor</h1>

      <form className="form-servidor" onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Função
          <input
            type="text"
            name="funcao"
            value={form.funcao}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Carga Horária
          <input
            type="text"
            name="cargaHoraria"
            value={form.cargaHoraria}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Situação
          <select
            name="situacao"
            value={form.situacao}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Ativo">Ativo</option>
            <option value="Cedido">Cedido</option>
            <option value="Recebido">Recebido</option>
            <option value="Permutado">Permutado</option>
          </select>
        </label>

        <button type="submit" className="btn-salvar">
          Salvar Servidor
        </button>
      </form>
    </div>
  );
}

export default CadastroServidor;
