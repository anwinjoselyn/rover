import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoaderButton from "../../../components/LoaderButton/LoaderButton";

import { useParams } from "react-router-dom";

import { onError } from "../../../libs/errorLib";
import { useAppContext } from "../../../libs/contextLib";

import curiosity_rover_sq from "../../../assets/img/curiosity_rover_sq.jpg";
import spirit_rover from "../../../assets/img/spirit_rover.jpg";
import opportunity_rover from "../../../assets/img/opportunity_rover.jpg";
import perseverence_rover from "../../../assets/img/perseverence_rover.jpg";

//import { RoverContext } from "../../../libs/contextLib";

import "../Rovers.css";

const OneRover = () => {
  const { id } = useParams<RouteParams>();
  const { rovers } = useAppContext();
  const [rover, setRover] = useState<TRover | null>(null);
  const [imgsrc, setImgsrc] = useState<string | null>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      try {
        console.log("id", id);
        console.log("rovers", rovers);
        let result = rovers.filter(r => r.name === id)[0]; //fetch rover data

        console.log("result", result);
        let imgsrc =
          id === "Curiosity"
            ? curiosity_rover_sq
            : id === "Spirit"
            ? spirit_rover
            : id === "Opportunity"
            ? opportunity_rover
            : id === "Perseverance"
            ? perseverence_rover
            : null;
        console.log("imgsrc", imgsrc);
        //result = { ...result, imgsrc };
        /*let data = {
          ...result,
          imgsrc: imgsrc
        };*/
        setImgsrc(imgsrc);
        setRover(result);
        setLoading(false);
      } catch (e) {
        onError(e);
      }
    }

    if (rovers && rovers.length > 0) onLoad();
  }, [id, rovers]);

  return (
    <Card bg={"dark"} className="OneRoverCard" border={"light"}>
      {!loading && (
        <Card.Body>
          <Row>
            {imgsrc ? (
              <Col>
                <Card.Img variant="top" src={imgsrc} height={300} />
              </Col>
            ) : null}
            <Col>
              <Card.Title>{rover && rover.name ? rover.name : ""}</Card.Title>
              <Row>
                <Col className="leftCol">Landing Date</Col>
                <Col>
                  {rover && rover.landing_date ? rover.landing_date : ""}
                </Col>
              </Row>
              <Row>
                <Col className="leftCol">Launch Date</Col>
                <Col>{rover && rover.launch_date ? rover.launch_date : ""}</Col>
              </Row>
              <Row>
                <Col className="leftCol">Max Date</Col>
                <Col>
                  {rover && rover.max_date
                    ? rover.max_date.toLocaleString()
                    : ""}
                </Col>
              </Row>
              <Row>
                <Col className="leftCol">Max Sol</Col>
                <Col>{rover && rover.max_sol ? rover.max_sol : ""}</Col>
              </Row>
              <Row>
                <Col className="leftCol">Status</Col>
                <Col className="text-uppercase">
                  {rover && rover.status ? rover.status : ""}
                </Col>
              </Row>
              <Row>
                <Col className="leftCol">Total Photos</Col>
                <Col>
                  {rover && rover.total_photos
                    ? rover.total_photos.toLocaleString()
                    : ""}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <LoaderButton
                variant="light"
                size="lg"
                href="/rovers"
                isLoading={loading}
              >
                Back to Rovers
              </LoaderButton>
            </Col>
          </Row>
        </Card.Body>
      )}
    </Card>
  );
};

export default OneRover;

interface RouteParams {
  id: string;
}

type TRover = {
  cameras?: string[];
  id?: number;
  landing_date?: string;
  launch_date?: string;
  max_date?: string;
  max_sol?: number;
  name?: string;
  status?: string;
  total_photos?: number;
  imgsrc?: string;
};
