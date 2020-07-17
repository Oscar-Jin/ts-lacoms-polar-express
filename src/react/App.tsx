import React from "react";
import NavPane from "./control/NavPane";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SchedulePage from "./page/SchedulePage";
import SettingsPage from "./page/SettingsPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavPane>
          <Switch>
            <Route exact path={Path.home} component={RedirectToSchedule} />
            <Route path={Path.schedule} component={SchedulePage} />
            <Route path={Path.settings} component={SettingsPage} />
          </Switch>
        </NavPane>
      </BrowserRouter>
    </div>
  );
};

const RedirectToSchedule = () => {
  return <Redirect to={Path.schedule} />;
};

export const Path = {
  home: "/",
  schedule: "/schedule",
  settings: "/settings",
};

export default App;
