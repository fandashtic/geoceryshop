import React, { Suspense, } from "react";
import { Switch, Route, } from "react-router-dom";
import { routes } from 'routes/_nav'
import UserRoute from 'routes/userRoutes'

const Routes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        {routes.map(({ menu, path, component }, key) => menu === 'auth' ? <Route path={path} exact component={component} />  : <UserRoute path={path} exact component={component} />)}
        </Switch>
      </Suspense>

    </>
  );
};
export default Routes;
