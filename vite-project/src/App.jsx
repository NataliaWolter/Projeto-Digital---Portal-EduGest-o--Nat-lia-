import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import DashboardEscola from "./pages/DashboardEscola";
import Turmas from "./pages/Turmas";
import AlunosTurma from "./pages/AlunosTurma";
import Servidores from "./pages/Servidores";
import CadastroServidor from "./pages/servidores/CadastroServidor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardEscola />} />
      <Route path="/turmas" element={<Turmas />} />
      <Route path="/turma/:id" element={<AlunosTurma />} />
      <Route path="/servidores" element={<Servidores />} />
      <Route path="/servidores/novo" element={<CadastroServidor />} />
    </Routes>
  );
}

export default App;
