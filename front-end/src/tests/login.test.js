import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import axios from 'axios';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

jest.mock('axios');

describe('Testa Fluxo Login', () => {
  const validEmail = 'zebirita@email.com';
  const emailTestId = 'common_login__input-email';
  const passwordTestId = 'common_login__input-password';
  const loginButton = 'common_login__button-login';

  it('Verifica funcionalidade do login', async () => {
    const { history } = renderWithRouter(<App />);

    const inputEmail = screen.getByTestId(emailTestId);
    const inputPassword = screen.getByTestId(passwordTestId);
    const button = screen.getByTestId(loginButton);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();

    userEvent.type(inputEmail, 'teste.com');
    userEvent.type(inputPassword, '12345');

    expect(button).toBeDisabled();

    userEvent.type(inputEmail, validEmail);
    userEvent.type(inputPassword, '123456');

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    expect(history.location.pathname).toBe('/login');
  });
});
