import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { USER_QUERY } from '../queries/queries';

export default function QuerySingle() {

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Query: Single User</h1>

      <User id={1}/>
    </div>
  );
}

function User({ id }) {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log('Data: ', data);

  return (
    <p>{data.user.name}</p>
  );
}
