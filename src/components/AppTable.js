import React from "react";

const TableUsers = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Nota</th>
          <th>Direccion</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ?
        props.users.map(user => (
          <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.tel}</td>
          <td>{user.note}</td>
          <td>{user.direction}</td>
          <td>
            <button 
              className="button muted-button"
              onClick={()=>{props.editRow(user)}}
            >Editar</button>
            <button 
              className="button muted-button"
              onClick={()=>{props.deleteUser(user.id)}}
            >Eliminar</button>
          </td>
        </tr>
        )) : (
          <tr>
            <td colSpan={3}>NO USERS</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableUsers;
