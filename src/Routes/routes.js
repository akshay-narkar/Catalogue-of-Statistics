import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Team from '../Containers/teampage';
import App from '../Components/App';
import Error from '../Components/Error';

export default function Routes() {
  return (
    <>
      <div className="maindiv mt-2 mb-5 px-3">
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/team" component={Team} />
          <Route component={Error} />
        </Switch>
      </div>

    </>
  );
}
