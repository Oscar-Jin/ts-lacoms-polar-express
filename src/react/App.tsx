import React, { useEffect } from "react";
import NavPane from "./control/NavPane";
import { Switch, Route, useHistory } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import LogoutPage from "./page/LogoutPage";
import { Path } from "./component/navigation/NavTools";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const App = () => {
  const user = useSelector((state: RootState) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (user?.uid) {
      history.push(Path.schedule);
    } else {
      history.push(Path.login);
    }
  }, [user, history]);

  return (
    <div className="App">
      <Switch>
        <Route path={Path.login} component={LoginPage} />
        <Route path={Path.logout} component={LogoutPage} />
        <Route path={Path.home} component={NavPane} />
      </Switch>
    </div>
  );
};

export default App;
