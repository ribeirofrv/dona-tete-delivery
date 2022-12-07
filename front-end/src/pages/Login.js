import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { requestLogin } from '../API/requests';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const validationInputs = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const bool = !(password.length >= +'6' && emailRegex.test(email));
    return bool;
  };

  const redirectToRegister = () => {
    history.push('/register');
  };

  const setLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    const { role } = data;
    if (role === 'seller') history.push('/seller/orders');
    if (role === 'administrator') history.push('/admin/manage');
    history.push('/customer/products');
  };

  const handleLogin = async () => {
    requestLogin('/login', { email, password })
      .then((data) => setLocalStorage(data))
      .catch(() => setError(true));
  };

  return (
    <section>
      <label htmlFor="login">
        Login
        <input
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
          type="text"
          data-testid="common_login__input-email"
          placeholder="email@trybeer.com.br"
          id="login"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          onChange={ (e) => setPassword(e.target.value) }
          value={ password }
          type="password"
          data-testid="common_login__input-password"
          placeholder="*****"
          id="password"
        />
      </label>
      {error && (
        <p data-testid="common_login__element-invalid-email">
          Email e senha inválidos
        </p>
      )}
      <button
        onClick={ () => handleLogin() }
        disabled={ validationInputs() }
        type="button"
        data-testid="common_login__button-login"
      >
        Login
      </button>
      <button
        onClick={ () => redirectToRegister() }
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
    </section>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
