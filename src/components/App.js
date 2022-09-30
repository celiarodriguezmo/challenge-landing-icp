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
        <section className='section-incidence'>
          <img src={telefonoRoto} alt='imagen de teléfono con pantalla rota' />
          <div>
            <h2>Título de la incidencia</h2>
            <p>fecha</p>
          </div>
          <article>
            <h3>Descripción:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              iusto aut, quaerat pariatur impedit ipsa. Necessitatibus quaerat,
              commodi amet non ipsum eveniet molestias ea dolore!
            </p>
            <button>Modificar incidencia</button>
          </article>
        </section>
        <section className='section-detail'>
          <form action='' className='form'>
            <legend className='form__title'>Modificar incidencia</legend>
            <fieldset className='form__section'>
              <label htmlFor='name' className='label-text'>
                Nombre
              </label>
              <input type='text' name='name' id='name' />

              <label htmlFor='surname' className='label-text'>
                Apellidos
              </label>
              <input type='text' name='surname' id='surname' />

              <label htmlFor='id-employee' className='label-text'>
                Id Empleado
              </label>
              <input type='text' name='id-employee' id='id-employee' />
            </fieldset>

            <fieldset className='form__section'>
              <label htmlFor='warehouse-sector' className='label-text'>
                Sector almacén
              </label>
              <input
                type='text'
                name='warehouse-sector'
                id='warehouse-sector'
              />

              <label htmlFor='position' className='label-text'>
                Posición
              </label>
              <input type='text' name='position' id='position' />

              <input type='file' name='attached-image' id='attached-image' />
            </fieldset>

            <fieldset className='form__section'>
              <label htmlFor='comments' className='label-text'>
                Descripción incidencia
              </label>
              <textarea
                id='comments'
                name='comments'
                rows='8'
                cols='80'
              ></textarea>
              <input type='submit' value='Enviar' />
              <input type='reset' value='Cancelar' />
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
