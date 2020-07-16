import React, { useState } from "react";
import { Container, Header, Content, Sidebar } from "rsuite";
import RSNavbar from "../component/navigation/RSNavbar";
import RSSidenav from "../component/navigation/RSSidenav";
import { vh100 } from "../style/style";

const NavPane: React.FC = props => {
  const [expand, setExpand] = useState(false);

  return (
    <Container style={vh100}>
      <Header>
        <RSNavbar />
      </Header>
      <Container>
        <Sidebar style={sideBarStyles} width={expand ? 250 : 56} collapsible>
          <RSSidenav expand={expand} setExpand={setExpand} />
        </Sidebar>
        <Container>
          <Content style={contentStyles}>{props.children}</Content>
        </Container>
      </Container>
    </Container>
  );
};

const sideBarStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const contentStyles: React.CSSProperties = {
  padding: "2rem",
};

export default NavPane;
