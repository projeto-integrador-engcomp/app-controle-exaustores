import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const PrivateRoutes = () => {
  const isSectionActive = () => {
    const isLoggedIn = localStorage.getItem('@exhaustControlToken');

    if (isLoggedIn === null || isLoggedIn == '') {
      return false;

    } else {
      const onlyToken = isLoggedIn;
      const tokenPayload = jwt_decode(onlyToken);
      const expSeconds = tokenPayload.exp;
      const timeNow = Date.now() / 1000;

      return timeNow > expSeconds ? false : true;
    }
  }

  return (
    isSectionActive() ? <Outlet /> : <Navigate to='/signin' />
  );
}

export default PrivateRoutes;