const administrator = [
  {
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    role: 'administrator',
    token: '',
    password: '--adm2@21!!--',
  },
];

const seller = [
  {
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
    token: '',
    password: 'fulana@123',
  },
];

const customer = [
  {
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    role: 'customer',
    token: '',
    password: '$#zebirita#$',
  },
];

const invalidCustomer = [
  { 
    name: 'Cliente Inválido',
    email: 'invalido@email.com',
    role: 'invalid',
    token: '',
    password: '$#invalidpass#$'
  }
]

module.exports = {
  administrator,
  seller,
  customer,
  invalidCustomer,
};