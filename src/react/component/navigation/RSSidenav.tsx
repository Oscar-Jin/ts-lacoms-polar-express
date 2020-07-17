import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Sidenav, Nav, Icon, Toggle, Divider } from "rsuite";
import styled from "styled-components";
import { Path } from "../../App";

const RSSidenav: React.FC<RSSidenavProps> = props => {
  const sidenav = useProperties(props);

  return sidenav.display ? (
    <Sidenav
      expanded={sidenav.expand}
      activeKey={sidenav.activeKey}
      onSelect={sidenav.handleSelect}
      style={sidenavStyles}
    >
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey={Path.schedule} icon={<Icon icon="calendar" />}>
            Schedules
          </Nav.Item>
          <Nav.Item eventKey={Path.settings} icon={<Icon icon="gear-circle" />}>
            Settings
          </Nav.Item>
          <Divider style={dividerStyles} />
          <ToggleSection>
            <Toggle
              onChange={sidenav.handleToggle}
              checked={sidenav.expand}
              style={toggleStyles}
            />
          </ToggleSection>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  ) : (
    <div></div>
  );
};

const sidenavStyles: React.CSSProperties = {
  height: "100%",
  borderRight: "1px solid #dee2e6",
};

const dividerStyles: React.CSSProperties = {
  margin: "1rem 0",
};

const toggleStyles: React.CSSProperties = {
  width: "70%",
};

const ToggleSection = styled.div`
  display: flex;
  justify-content: center;
`;

const useProperties = (props: RSSidenavProps) => {
  const [activeKey, setActiveKey] = useState("");
  const history = useHistory();
  const { expand, setExpand, display, setDisplay } = props;

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
    display,
    setDisplay,
    handleToggle,
    handleSelect,
  };
};

type RSSidenavProps = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

export default RSSidenav;
