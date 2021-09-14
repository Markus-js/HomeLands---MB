import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import {Staff} from "../../components/staff/Staff"
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
            <Staff />
            </Route>
  
            <Route exact path={`${url}/:name/:staffId`}>
                <StaffDetails />
            </Route>
          </Switch>
        </section>
    );
}
