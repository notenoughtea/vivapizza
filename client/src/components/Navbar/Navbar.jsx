import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="wrapper">
    <li className="nlink">
      <Link to="/">Главная</Link>
    </li>
    <li className="nlink">
      <Link to="/menu">Меню</Link>
    </li>
    <li className="name">
      <div>Viva Pizza</div>
    </li>
    <li className="nlink">
      <Link to="/discount">Акции</Link>
    </li>
    <li className="nlink">
      <Link to="/contacts">Контакты</Link>
    </li>
  </nav>
);

export default Navbar;
