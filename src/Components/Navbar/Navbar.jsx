import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export default function Navbar() {
  const [line, setLiner] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Boutique</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setLiner("shop")}>
          <Link className='link' style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {line === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setLiner("men")}>
          <Link className='link' to='/men'>Men</Link>
          {line === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setLiner("women")}>
          <Link className='link' to='/women'>Women</Link>
          {line === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setLiner("kids")}>
          <Link className='link' to='/kids'>Kids</Link>
          {line === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link className='link' to='/login'>Login</Link>
        </button>
        <Link className='link' to='/cart'>
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

