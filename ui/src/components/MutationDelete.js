import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { DELETE_USER } from '../mutations/mutations';

export default function MutationDelete() {

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Mutation: Delete</h1>

      <DeleteUser />
    </div>
  );
}

function DeleteUser() {
  let input;
  const [deleteUser, { data }] = useMutation(DELETE_USER);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          deleteUser({ variables: { id: input.value } });
          input.value = '';
        }}
      >
        <input
          placeholder="ID"
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Delete User</button>
      </form>
    </div>
  );
}
