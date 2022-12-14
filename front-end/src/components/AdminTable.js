import React from 'react';
import PropTypes from 'prop-types';

export default function AdminTable({ users, deleteUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, name, email, role }, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `admin_manage__element-user-table-item-number-${index}`
              }
            >
              {index + 1 }
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-name-${index}`
              }
            >
              { name }
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-email-${index}`
              }
            >
              { email }
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-role-${index}`
              }
            >
              { role }
            </td>
            <td>
              <button
                type="button"
                data-testid={
                  `admin_manage__element-user-table-remove-${index}`
                }
                onClick={ () => deleteUser(id, name) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}

AdminTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
