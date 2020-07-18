import React from "react";
import styled from "styled-components";
import { FlexboxGrid } from "rsuite";
import { Lesson } from "../../../draft/constructor/Lesson";
import { FlexboxGridItemProps } from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import SeatingIndicator from "../span/SeatingIndicator";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ScheduleCard: React.FC<{ lesson: Lesson }> = props => {
  const { lessonName, instructorName, id } = props.lesson;

  const reservations = useSelector((state: RootState) => state.reservations);
  const reservationsToday = reservations.filter(R => R.lessonID === id);

  return (
    <FlexboxGrid {...flexboxGridProps}>
      <ClassInfo style={classInfoStyles(lessonName)}>
        <Span>{lessonName}</Span>
        <Span>{instructorName}</Span>
      </ClassInfo>

      <StudentLists>
        <SeatingIndicator
          lesson={props.lesson}
          reservationsToday={reservationsToday}
        />
        {reservationsToday.map(reservation => (
          <Student key={reservation.id}>
            {reservation.lastName_kanji}
            {reservation.firstName_kanji}
          </Student>
        ))}
      </StudentLists>
    </FlexboxGrid>
  );
};

const scheduleCardStyles: React.CSSProperties = {
  padding: "1rem",
  marginBottom: "0.5rem",
  borderRadius: "0.4px",
  boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) ",
  flexWrap: "nowrap",
};

const flexboxGridProps: FlexboxGridItemProps = {
  align: "middle",
  style: scheduleCardStyles,
};

const ClassInfo = styled.div`
  padding: 0.2rem;
  padding-left: 0.4rem;
  min-width: 6rem;
  /* display: flex;
  flex-flow: row wrap;
  justify-content: flex-start; */
`;

const Span = styled.span`
  margin: 0rem 0.2rem;
`;

const StudentLists = styled.div`
  margin: 0.2rem 0.1rem;
  overflow: auto;
  /* display: flex;
  flex-flow: row wrap;
  justify-content: flex-end; */
`;

const Student = styled.div`
  margin: 0rem 0.2rem;
  color: darkgray;
  display: inline-block;
`;

const classInfoStyles = (lessonName: string) => {
  switch (lessonName) {
    case "L1":
    case "L2":
    case "L3":
    case "L4":
    case "L5":
      return { borderLeft: "2px solid dodgerblue" };
    default:
      return { borderLeft: "2px solid tomato" };
  }
};

export default ScheduleCard;
