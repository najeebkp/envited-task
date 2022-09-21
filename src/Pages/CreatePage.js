import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Form, Button } from "react-bootstrap";

function CreatePage() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    event_name: "",
    host_name: "",
    start_date: "",
    end_date: "",
    image: "",
    location: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    navigate("/event", { state: data });
  };
  return (
    <div className="create-page-wrapper">
      <Container className="container">
        <Col md={8}>
          <Form className="form">
            <div className="heading">Create Event</div>
            <Form.Group className="mb-3">
              <Form.Label>Event name</Form.Label>
              <Form.Control
                name="event_name"
                onChange={(e) => handleChange(e)}
              ></Form.Control>

              <Form.Label>Host name</Form.Label>
              <Form.Control
                name="host_name"
                onChange={(e) => handleChange(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3  date-time">
              <Form.Label>Start Time</Form.Label>
              <input
                className="date-time-field"
                type="datetime-local"
                id="strat-time"
                name="start_date"
                onChange={(e) => handleChange(e)}
              ></input>
            </Form.Group>
            <Form.Group className="mb-3 date-time">
              <Form.Label className="">End Time</Form.Label>
              <input
                className="date-time-field"
                type="datetime-local"
                id="end-time"
                name="end_date"
                onChange={(e) => handleChange(e)}
              ></input>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                name="location"
                onChange={(e) => handleChange(e)}
              ></Form.Control>
              <Form.Label>Add Event Photo</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <div className="button-wrapper">
              <Button className="button" onClick={() => handleNext()}>
                Next
              </Button>
            </div>
          </Form>
        </Col>
      </Container>
    </div>
  );
}

export default CreatePage;
