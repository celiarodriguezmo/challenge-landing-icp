import avatar from "../images/avatar.svg";

function Header() {
  return (
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
  );
}
export default Header;
