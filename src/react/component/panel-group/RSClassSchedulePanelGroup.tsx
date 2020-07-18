import React from "react";
import moment from "moment";
import sorBy from "lodash/sortBy";
import ScheduleLists from "../lists/ScheduleLists";
import { PanelGroup, Panel } from "rsuite";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const RSClassSchedulePanelGroup: React.FC<Props> = ({ dateArray }) => {
  const lessons = useSelector((state: RootState) => state.lessons);
  const sorted = sorBy(lessons, ["iso8601", "timeString", "lessonName"]);

  return (
    <PanelGroup
      bordered
      accordion
      style={panelGroupStyles}
      defaultActiveKey={dateArray[0]}
    >
      {dateArray.map(date => {
        const todaysLessons = sorted.filter(lesson => lesson.iso8601 === date);
        return (
          <Panel
            header={moment(date).format("YYYY-MM-DD dddd")}
            eventKey={date}
            key={date}
          >
            <ScheduleLists date={date} todaysLessons={todaysLessons} />
          </Panel>
        );
      })}
    </PanelGroup>
  );
};

const panelGroupStyles: React.CSSProperties = {
  maxWidth: "600px",
};

type Props = {
  dateArray: string[];
};

export default RSClassSchedulePanelGroup;
