import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Team from '../Components/teampage';
// import Nav from './Navbar';
import App from '../Components/App';
import Error from '../Components/Error';

export default function Routes() {
  return (
    <>
      {/* <Nav /> */}
      <div className="maindiv">
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/team" component={Team} />
          <Route component={Error} />
        </Switch>
      </div>

    </>
  );
}
