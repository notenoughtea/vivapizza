import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from "react";
import SignUpModal from '../SignUpModal/SignUpModal';

const Navbar = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
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
                <Link to="/contacts">Контакты</Link>
            </li>
            <li className="nlink">
                <a className="openModalBtn"
                      onClick={() => {
                          setModalOpen(true);
                      }}>Sign Up</a>
            </li>
                {modalOpen && <SignUpModal className="SignUpModal" setModalOpen={setModalOpen} />}
        </nav>
    )
}

export default Navbar;
