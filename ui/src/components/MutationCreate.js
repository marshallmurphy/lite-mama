import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_USER } from '../mutations/mutations';

export default function MutationCreate() {
  const [name, setName] = useState('');

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Mutation: Create</h1>

      <CreateUser
        name={name}
        setName={setName}
      />
    </div>
  );
}

function CreateUser({ name, setName }) {
  const [createUser, {loading, error, data}] = useMutation(CREATE_USER);

  let variables = {
    name: name,
  }

  if (data) {
    console.log('Data: ', data);
  }

  return (
    <form onSubmit={e => {
        e.preventDefault();
        createUser({ variables: variables });
      }}>

      <input
        type="text"
        value={ name }
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />

      <button type="submit">Create User</button>
    </form>
  );
}
