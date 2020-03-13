import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { USERS_QUERY } from '../queries/queries';

export default function QueryAll() {

  return (
    <div>
      <h3>This is a view that renders a specific React-Redux route.</h3>
      <h3>Data is retrieved and submitted to the database using GraphQl.</h3>
      <Users />
    </div>
  );
}

function Users() {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log('Data: ', data);

  return data.users.map(( user ) => (
    <div key={user.id}>
      <p>{user.name} : {user.id}</p>
    </div>
  ));
}
