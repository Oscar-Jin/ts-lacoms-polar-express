import React from "react";
import {
  Navbar,
  Sidenav,
  Nav,
  Dropdown,
  Icon,
  Container,
  Header,
  Content,
  Sidebar,
} from "rsuite";
import { vh100, h100 } from "../style/style";

const NavToggle: React.FC<{ expand: boolean; onChange: () => void }> = ({
  expand,
  onChange,
}) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={children => {
              return <Icon style={iconStyles} icon="cog" />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            <Icon icon={expand ? "angle-left" : "angle-right"} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class RSTestPage extends React.Component<{}, { expand: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      expand: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand,
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <Container style={vh100}>
        <Sidebar
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav expanded={expand} defaultOpenKeys={["3", "4"]} style={h100}>
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                  User Group
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={this.handleToggle} />
        </Sidebar>

        <Container>
          <Header>
            <h2>Page Title</h2>
          </Header>
          <Content>Content</Content>
        </Container>
      </Container>
    );
  }
}

const iconStyles: React.CSSProperties = {
  width: 56,
  height: 56,
  lineHeight: "56px",
  textAlign: "center",
};

export default RSTestPage;
