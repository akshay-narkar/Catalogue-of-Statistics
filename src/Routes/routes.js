import { Route, Switch } from 'react-router-dom';
import React from 'react';
// import Main from './Main';
// import Nav from './Navbar';
import App from '../App';
import Error from '../Components/Error';

export default function Routes() {
  return (
    <>
      {/* <Nav /> */}
      <div className="maindiv">
        <Switch>
          <Route path="/" component={App} exact />
          <Route component={Error} />
        </Switch>
      </div>

    </>
  );
}
