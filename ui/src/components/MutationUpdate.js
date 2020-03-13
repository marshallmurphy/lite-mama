import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_USER } from '../mutations/mutations';

export default function MutationUpdate() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Mutation: Update</h1>

      <UpdateUser
        name={name}
        setName={setName}
        id={id}
        setId={setId}
      />
    </div>
  );
}

function UpdateUser({ name, setName, id, setId }) {
  const [updateUser, {loading, error, data}] = useMutation(UPDATE_USER);

  if (data) {
    console.log('Data: ', data);  
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateUser({ variables: { name: name, id: id } });
        setId('');
        setName('');
      }}>

      <input
        type="text"
        value={ id }
        placeholder="ID"
        onChange={e => setId(e.target.value)}
      />

      <input
        type="text"
        value={ name }
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />

      <button type="submit">Update User</button>
    </form>
  );
}
