import React, { useState } from "react";
import { Container, Header, Content, Sidebar } from "rsuite";
import RSNavbar from "../component/navigation/RSNavbar";
import RSSidenav from "../component/navigation/RSSidenav";

const NavPane: React.FC = props => {
  const [expand, setExpand] = useState(false);
  const [display, setDisplay] = useState(true);

  return (
    <Container style={navPaneStyles}>
      <Header>
        <RSNavbar />
      </Header>
      <Content style={containerStyles}>
        <Sidebar
          style={sideBarStyles}
          width={display ? (expand ? 230 : 56) : 0}
          collapsible
        >
          <RSSidenav
            expand={expand}
            setExpand={setExpand}
            display={display}
            setDisplay={setDisplay}
          />
        </Sidebar>
        <Content style={contentStylesBy(expand, display)}>
          {props.children}
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

const sideBarStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "fixed",
};

const contentStylesBy = (expand: boolean, display: boolean) => {
  return {
    marginLeft: display ? (expand ? 230 : 56) : 0,
    transition: "margin-left 0.2s ease-in ",
    height: "100%",
    overflow: "auto",
  } as React.CSSProperties;
};

export default NavPane;
