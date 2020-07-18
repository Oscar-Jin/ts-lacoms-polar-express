import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Sidenav, Nav, Icon, Toggle, Divider } from "rsuite";
import styled from "styled-components";
import { Path, NavItems } from "./NavTools";
import { h100 } from "../../style/style";

const RSSidenav: React.FC<RSSidenavProps> = props => {
  const sidenav = useProperties(props);

  return (
    <Sidenav
      expanded={sidenav.expand}
      activeKey={sidenav.activeKey}
      onSelect={sidenav.handleSelect}
      style={sidenavStyles}
    >
      <Sidenav.Body style={h100}>
        <div
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Nav>
            {NavItems.map(nav => (
              <Nav.Item eventKey={nav.eventKey} icon={nav.icon} key={nav.title}>
                {nav.title}
              </Nav.Item>
            ))}
          </Nav>

          <Nav>
            <Nav.Item eventKey={Path.logout} icon={<Icon icon="sign-out" />}>
              Logout
            </Nav.Item>
            <Divider style={dividerStyles} />
            <ToggleSection>
              <Toggle
                onChange={sidenav.handleToggle}
                checked={sidenav.expand}
                style={toggleStyles}
                size="sm"
              />
            </ToggleSection>
          </Nav>
        </div>
      </Sidenav.Body>
    </Sidenav>
  );
};

const sidenavStyles: React.CSSProperties = {
  height: "100%",
  borderRight: "1px solid #dee2e6",
};

const dividerStyles: React.CSSProperties = {
  margin: "0",
  marginBottom: "1rem",
};

const toggleStyles: React.CSSProperties = {
  width: "70%",
};

const ToggleSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const useProperties = (props: RSSidenavProps) => {
  const [activeKey, setActiveKey] = useState("");
  const history = useHistory();
  const { expand, setExpand } = props;

  const handleToggle = () => {
    setExpand(!expand);
  };

  const handleSelect = (eventKey: string) => {
    if (eventKey === "toggle") {
      handleToggle();
    } else {
      setActiveKey(eventKey);
      history.push(eventKey);
    }
  };

  return {
    activeKey,
    expand,
    handleToggle,
    handleSelect,
  };
};

type RSSidenavProps = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export default RSSidenav;
