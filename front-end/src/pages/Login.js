import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isDisabled, setIsDisabled] = useState(true);

  const validationInputs = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const bool = !(password.length >= +'6' && emailRegex.test(email));
    return bool;
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
      <button
        // onClick={ () => handleClick() }
        disabled={ validationInputs() }
        type="button"
        data-testid="common_login__button-login"
      >
        Login
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
    </section>
  );
}
