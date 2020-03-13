import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>This app is a boilerplate with a Rails API backend, GraphQL database, and React frontend.</p>
        <p><b>Routing</b> is done on the frontend with React-Router.</p>
        <p><b>Styles</b> can be scoped locally by adding ".module." to the file extension (ie. *.module.css), and scss files are compiled automatically into css at run time.</p>
        <p><b>Requests</b> to the backend are handled using GraphQL queries and mutations.</p>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Link to="/query-all">Query: All</Link>
          <Link to="/query-single">Query: Single</Link>
          <Link to="/mutation-create">Mutation: Create</Link>
          <Link to="/mutation-delete">Mutation: Delete</Link>
          <Link to="/mutation-update">Mutation: Update</Link>
        </div>
      </div>
    );
  }
}
