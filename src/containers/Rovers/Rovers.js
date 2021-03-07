import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useAppContext } from "../../libs/contextLib";

import SingleRover from "./Components/SingleRover";

import curiosity_rover_sq from "../../assets/img/curiosity_rover_sq.jpg";
import spirit_rover from "../../assets/img/spirit_rover.jpg";
import opportunity_rover from "../../assets/img/opportunity_rover.jpg";
import perseverence_rover from "../../assets/img/perseverence_rover.jpg";

import "./Rovers.css";

const Rovers = () => {
  const { rovers } = useAppContext();

  return (
    <div className="Rovers">
      <Card bg="dark" className="RoversMainCard">
        <Card.Body>
          <Card.Title>Current Rovers on Mars</Card.Title>
          {rovers && rovers.length > 0 ? (
            <Card.Body>
              <Row>
                <Col>
                  <SingleRover
                    border="secondary"
                    bg="dark"
                    rover={rovers[0]}
                    imgsrc={curiosity_rover_sq}
                  />
                </Col>
                <Col>
                  <SingleRover
                    border="secondary"
                    bg="dark"
                    rover={rovers[1]}
                    imgsrc={spirit_rover}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SingleRover
                    border="secondary"
                    bg="dark"
                    rover={rovers[2]}
                    imgsrc={opportunity_rover}
                  />
                </Col>
                <Col>
                  <SingleRover
                    border="secondary"
                    bg="dark"
                    rover={rovers[3]}
                    imgsrc={perseverence_rover}
                  />
                </Col>
              </Row>
            </Card.Body>
          ) : (
            "Loading rovers..."
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Rovers;
