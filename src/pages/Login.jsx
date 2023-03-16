import React, { useRef } from 'react';
import styles from '../style/Login/Login.module.css';
import logo from '../assets/images/logo.png';

export default function Login() {
  const theLogo = useRef(null);
  const onFocus = () => {
    theLogo.current.style.display = 'none';
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
            onFocus={ onFocus }
            onBlur={ () => {
                theLogo.current.style.display = 'block';
              } }
          />
        </label>
        <button
          type="button"
          disabled
        >
          Log in
        </button>
      </form>
    </div>
  )
}
