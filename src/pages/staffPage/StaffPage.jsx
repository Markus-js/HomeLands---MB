import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { StaffList } from "../../components/staff/StaffList";
import { StaffDetails } from "../../components/staffDetails/StaffDetails";
import { Helmet } from "react-helmet";

export const StaffPage = () => {
  let { url } = useRouteMatch();

  return (
    <section>
      <Helmet>
        <title>Ansatte</title>
        <meta name="Ansatte" content="HomeLands - find ejendomsmæglere" />
      </Helmet>
      <Switch>
        <Route exact path={url}>
          <Redirect to={`${url}/staff`} />
        </Route>

        <Route exact path={`${url}/:name`}>
          <StaffList />
        </Route>

        <Route exact path={`${url}/:name/:staffId`}>
          <StaffDetails />
        </Route>
      </Switch>
    </section>
  );
};
