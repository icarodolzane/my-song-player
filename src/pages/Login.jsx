import React, { useRef, useContext } from 'react';
import styles from '../style/Login/Login.module.css';
import loginContext from '../context/LoginContext';
import logo from '../assets/images/logo.png';

export default function Login() {
  const { login, setLogin } = useContext(loginContext);
  const theLogo = useRef(null);

  const validateLogin = () => {
    const MIN_LENGTH_REQUIRED = 6;
    const regEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    const validPswd = (login.password.length > MIN_LENGTH_REQUIRED);
    const validName = (login.name.length > 2)
    return regEmail.test(login.email) && validPswd && validName; 
  };

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });    
  };

  const onFocus = () => {
    theLogo.current.style.display = 'none';
  };

  const buttonHandler = () => {
    console.log("Clicked!");
  };
  return (
    <div className={ styles.page_content }>
      <img src={ logo } alt="" ref={ theLogo }/>
      <h1>Let's get you in...</h1>
      <form className={ styles.login_content }>
        <label>
          <input
            type="email"
            autoComplete="off"
            placeholder="E-mail"
            name="email"
            value={ login.email }
            onChange={ handleChange }
            onFocus={ onFocus }
            onBlur={ () => {
                theLogo.current.style.display = 'block';
              } }
          />
        </label>
        <label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            name="password"
            value={ login.password }
            onChange={ handleChange }
            onFocus={ onFocus }
            onBlur={ () => {
                theLogo.current.style.display = 'block';
              } }
          />
        </label>
        <label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Your name"
            name="name"
            value={ login.name }
            onChange={ handleChange }
            onFocus={ onFocus }
            onBlur={ () => {
                theLogo.current.style.display = 'block';
              } }
          />
        </label>
        <button
          type="button"
          disabled={ !validateLogin() }
          onClick={ buttonHandler }
        >
          Log in
        </button>
      </form>
    </div>
  )
}
