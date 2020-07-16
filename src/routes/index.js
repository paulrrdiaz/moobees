import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from "components/Spinner";

const Home = lazy(() => import("pages/Home"));
const MovieDetail = lazy(() => import("pages/MovieDetail"));
const Search = lazy(() => import("pages/Search"));
const NotFound = lazy(() => import("pages/NotFound"));

export default () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/movies/:id" component={MovieDetail} />
        <Route path="/search" component={Search} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);
