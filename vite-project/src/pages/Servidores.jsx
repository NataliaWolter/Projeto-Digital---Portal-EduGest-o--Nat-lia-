import { useState } from "react";
import "./servidores.css";

function Servidores() {
  const servidores = [
    {
      id: 1,
      nome: "Marcio Bigolin",
      funcao: "Professor",
      carga: "40h",
      situacao: "Ativo",
    },
    {
      id: 2,
      nome: "Gustavo Neuberge",
      funcao: "Coordenador de Cursos",
      carga: "40h",
      situacao: "Ativo",
    },
    {
      id: 3,
      nome: "Ana Souza",
      funcao: "Secretária",
      carga: "30h",
      situacao: "Inativo",
    },
  ];

  const [filtroFuncao, setFiltroFuncao] = useState("");

  const servidoresFiltrados = servidores.filter((s) => {
    if (!filtroFuncao) return true;
    return s.funcao === filtroFuncao;
  });

  return (
    <div className="pagina servidores">
      <h1>Gestão de Servidores</h1>

      {/* FILTRO */}
      <div className="filtros">
        <select
          value={filtroFuncao}
          onChange={(e) => setFiltroFuncao(e.target.value)}
        >
          <option value="">Todas as funções</option>
          <option value="Professor">Professor</option>
          <option value="Coordenador de Cursos">
            Coordenador de Cursos
          </option>
          <option value="Secretária">Secretária</option>
        </select>
      </div>

      {/* TABELA */}
      <table className="tabela-servidores">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th>Carga Horária</th>
            <th>Situação</th>
          </tr>
        </thead>

        <tbody>
          {servidoresFiltrados.map((s) => (
            <tr key={s.id}>
              <td>{s.nome}</td>
              <td>{s.funcao}</td>
              <td>{s.carga}</td>
              <td className={`status ${s.situacao.toLowerCase()}`}>
                {s.situacao}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Servidores;
