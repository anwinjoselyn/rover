import React from "react";
import Card from "react-bootstrap/Card";

import LoaderButton from "../../../components/LoaderButton/LoaderButton";
import "../Rovers.css";

const SingleRover = props => {
  return (
    <Card bg={props.bg} className="RoverCardSingle" border={props.border}>
      <Card.Img variant="top" src={props.imgsrc} height={300} />
      <Card.Body>
        <Card.Title>{props.rover.name}</Card.Title>
        <LoaderButton
          variant="outline-info"
          size="lg"
          href={`/rovers/${props.rover.name}`}
        >
          Check out {props.rover.name}
        </LoaderButton>
      </Card.Body>
    </Card>
  );
};

export default SingleRover;
