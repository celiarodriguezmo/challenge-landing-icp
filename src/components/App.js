import "../styles/App.scss";
import avatar from "../images/avatar.svg";
import telefonoRoto from "../images/telefono-roto.jpg";

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <nav className='nav-menu'>
          <ul className='menu-list'>
            <li className='menu-list__item'>Inicio</li>
            <li className='menu-list__item'>Incidencias</li>
            <li className='menu-list__item'>Almacén</li>
            <li className='menu-list__item'>Servicio técnico</li>
          </ul>
          <img className='menu-image' src={avatar} alt='imagen de perfil' />
        </nav>
      </header>
      <main className='main'>
        <section className='section-incidence'>
          <img
            className='section-incidence__image'
            src={telefonoRoto}
            alt='imagen de teléfono con pantalla rota'
          />
          <div className='section-incidence__wrap'>
            <h3 className='wrap__title'>Título de la incidencia</h3>
            <p className='wrap__date'>fecha</p>
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
            <h3 className='form__title'>Modificar incidencia</h3>
            <fieldset className='form__section'>
              <div className='input-wraper'>
                <label htmlFor='name' className='label-text'>
                  Nombre
                </label>
                <input className='input' type='text' name='name' id='name' />
              </div>
              <div className='input-wraper'>
                <label htmlFor='surname' className='label-text'>
                  Apellidos
                </label>
                <input
                  className='input'
                  type='text'
                  name='surname'
                  id='surname'
                />
              </div>

              <div className='input-wraper'>
                <label htmlFor='id-employee' className='label-text'>
                  Id Empleado
                </label>
                <input
                  className='input'
                  type='text'
                  name='id-employee'
                  id='id-employee'
                />
              </div>
            </fieldset>

            <fieldset className='form__section'>
              <div className='input-wraper'>
                <label htmlFor='warehouse-sector' className='label-text'>
                  Sector almacén
                </label>
                <input
                  className='input'
                  type='text'
                  name='warehouse-sector'
                  id='warehouse-sector'
                />
              </div>
              <div className='input-wraper'>
                <label htmlFor='position' className='label-text'>
                  Posición
                </label>
                <input
                  className='input'
                  type='text'
                  name='position'
                  id='position'
                />
              </div>

              <input
                className='input--file'
                type='file'
                name='attached-image'
                id='attached-image'
                width='170'
              />
            </fieldset>

            <fieldset className='form__section--area'>
              <div className='input-wraper--area'>
                <label htmlFor='comments' className='label-text'>
                  Descripción incidencia
                </label>
                <textarea
                  className='input--area'
                  id='comments'
                  name='comments'
                  rows='8'
                  cols='80'
                ></textarea>
                <div className='button-wraper'>
                  <input
                    className='input-button'
                    type='submit'
                    value='Enviar'
                  />
                  <input
                    className='input-reset'
                    type='reset'
                    value='Cancelar'
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
