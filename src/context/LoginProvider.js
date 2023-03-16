
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

export default function LoginProvider({ children }) {
  const [ login, setLogin ] = useState({
    email: '',
    password: '',
    name: '',
  });

  const values = useMemo(() => ({
    login,
    setLogin,
  }), [
    login,
    setLogin,
  ]);

  return (
    <LoginContext.Provider value={ values }>
      { children }
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;