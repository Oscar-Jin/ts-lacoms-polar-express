import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import { Nav, Toggle, FlexboxGrid } from "rsuite";
import RSClassSchedulePanelGroup from "../component/panel-group/RSClassSchedulePanelGroup";

const SchedulePage = () => {
  const [activeKey, setActiveKey] = useState<SelectedMonth>("thisMonth");
  const [partial, setPartial] = useState(true);
  const [dateArray, setDateArray] = useState(dateArrayFor(activeKey, partial));

  useEffect(() => {
    setDateArray(dateArrayFor(activeKey, partial));
  }, [partial, activeKey]);

  return (
    <div style={schedulePageStyles}>
      <Nav
        appearance="subtle"
        activeKey={activeKey}
        onSelect={evenKey => setActiveKey(evenKey)}
        style={navStyles}
      >
        <Nav.Item eventKey="thisMonth">This Month</Nav.Item>
        <Nav.Item eventKey="nextMonth">Next Month</Nav.Item>
      </Nav>
      <FlexboxGrid style={flexboxGridStyles} justify="end" align="middle">
        <ToggleLabel>Hidden Dates</ToggleLabel>
        <Toggle defaultChecked onChange={() => setPartial(!partial)} />
      </FlexboxGrid>

      <RSClassSchedulePanelGroup dateArray={dateArray} />
    </div>
  );
};

const schedulePageStyles: React.CSSProperties = {
  padding: "1rem",
  overflow: "auto",
};

const navStyles: React.CSSProperties = {
  marginBottom: "1rem",
};

const flexboxGridStyles: React.CSSProperties = {
  marginBottom: "1rem",
};

const ToggleLabel = styled.div`
  margin-right: 1rem;
`;

//  ───────────────────────────────────────────────────────── dateArray ───┐

type SelectedMonth = "thisMonth" | "nextMonth";

const dateArrayFor = (seledtedMonth: SelectedMonth, partial: boolean) => {
  const target = momentWith(seledtedMonth);
  const daysInMonth = target.daysInMonth();

  const array: string[] = [];

  if (seledtedMonth === "thisMonth" && partial) {
    for (let i = target.date(); i <= daysInMonth; i++) {
      array.push(target.date(i).format("YYYY-MM-DD"));
    }
  } else {
    for (let i = 1; i <= daysInMonth; i++) {
      array.push(target.date(i).format("YYYY-MM-DD"));
    }
  }

  return array;
};

const momentWith = (seledtedMonth: SelectedMonth) => {
  switch (seledtedMonth) {
    case "thisMonth":
      return moment();
    case "nextMonth":
      return moment().add(1, "month");
  }
};

// <───────────────────────────────────────────────────────────────────────┘

export default SchedulePage;
