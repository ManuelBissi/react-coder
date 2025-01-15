import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="logo">MiTienda</div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
