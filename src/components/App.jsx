import React from 'react';
import { Table } from 'reactstrap';
import { config } from '../config';
import { useFetch } from '../hooks';
import { TableList } from './TableList';
import { Filter } from './Filter';

export const App = (props) => {
  const [list] = useFetch(config.authenticateUrl);

  return (
    <div>
      <Filter />
      <Table size="sm" bordered responsive>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x, i) => <TableList key={i} user={x} index={i} />)}
        </tbody>
      </Table>
    </div>
  );
}