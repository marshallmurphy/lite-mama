import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import RootRoutes from './routes';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <RootRoutes />
    </BrowserRouter>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
serviceWorker.unregister(); 
