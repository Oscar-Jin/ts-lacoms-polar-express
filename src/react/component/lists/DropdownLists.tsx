import React from "react";
import { NavItems, Path } from "../navigation/NavTools";
import { useHistory } from "react-router-dom";
import { Dropdown, Icon } from "rsuite";

type Props = {
  for: "Navbar";
};

const DropdownLists: React.FC<Props> = props => {
  switch (props.for) {
    case "Navbar":
      return <DropdownListsForNavbar />;
    default:
      throw new Error("undefined type");
  }
};

//  ──────────────────────────────────────────────────────── FOR NAVBAR ───┐
const DropdownListsForNavbar: React.FC = () => {
  const history = useHistory();
  return (
    <>
      {NavItems.map(NavItem => (
        <Dropdown.Item
          key={NavItem.eventKey}
          eventKey={NavItem.eventKey}
          icon={NavItem.icon}
          onSelect={eventKey => history.push(eventKey)}
          style={navItemStyles}
        >
          {NavItem.title}
        </Dropdown.Item>
      ))}
      <Dropdown.Item
        eventKey={Path.logout}
        icon={<Icon icon="sign-out" />}
        onSelect={eventKey => history.push(eventKey)}
        style={navItemStyles}
      >
        Logout
      </Dropdown.Item>
    </>
  );
};

const navItemStyles: React.CSSProperties = {
  margin: "0.5rem 1rem",
};
// <───────────────────────────────────────────────────────────────────────┘

export default DropdownLists;
