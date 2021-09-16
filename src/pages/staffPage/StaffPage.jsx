import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import {StaffList} from "../../components/staff/StaffList"
import { StaffDetails } from "../../components/staffDetails/StaffDetails";

export const StaffPage = () => {
    let { url } = useRouteMatch();

    return (
        <section>
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
}
