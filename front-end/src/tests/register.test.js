// import axios from 'axios';
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';
import api from '../API/requests';
// import { mockedProducts } from './mocks/products.mock';

describe('Testa a página de Registro', () => {
  const emailRegisterTestId = 'common_register__input-email';
  const nameRegisterTestId = 'common_register__input-name';
  const passwordRegisterTestId = 'common_register__input-password';
  const registerButton = 'common_register__button-register';
  const invalidRegister = 'common_register__element-invalid_register';

  it('Verifica funcionalidade do Registro', async () => {
    localStorage.clear();
    jest.spyOn(api, 'post').mockResolvedValue({
      data: {
        name: 'Cliente Teste',
        email: 'teste@teste.com',
        role: 'customer',
        token: '123456789',
      },
    });

    const { history } = renderWithRouter(<App />);

    history.push('/register');

    const inputRegisterEmail = screen.getByTestId(emailRegisterTestId);
    const inputRegisterName = screen.getByTestId(nameRegisterTestId);
    const inputRegisterPass = screen.getByTestId(passwordRegisterTestId);
    const regButton = screen.getByTestId(registerButton);
    // const invalidReg = screen.getByTestId(invalidRegister);

    expect(inputRegisterName).toBeInTheDocument();
    expect(inputRegisterEmail).toBeInTheDocument();
    expect(inputRegisterPass).toBeInTheDocument();
    expect(regButton).toBeInTheDocument();

    expect(regButton).toBeDisabled();

    userEvent.type(inputRegisterName, 'Cliente jjjjjjj');

    expect(regButton).toBeDisabled();

    userEvent.type(inputRegisterEmail, 'teste@jjjjjj.com');

    expect(regButton).toBeDisabled();

    userEvent.type(inputRegisterPass, '74859641');

    // userEvent.clear(inputRegisterName);
    // userEvent.clear(inputRegisterEmail);
    // userEvent.clear(inputRegisterPass);

    expect(regButton).not.toBeDisabled();

    userEvent.click(regButton);

    await waitFor(
      () => expect(history.location.pathname).toBe('/customer/products'),
    );
  });

  it('Testa se mensagem de erro aparece', async () => {
    localStorage.clear();
    jest.spyOn(api, 'post').mockResolvedValue({
      data: {
        name: 'Cliente Teste',
        email: 'teste@teste.com',
        role: 'customer',
        token: '123456789',
      },
    });

    const { history } = renderWithRouter(<App />);
    history.push('/register');

    const inputRegisterEmail = screen.getByTestId(emailRegisterTestId);
    const inputRegisterName = screen.getByTestId(nameRegisterTestId);
    const inputRegisterPass = screen.getByTestId(passwordRegisterTestId);
    const regButton = screen.getByTestId(registerButton);
    // const invalidReg = screen.getByTestId(invalidRegister);

    expect(inputRegisterName).toBeInTheDocument();
    expect(inputRegisterEmail).toBeInTheDocument();
    expect(inputRegisterPass).toBeInTheDocument();
    expect(regButton).toBeInTheDocument();

    expect(regButton).toBeDisabled();

    userEvent.type(inputRegisterName, 'Cliente de teste');

    expect(regButton).toBeDisabled();

    userEvent.type(inputRegisterEmail, 'zebirita@email.com');

    expect(regButton).toBeDisabled();

    userEvent.type(inputRegisterPass, '1234567');

    expect(regButton).not.toBeDisabled();

    userEvent.click(regButton);

    const errorMessage = screen.queryByTestId(invalidRegister);
    waitFor(() => expect(errorMessage).toBeInTheDocument());
  });
});
