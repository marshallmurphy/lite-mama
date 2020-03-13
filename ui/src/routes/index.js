import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../components/Home';
import QueryAll from '../components/QueryAll';
import QuerySingle from '../components/QuerySingle';
import MutationCreate from '../components/MutationCreate';
import MutationDelete from '../components/MutationDelete';
import MutationUpdate from '../components/MutationUpdate';

class RootRoutes extends Component {
  render() {
    return (
      <Switch key={this.props.location.pathname} location={this.props.location}>
        <Route exact path="/" key="home" render={() => (
          <Home />
        )}/>
        <Route exact path="/query-all" key="query-all" render={() => (
          <QueryAll />
        )}/>
        <Route exact path="/query-single" key="query-single" render={() => (
          <QuerySingle />
        )}/>
        <Route exact path="/mutation-create" key="mutation-create" render={() => (
          <MutationCreate />
        )}/>
        <Route exact path="/mutation-delete" key="mutation-delete" render={() => (
          <MutationDelete />
        )}/>
        <Route exact path="/mutation-update" key="mutation-update" render={() => (
          <MutationUpdate />
        )}/>
      </Switch>
    );
  }
}

export default withRouter(RootRoutes);
