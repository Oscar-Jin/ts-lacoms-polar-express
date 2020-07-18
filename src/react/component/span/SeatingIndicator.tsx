import React from "react";
import styled from "styled-components";
import { Divider } from "rsuite";
import { Lesson } from "../../../draft/constructor/Lesson";
import { Reservation } from "../../../draft/constructor/Reservation";

const Indicator = styled.span`
  color: #e86680;
`;

const SeatingIndicator: React.FC<Props> = props => {
  const { lesson, reservationsToday } = props;
  const isFull = reservationsToday.length >= lesson.capacity;

  if (isFull) {
    return (
      <span>
        <Divider vertical style={{ margin: "0rem 0.2rem" }} />
        <Indicator>満席</Indicator>
        <Divider vertical style={{ margin: "0rem 0.2rem" }} />
      </span>
    );
  } else {
    return <span></span>;
  }
};

type Props = {
  lesson: Lesson;
  reservationsToday: Reservation[];
};

export default SeatingIndicator;
