import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import EventImage from "../Assets/eventImage.png";

function EventPage(props) {
  const location = useLocation();
  console.log("props", location.state);

  return (
    <div className="landing-page-wrapper white-background">
      <Container>
        <Row>
          <Col sm={6} className="left-side">
            <div>
              <div style={{ fontSize: "25px" }}>
                {location.state.event_name}
              </div>
              <div>{location.state.host_name}</div>
              <div>
                {location.state.start_date} to {location.state.end_date}
              </div>
              <div>{location.state.location}</div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="image-wrapper">
              <img src={EventImage} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventPage;
