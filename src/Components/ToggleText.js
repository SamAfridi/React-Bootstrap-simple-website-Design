import React from "react";
import { CardImg } from "react-bootstrap";
// import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Card";
import Row from "react-bootstrap/Card";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import "./Nav.css";

const ToggleText = (props) => {
  return (
    <>
      <Row>
        <Col>
          <Card style={{ width: '20rem' }}>
            <CardImg
              variant="top"
              src={props.image}
              alt="my pic"
              className="featureImg"
            />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.titleDetail}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><button className="btn btn-primary"> More Detail</button></small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>


    </>
  );
};
export default ToggleText;
