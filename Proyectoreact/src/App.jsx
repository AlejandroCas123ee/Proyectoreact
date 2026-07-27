import './App.css'
import picture from './assets/bart.jpg'
import header from "./components/header"
import './app.css'

function App() {
  return (
    <>
      <div className="card">
        <img
          src={picture}s
          className="foto"
        />

        <h1>Alejandro</h1>
        <h1>Bermudez</h1>

        <h1>Castellanos</h1>      

        <h2>ANÁLISIS Y DESARROLLO DE SOFTWARE</h2>
        <h3>Tecnólogo</h3>

        <hr />

        <h2>Hoja de vida del Aprendiz</h2>
        <p>
          Estudiante de Análisis y Desarrollo de Software con conocimientos en
          desarrollo web utilizando HTML, CSS, JavaScript . Me
          caracterizo por el trabajo en equipo, la responsabilidad y el deseo
          de aprender nuevas tecnologías nuevas para un futuro proyectado en buenas y exelentes empresas 
        </p>

        <h2>Información Personal</h2>
        <p><strong>Correo:</strong> Alejandro123@email.com</p>
        <p><strong>Teléfono:</strong> 311111111</p>
        <p><strong>Ciudad:</strong> Bogotá, Colombia</p>

        <h2>Cursos Realizados</h2>
        <ul>
          <li>Fundamentos en Data science</li>
          <li>html and css</li>
          <li>JavaScript</li>
          <li>Git y GitHub</li>
          <li>Rocket league y Warzone</li>
          <li>Pared agachada y todo rojo</li>
        </ul>

        <button>Descargar Hoja de Vida</button>
      </div>
    </>
  )
}

export default App