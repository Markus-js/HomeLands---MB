import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { HouseDetails } from "../../components/houseDetails/HouseDetails";
import { HousesList } from "../../components/housesList/HousesList";
import { HousesListSearch } from "../../components/housesList/HousesListSearch";
import Style from "./housingSearch.module.scss";

export const HousingSearch = () => {
  let { url } = useRouteMatch();

  return (
    <>
      <section >
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
          {/* <Route exact path={"/seachpage"}>
            <HousesListSearch />
          </Route> */}
        </Switch>
      </section>
    </>
  );
};
