import "./App.css";
import picture from "./assets/bart.jpg";
import Header from "./components/header.jsx";
import Perfil from "./components/perfil.jsx";
import Cursos from "./components/cursos.jsx";

import "./app.css";

function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Perfil />
        <Cursos />
      </div>

      
    </>
  );
}

export default App;