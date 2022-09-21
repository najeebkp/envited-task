import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import LandingImage from "../Assets/landingImage.svg";

function LandingPage() {
  return (
    <div className="landing-page-wrapper">
      <Container>
        <Row>
          <Col sm={6} className="left-side">
            <div className="image-wrapper">
              <img src={LandingImage} />
            </div>
          </Col>
          <Col sm={6}>
            <div className="right-side">
              <div className="header">
                Imagine if <br></br>
                <div className="gradient-text">Snapchat</div>
                had events.
              </div>
              <div className="desc">
                Easily host and share events with your friends<br></br>across
                any social media.
              </div>
              <br></br>
              <div className="button-wrapper web">
                <Link to="/create">
                  <Button className="button">🎉 Create my event</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className="button-wrapper mobile">
          <Link to="/create">
            <Button className="button">🎉 Create my event</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;
