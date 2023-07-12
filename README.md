# Aplicativo de Delivery para Distribuidora de Bebidas

Este é um aplicativo de delivery desenvolvido para uma distribuidora de bebidas. Ele foi construído utilizando as tecnologias React, Node.js, Express e Sequelize. O aplicativo possui as seguintes funcionalidades:

## Funcionalidades

- **Acesso via login**: O aplicativo permite o acesso por diferentes tipos de usuários, incluindo clientes, vendedores e a administradora do sistema. Cada tipo de usuário possui funcionalidades específicas no aplicativo.
  - A pessoa cliente pode fazer compras a partir da lista de produtos disponíveis.
  - A pessoa vendedora aprova, prepara e envia os pedidos recebidos.
  - A pessoa administradora gerencia os usuários do aplicativo.

- **Comunicação entre clientes e vendedores**: A pessoa cliente pode fazer um pedido utilizando o "carrinho de compras" do aplicativo. O pedido é então aprovado, preparado e enviado pela pessoa vendedora. Quando o pedido é recebido pelo cliente, ele pode marcar o pedido como "recebido". Tanto o cliente quanto o vendedor têm acesso a detalhes sobre seus pedidos.

- **Atualização em tempo real**: Quando um cliente faz um pedido, o mesmo é exibido no dashboard do vendedor assim que a página é atualizada. Da mesma forma, o cliente recebe informações sobre o status do seu pedido ao atualizar a página. Isso inclui informações sobre o pedido sendo preparado ou se já saiu para entrega.

## Tecnologias Utilizadas

- Front-end:
  - React
  - ContextAPI

- Back-end:
  - Node.js
  - Express
  - Sequelize

## API e Banco de Dados

A API do aplicativo é implementada utilizando o Node.js e o framework Express. O banco de dados é gerenciado pelo Sequelize, que permite a interação com o banco de dados MySQL.
