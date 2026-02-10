import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastroServidor.css";

function CadastroServidor() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("");
  const [carga, setCarga] = useState("");
  const [situacao, setSituacao] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Validação simples
    if (!nome || !funcao || !carga || !situacao) {
      setErro("Preencha todos os campos obrigatórios.");
      return;
    }

    const novoServidor = {
      nome,
      funcao,
      carga,
      situacao,
    };

    // Simula envio para backend
    console.log("Servidor cadastrado:", novoServidor);

    // Limpa erro e volta para lista
    setErro("");
    navigate("/servidores");
  }

  return (
    <div className="pagina cadastro-servidor">
      <button
        className="btn-voltar"
        onClick={() => navigate("/servidores")}
      >
        ← Voltar para Servidores
      </button>

      <h1>Cadastro de Servidor</h1>

      <form className="form-servidor" onSubmit={handleSubmit}>
        {erro && <p className="erro">{erro}</p>}

        {/* NOME */}
        <div className="campo">
          <label>Nome *</label>
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        {/* FUNÇÃO */}
        <div className="campo">
          <label>Função *</label>
          <select
            value={funcao}
            onChange={(e) => setFuncao(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Professor">Professor</option>
            <option value="Coordenador de Cursos">
              Coordenador de Cursos
            </option>
            <option value="Secretária">Secretária</option>
            <option value="Direção">Direção</option>
          </select>
        </div>

        {/* CARGA HORÁRIA */}
        <div className="campo">
          <label>Carga Horária *</label>
          <select
            value={carga}
            onChange={(e) => setCarga(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="20h">20h</option>
            <option value="30h">30h</option>
            <option value="40h">40h</option>
          </select>
        </div>

        {/* SITUAÇÃO */}
        <div className="campo">
          <label>Situação *</label>
          <select
            value={situacao}
            onChange={(e) => setSituacao(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Efetivo">Efetivo</option>
            <option value="Cedido">Cedido</option>
            <option value="Recebido">Recebido</option>
            <option value="Permutado">Permutado</option>
            <option value="Afastado">Afastado</option>
          </select>
        </div>

        {/* AÇÕES */}
        <div className="acoes-form">
          <button type="submit" className="btn-salvar">
            Salvar
          </button>

          <button
            type="button"
            className="btn-cancelar"
            onClick={() => navigate("/servidores")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroServidor;
