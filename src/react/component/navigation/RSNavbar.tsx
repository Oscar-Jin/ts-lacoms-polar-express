import React from "react";
import styled from "styled-components";
import { Navbar, Icon, Dropdown, Nav } from "rsuite";
import DropdownLists from "../lists/DropdownLists";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Path } from "./NavTools";
import { useHistory } from "react-router-dom";

const RSNavbar: React.FC<{ wideScreen: boolean }> = props => {
  const user = useSelector((state: RootState) => state.user);
  const history = useHistory();

  const handleSelect = (eventKey: string) => {
    history.push(eventKey);
  };

  return (
    <div>
      <Navbar style={navbarStyles}>
        <Navbar.Header>
          <NavBrand>
            <Icon icon="export" size="lg" style={iconStyles} />
            Polar Express
          </NavBrand>
        </Navbar.Header>
        <Navbar.Body>
          <div hidden={props.wideScreen}>
            <Nav pullRight>
              <Dropdown placement="bottomEnd" icon={<Icon icon="bars" />}>
                <DropdownLists for="Navbar" />
              </Dropdown>
            </Nav>
          </div>
          <div hidden={!props.wideScreen}>
            <Nav pullRight onSelect={handleSelect}>
              <Nav.Item eventKey={Path.profile}>{user?.email}</Nav.Item>
            </Nav>
          </div>
        </Navbar.Body>
      </Navbar>
    </div>
  );
};

const navbarStyles: React.CSSProperties = {
  borderBottom: "1px solid #dee2e6",
  position: "fixed",
  zIndex: 1,
  width: "100vw",
};

const iconStyles: React.CSSProperties = {
  marginRight: "0.3rem",
};

const NavBrand = styled.a`
  margin: 0.8rem;
  margin-left: 1.4rem;
  display: inline-block;
  font-size: 1.3rem;
  text-decoration: none !important;
`;

export default RSNavbar;
