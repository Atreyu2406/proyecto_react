import './NavBar.css';
import "./CartWidget";
import CartWidget from './CartWidget';

import { NavLink } from 'react-router-dom';

const logo = "images/auryn.png";

const Navbar = ({title}) => {
    return (
        <nav className="navbar-container">
            <div className='logo-container'>
                <img src={logo} className="logo-auryn" alt="Logo Atreyu Merchandising" />
                <p>{title}</p>
            </div>
            <div className="btn-navbar">
                <NavLink to={`/category/libros`} className="btn-navbar-button">Libros</NavLink>
                <NavLink to={`/category/zapatillas`} className="btn-navbar-button">Zapatillas</NavLink>
                <NavLink to={`/category/remeras`} className="btn-navbar-button">Remeras</NavLink>
                <NavLink to={`/category/hufflepuff`} className="btn-navbar-button">Hufflepuff</NavLink>
                <CartWidget/>
            </div> 
        </nav>
    )
}

export default Navbar;