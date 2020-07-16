import React, { useState } from "react";
import { Sidenav, Nav, Icon, Toggle, Divider } from "rsuite";
import styled from "styled-components";

const RSSidenav: React.FC<RSSidenavProps> = ({ expand, setExpand }) => {
  const [activeKey, setActiveKey] = useState("");

  const handleToggle = () => {
    setExpand(!expand);
  };

  const handleSelect = (eventKey: string) => {
    if (eventKey === "toggle") {
      handleToggle();
    } else {
      setActiveKey(eventKey);
    }
  };

  return (
    <Sidenav
      expanded={expand}
      defaultOpenKeys={["3", "4"]}
      activeKey={activeKey}
      onSelect={handleSelect}
      style={sidenavStyles}
    >
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="schedules" icon={<Icon icon="calendar" />}>
            Schedules
          </Nav.Item>
          <Nav.Item eventKey="settings" icon={<Icon icon="gear-circle" />}>
            Settings
          </Nav.Item>
          <Divider style={dividerStyles} />
          <ToggleSection>
            <Toggle
              onChange={handleToggle}
              checked={expand}
              style={toggleStyles}
            />
          </ToggleSection>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
};

const sidenavStyles = {
  height: "100%",
  borderRight: "1px solid #dee2e6",
};

const dividerStyles = {
  margin: "1rem 0",
};

const toggleStyles = {
  width: "70%",
};

const ToggleSection = styled.div`
  display: flex;
  justify-content: center;
`;

type RSSidenavProps = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export default RSSidenav;
