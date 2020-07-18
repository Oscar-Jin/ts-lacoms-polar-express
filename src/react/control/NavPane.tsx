import React, { useState, useEffect } from "react";
import { Container, Header, Content, Sidebar } from "rsuite";
import RSNavbar from "../component/navigation/RSNavbar";
import RSSidenav from "../component/navigation/RSSidenav";
import { Switch, Route, Redirect } from "react-router-dom";
import { Path } from "../component/navigation/NavTools";

import SchedulePage from "../page/SchedulePage";
import SettingsPage from "../page/SettingsPage";
import ProfilePage from "../page/ProfilePage";

const NavPane: React.FC = props => {
  const { expand, wideScreen, setExpand } = useProperties();

  return (
    <Container style={navPaneStyles}>
      <Header>
        <RSNavbar wideScreen={wideScreen} />
      </Header>
      <Content style={containerStyles}>
        <Sidebar style={sideBarStylesBy(expand, wideScreen)} collapsible>
          <RSSidenav expand={expand} setExpand={setExpand} />
        </Sidebar>
        <Content style={contentStylesBy(expand, wideScreen)}>
          <Switch>
            <Route exact path={Path.home} component={RedirectToSchedule} />
            <Route path={Path.schedule} component={SchedulePage} />
            <Route path={Path.profile} component={ProfilePage} />
            <Route path={Path.settings} component={SettingsPage} />
          </Switch>
        </Content>
      </Content>
    </Container>
  );
};

const navPaneStyles: React.CSSProperties = {
  width: "100%",
  height: "100vh",
};

const containerStyles: React.CSSProperties = {
  marginTop: "57px",
};

const mql = window.matchMedia("(min-width: 600px)");
const mqlSW = window.matchMedia("(min-width: 1150px)");

const sideBarStylesBy = (expand: boolean, wideScreen: boolean) => {
  return {
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 57px)",
    position: "fixed",
    overflow: "hidden",
    width: wideScreen ? (expand ? 230 : 56) : 0,
    transition: "width 0.2s ease-in",
  } as React.CSSProperties;
};

const contentStylesBy = (expand: boolean, wideScreen: boolean) => {
  return {
    marginLeft: wideScreen ? (expand ? 230 : 56) : 0,
    transition: "margin-left 0.2s ease-in ",
    height: "100%",
    overflow: "auto",
  } as React.CSSProperties;
};

const useProperties = () => {
  const [expand, setExpand] = useState(mqlSW.matches);
  const [wideScreen, setWideScreen] = useState(mql.matches);

  useEffect(() => {
    mql.addListener(() => setWideScreen(mql.matches));
    mqlSW.addListener(() => setExpand(mqlSW.matches));
    return () => {
      mql.removeListener(() => setWideScreen(mql.matches));
      mqlSW.removeListener(() => setExpand(mqlSW.matches));
    };
  });

  return {
    expand,
    setExpand,
    wideScreen,
    setWideScreen,
  };
};

const RedirectToSchedule = () => {
  return <Redirect to={Path.schedule} />;
};

export default NavPane;
