import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faMagnifyingGlass, faCartShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import Home from './Home';
// import Aboutus from './Aboutus';
// import Contactus from './Contactus';
// import Recipes from './Recipes';
// import Whypintola from './Whypintola';
// import Store from './Store';


const Navbar = () => {
  return (
    <div className='con1' >
      <div className="">
        <p>
          <FontAwesomeIcon icon={faBagShopping} /> Use FIRST15 & Get FLAT 15% OFF on your First Order!
        </p>

        <div className="nav">
          <div className="logo">
            <a href="https://pintola.in/">
              <img src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_200x.png?v=1655118347" />
            </a>
          </div>
          <div className="nav-links">
            <Link to="Store"><a href="/store">Store</a></Link>
            <Link to="/"><a href="/">Home</a></Link>
            <Link to="Whypintola"><a href="/why pintola?">Why Pintola?</a></Link>
            <Link to="Recipes"><a href="/recipes">Recipes</a></Link>
            <Link to="Aboutus"><a href="/aboutus">About Us</a></Link>
            <Link to="Contactus"><a href="/contactus">Contact Us</a></Link>
          </div>
          <div className="tyo">
            <Link to="Torder"><a href="/Torder">Track Your Order</a></Link>
          </div>
          <div className="icons">
            <Link to="Userlogin"> <FontAwesomeIcon icon={faUser} className='i' /></Link>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='i' />
            <Link to="Cart"><FontAwesomeIcon icon={faCartShopping} className='i' /></Link>
            <Link to="Contactus"><FontAwesomeIcon icon={faEnvelope} className='i' /></Link>
          </div>
        </div>
      </div>
      <hr className="hline"></hr>
    </div>
  );
}

export default Navbar;

