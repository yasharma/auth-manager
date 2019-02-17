import React from 'react';
import {ActionList} from './ActionList';
export const TableList = ({ user, index }) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>{user.username}</td>
    <td>{user.email || '-'}</td>
    <td><ActionList/></td>
  </tr>
);