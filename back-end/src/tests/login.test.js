const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { login } = require("../../src/api/controllers/login.controller");
const { customer, invalidCustomer } = require('./mocks/login.mock');


const { expect } = chai;

chai.use(chaiHttp);

  const validEmail = customer[0].email;
  const validPassword = customer[0].password;
  const successfulLogin = {
    email: validEmail,
    password: validPassword,
  };
  const invalidEmail = invalidCustomer[0].email;
  const invalidPassword = invalidCustomer[0].password;
  const failedLogin = {
    email: invalidEmail,
    password: invalidPassword,
  };

describe("Testa rota login", () => {

  afterEach(() => sinon.restore());

  it("Testa se login é feito com sucesso", async () => {
    const req = {
      body: successfulLogin,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    await login(req, res);
    expect(res.status.calledWith(200)).to.be.true;
  });

  it("Testa se email ou senha são invalidos", async () => {
    const req = {
      body: failedLogin,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    
    const nextFunction = (args) => args; 
    const spy = sinon.spy(nextFunction);
    
    console.log('SPY', spy);
    await login(req, res, nextFunction);
    // expect(res.status.calledWith(404)).to.be.true;
    // expect(res.json.calledWith({ message: "Incorrect email or password" })).to.be.true;
    // next(error);
    expect(spy.calledOnce);
  });

  

});