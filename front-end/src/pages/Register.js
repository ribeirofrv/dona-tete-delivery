import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const validationInputs = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const bool = !(password.length >= +'6' && emailRegex
      .test(email) && name.length >= +'12');
    return bool;
  };

  return (
    <section>
      <label htmlFor="name">
        Nome
        <input
          onChange={ (e) => setName(e.target.value) }
          value={ name }
          type="text"
          data-testid="common_register__input-name"
          placeholder=""
          id="name"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
          type="text"
          data-testid="common_register__input-email"
          placeholder="email@trybeer.com.br"
          id="email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          onChange={ (e) => setPassword(e.target.value) }
          value={ password }
          type="password"
          data-testid="common_register__input-password"
          placeholder="*****"
          id="password"
        />
      </label>
      <button
        // onClick={ () => handleClick() }
        disabled={ validationInputs() }
        type="button"
        data-testid="common_register__button-register"
      >
        Cadastrar
      </button>
    </section>
  );
}
