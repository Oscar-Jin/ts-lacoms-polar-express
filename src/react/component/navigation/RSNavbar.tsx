import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Icon } from "rsuite";

const RSNavbar = () => {
  return (
    <Navbar style={navbarStyles}>
      <Navbar.Header>
        <NavBrand>
          <Icon icon="export" size="lg" style={iconStyles} />
          Polar Express
        </NavBrand>
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="sign-out" />}>Log Out</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

const navbarStyles = {
  borderBottom: "1px solid #dee2e6",
};

const iconStyles = {
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
