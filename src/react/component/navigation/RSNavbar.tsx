import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Icon } from "rsuite";

const RSNavbar = () => {
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
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="sign-out" />}>Log Out</Nav.Item>
          </Nav>
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
