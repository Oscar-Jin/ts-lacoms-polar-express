import React from "react";
import ScheduleCard from "../card/ScheduleCard";
import { Divider } from "rsuite";
import { Lesson } from "../../../draft/constructor/Lesson";

const ScheduleLists: React.FC<Props> = props => {
  const { todaysLessons } = props;
  const timeArray = createTimeArray(todaysLessons);

  return (
    <>
      {timeArray.map(time => {
        const lessons = todaysLessons.filter(L => L.timeString === time);
        return (
          <div key={time}>
            <Divider style={dividerStyles}>{time}</Divider>
            {lessons.map(lesson => (
              <ScheduleCard lesson={lesson} key={lesson.id} />
            ))}
          </div>
        );
      })}
    </>
  );
};

const dividerStyles: React.CSSProperties = {
  fontWeight: "bold",
  margin: "1rem",
  marginTop: "2rem",
};

const createTimeArray = (sortedLessons: Lesson[]) => {
  let time: string;
  const array: string[] = [];

  sortedLessons.forEach(lesson => {
    if (lesson.timeString !== time) {
      time = lesson.timeString;
      array.push(time);
    }
  });

  return array;
};

type Props = {
  date: string;
  todaysLessons: Lesson[];
};

export default ScheduleLists;
