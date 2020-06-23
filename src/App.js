import "./styles.css";
import React from "react";
import Landing from "./components/landing";
import WeatherInfo from "./components/weather-info";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route, Redirect } from "react-router";

export default function App() {
  const handleQuery = query => {
    let baseUrl = `${window.location.protocol}//${
      window.location.host
    }/weather/?q=${query}`;
    window.location.assign(baseUrl);
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <Switch>
          <Redirect exact from="/" to="/landing" />
          <Route
            path="/landing"
            render={() => <Landing onChangeCb={handleQuery} />}
          />
          <Route path="/weather" render={() => <WeatherInfo />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
