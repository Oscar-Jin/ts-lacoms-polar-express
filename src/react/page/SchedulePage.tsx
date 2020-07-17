import React from "react";
import { Panel, Placeholder, Nav } from "rsuite";

const SchedulePage = () => {
  const mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="d-blue" style={{ padding: "1rem", overflow: "auto" }}>
      <Nav appearance="subtle" activeKey="this">
        <Nav.Item eventKey="this">This Month</Nav.Item>
        <Nav.Item eventKey="next">Next Month</Nav.Item>
      </Nav>

      <br />

      {mapper.map(() => (
        <Panel shaded style={{ marginBottom: "2rem" }}>
          <Placeholder.Paragraph graph="circle" />
        </Panel>
      ))}
    </div>
  );
};

export default SchedulePage;
