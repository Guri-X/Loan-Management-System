import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div class="header">
        <a href="index.html" class="logo">Loan Management System</a>
        <div class="header-right">
            {isAuth === true ? (
                <Fragment>
                    {' '}
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/logout'>Logout</Link>
                </Fragment>
            ) : (
                <Fragment>
                    {' '}
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </Fragment>
            )}
        </div>
    </div>
  );
};

export default Header;
    