import { useState } from "react";
import Login from "./pages/Login";
import DashboardEscola from "./pages/DashboardEscola";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {isLogged ? (
        <DashboardEscola />
      ) : (
        <Login onLogin={() => setIsLogged(true)} />
      )}
    </>
  );
}

export default App;
