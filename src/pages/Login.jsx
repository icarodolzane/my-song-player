import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import styles from '../style/Login/Login.module.css';
import loginContext from '../context/LoginContext';
import logo from '../assets/images/logo.png';
import { saveInLocalStorage } from '../services/localStorageHelper';
import loginFake from '../services/handleLogin';

export default function Login() {
  const { login, setLogin } = useContext(loginContext);
  const theLogo = useRef(null);
  const navigate = useNavigate();

  const validateLogin = () => {
    const MIN_LENGTH_REQUIRED = 6;
    const regEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    const validPswd = (login.password.length > MIN_LENGTH_REQUIRED);
    const validName = (login.name.length > 2);
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

  const buttonHandler = async () => {
    const userInfo = {
      email: login.email,
      password: login.password,
      name: login.name,
    };
    try {
      await loginFake(userInfo.email, userInfo.name, userInfo.password);
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Validation succeeded.',
        showConfirmButton: false,
        timer: 1500,
      });
      saveInLocalStorage('user', userInfo);
      navigate('/search');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
    }
  };
  return (
    <div className={styles.page_content}>
      <img src={logo} alt="" ref={theLogo} />
      <h1>
        {
          'Let\'s get you in...'
        }
      </h1>
      <form className={styles.login_content}>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            autoComplete="off"
            placeholder="E-mail"
            name="email"
            value={login.email}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={() => {
              theLogo.current.style.display = 'block';
            }}
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            autoComplete="off"
            placeholder="Password"
            name="password"
            value={login.password}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={() => {
              theLogo.current.style.display = 'block';
            }}
          />
        </label>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            autoComplete="off"
            placeholder="Your name"
            name="name"
            value={login.name}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={() => {
              theLogo.current.style.display = 'block';
            }}
          />
        </label>
        <button
          type="button"
          disabled={!validateLogin()}
          onClick={buttonHandler}
        >
          Log in
        </button>
      </form>
    </div>
  );
}
