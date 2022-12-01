import './NavBar.css';
import "./CartWidget";
import CartWidget from './CartWidget';
import ButtonNavBar from './ButtonNavBar';

const logo = "images/auryn.png";

const Navbar = ({title}) => {
    return (
        <nav className="navbar-container">
            <div className='logo-container'>
                <img src={logo} className="logo-auryn" alt="Logo Atreyu Merchandising" />
                <p>{title}</p>
            </div>
            <div className="btn-navbar">
                <ButtonNavBar label="Griffindor"/>
                <ButtonNavBar label="Slyterhin"/>
                <ButtonNavBar label="Ravenclaw"/>
                <ButtonNavBar label="Hufflepuff"/>
                <CartWidget/>
            </div> 
        </nav>
    )
}

export default Navbar;