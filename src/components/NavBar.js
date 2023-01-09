import './NavBar.css';
import "./CartWidget";
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../asyncmock';
import { useEffect, useState } from 'react';

const logo = "images/auryn.png";

const Navbar = ({title}) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then(res => {
            setCategories(res)
        })
    }, [])

    return (
        <nav className="navbar-container">
            <div className='logo-container'>
                <NavLink to="/"><img src={logo} className="logo-auryn" alt="Logo Atreyu Merchandising" /></NavLink>
                <p>{title}</p>
            </div>
            <div className="btn-navbar">
                {categories.map(cat => <NavLink to={`/category/${cat.id}`} key={cat.id} className="btn-navbar-button">{cat.description}</NavLink>)}
                {/* <NavLink to={`/category/libros`} className="btn-navbar-button">Libros</NavLink>
                <NavLink to={`/category/zapatillas`} className="btn-navbar-button">Zapatillas</NavLink>
                <NavLink to={`/category/remeras`} className="btn-navbar-button">Remeras</NavLink>
                <NavLink to={`/category/hufflepuff`} className="btn-navbar-button">Hufflepuff</NavLink> */}
                <NavLink to="/cart" className="btn-navbar-button"><CartWidget/></NavLink>
            </div> 
        </nav>
    )
}

export default Navbar;