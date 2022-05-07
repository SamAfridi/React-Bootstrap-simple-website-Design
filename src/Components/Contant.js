import React from "react";
import image from "../images/contant_img.jpg";
import { Container, Row, Col } from "react-bootstrap";
// import { Container } from 'react-bootstrap';
import "./Nav.css";

const Contant = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="contant-img">
            <img src={image} alt='menu-im'></img>
          </Col>
          <Col className="contant-img">
            <div className="contant-paragraph">
              <h2 className="m-3 p-3">Our story</h2>
              <p>
                Plan is an independent product strategy consultancy based in
                London. We help leading mobility and consumer tech companies to
                navigate the early stages of innovation. Founded in 2004, we are
                a team of researchers, strategists and designers who have earned
                a reputation for cutting through complexity and offering clear,
                independent, frank and friendly advice.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contant;
