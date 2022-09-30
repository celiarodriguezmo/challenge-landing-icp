import "../styles/App.scss";
import avatar from "../images/avatar.svg";
import telefonoRoto from "../images/telefono-roto.jpg";

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <nav className='navMenu'>
          <ul className='menuList'>
            <li className='menuList__item'>Inicio</li>
            <li className='menuList__item'>Incidencias</li>
            <li className='menuList__item'>Almacén</li>
            <li className='menuList__item'>Servicio técnico</li>
          </ul>
          <img className='menuImage' src={avatar} alt='imagen de perfil' />
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
