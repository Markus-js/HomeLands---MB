import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { HouseDetails } from "../../components/HouseDetails/HouseDetails";
import { HousesList } from "../../components/HousesList/HousesList";
import { Helmet } from "react-helmet";

export const HousingSearch = () => {
  let { url } = useRouteMatch();

  return (
    <>
      <section>
        <Helmet>
          <title>Bolig søgning</title>
          <meta name="Bolig udvalg" content="HomeLands - boliger" />
        </Helmet>
        <Switch>
          <Route exact path={url}>
            <Redirect to={`${url}/houses`} />
          </Route>

          <Route exact path={`${url}/:name`}>
            <HousesList />
          </Route>

          <Route exact path={`${url}/:name/:houseId`}>
            <HouseDetails />
          </Route>
        </Switch>
      </section>
    </>
  );
};
