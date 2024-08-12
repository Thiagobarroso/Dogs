import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './Header.css';
import Dogs from '../../assets/dogs.svg';

export default function Header() {
  return (
    <header>
      <nav className="container nav">
        <Link className="logo" to={'/'}>
          <img src={Dogs} aria-label="Dogs - Home"></img>
        </Link>
        <Link className="login" to={'/login'}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}
