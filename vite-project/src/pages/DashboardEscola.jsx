import "./dashboard.css";

function DashboardEscola() {
  return (
    <div className="dashboard">
      <h1>Minha Escola</h1>

      <div className="cards-container">
        <div className="card alunos">
          <h3>Total de Alunos</h3>
          <p>320</p>
        </div>

        <div className="card vagas">
          <h3>Vagas Livres</h3>
          <p>45</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardEscola;
