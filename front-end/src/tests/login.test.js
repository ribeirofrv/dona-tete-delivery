import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import axios from 'axios';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';
import { customer } from './mocks/login.mock';
import api from '../API/requests';

describe('Testa Fluxo Login', () => {
  const validEmail = customer[0].email;
  const validPassword = customer[0].password;
  const emailTestId = 'common_login__input-email';
  const passwordTestId = 'common_login__input-password';
  const loginButton = 'common_login__button-login';
  const registerButton = 'common_login__button-register';
  const invalidEmail = 'common_login__element-invalid-email';

  it('Verifica funcionalidade do login e redirecionamento', async () => {
    // jest.spyOn(api, 'post').mockResolvedValueOnce({
    //   data: {
    //     email: 'zebirita@email.com',
    //     password: '$#zebirita#$',
    //   },
    // });

    jest.spyOn(api, 'post').mockResolvedValue({
      data: {
        name: 'Cliente Teste',
        email: 'teste@teste.com',
        role: 'customer',
        token: '123456789',
      },
    });

    const { history } = renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(emailTestId);
    const inputPassword = screen.getByTestId(passwordTestId);
    const button = screen.getByTestId(loginButton);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();

    userEvent.type(inputEmail, 'zebirita@email.com');
    userEvent.type(inputPassword, '$#zeb');

    expect(button).toBeDisabled();

    userEvent.clear(inputEmail);
    userEvent.clear(inputPassword);

    userEvent.type(inputEmail, validEmail);
    userEvent.type(inputPassword, validPassword);

    console.log('InputPassword', inputPassword.value);
    console.log('InputEmail', inputEmail.value);
    expect(button).not.toBeDisabled();

    userEvent.click(button);

    await waitFor(
      () => expect(history.location.pathname).toBe('/customer/products'),
    );
  });

  it('Testa registrar nova conta', () => {
    localStorage.clear();

    const { history } = renderWithRouter(<App />);

    const createNewAccount = screen.getByTestId(registerButton);

    expect(createNewAccount).toBeInTheDocument();

    expect(createNewAccount).not.toBeDisabled();

    userEvent.click(createNewAccount);

    expect(history.location.pathname).toBe('/register');
  });

  it('Testa mensagem de erro', async () => {
    localStorage.clear();

    jest.spyOn(api, 'post').mockRejectedValueOnce(new Error('Email e senha inválidos'));

    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(emailTestId);
    const inputPassword = screen.getByTestId(passwordTestId);
    const button = screen.getByTestId(loginButton);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();

    userEvent.type(inputEmail, 'invalid@email.com');
    userEvent.type(inputPassword, validPassword);

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    const errMessage = await screen.findAllByTestId(invalidEmail);
    const errMessageText = errMessage[0];
    // console.log('errMessage', errMessage);
    // console.log('invaaaaa', invalidEmail);

    await waitFor(
      () => expect(errMessageText).toBeInTheDocument(),
    );
  });
});
