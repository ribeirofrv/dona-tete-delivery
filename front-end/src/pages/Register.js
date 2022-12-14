import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { requestPost } from '../API/requests';

export default function Register({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const validationInputs = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const bool = !(
      password.length >= +'6' &&
      emailRegex.test(email) &&
      name.length >= +'12'
    );
    return bool;
  };

  const setLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    const { role } = data;
    if (role === 'seller') history.push('/seller/orders');
    if (role === 'administrator') history.push('/admin/manage');
    history.push('/customer/products');
  };

  const handleRegister = async () => {
    requestPost('/register', { email, password, name })
      .then((data) => setLocalStorage(data))
      .catch(() => setError(true));
  };

  return (
    <section>
      <label htmlFor="name">
        Nome
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          data-testid="common_register__input-name"
          placeholder=""
          id="name"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          data-testid="common_register__input-email"
          placeholder="email@trybeer.com.br"
          id="email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          data-testid="common_register__input-password"
          placeholder="*****"
          id="password"
        />
      </label>
      <button
        onClick={() => handleRegister()}
        disabled={validationInputs()}
        type="button"
        data-testid="common_register__button-register"
      >
        Cadastrar
      </button>
      {error && (
        <p data-testid="common_register__element-invalid_register">
          O nome ou o email já existem
        </p>
      )}
    </section>
  );
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
