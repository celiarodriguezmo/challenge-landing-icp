import "../styles/App.scss";
import avatar from "../images/avatar.svg";
import telefonoRoto from "../images/telefono-roto.jpg";

function App() {
  return (
    <div className='App'>
      <header>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Incidencias</li>
            <li>Almacén</li>
            <li>Servicio técnico</li>
          </ul>
          <img src={avatar} alt='imagen de perfil' />
        </nav>
      </header>
      <main>
        <section>
          <img src={telefonoRoto} alt='imagen de teléfono con pantalla rota' />
          <h2>Título de la incidencia</h2>
          <span>fecha</span>
          <h3>Descripción:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto
            aut, quaerat pariatur impedit ipsa. Necessitatibus quaerat, commodi
            amet non ipsum eveniet molestias ea dolore!
          </p>
          <button>Modificar incidencia</button>
        </section>
      </main>
    </div>
  );
}

export default App;
