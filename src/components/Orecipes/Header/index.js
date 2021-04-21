import React from 'react';

import LoginForm from 'src/container/Orecipes/LoginForm';

import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="page-title">O'recipes</h1>
    <LoginForm />
  </div>
);

export default Header;
