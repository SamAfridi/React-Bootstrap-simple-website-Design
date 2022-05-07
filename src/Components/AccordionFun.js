import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Nav.css";

const AccordionFun = (props) => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={props.key}>
          <Accordion.Header>{props.children}</Accordion.Header>
          <Accordion.Body>
            
             <div className="col-sm-4">
              <p>{props.para}</p>
              <br />
              <ul>
                <li>{props.list1}</li>
                <li>{props.list2}</li>
                <li>{props.list3}</li>
              </ul>

              <br />
              <div className="accordionBtn">
                <Button variant="primary">Find out More</Button>{" "}
              </div>
            </div>
            
           
            
            <div className="col-sm-4">
              <img className="accorImg" style={{ width: '25rem'}} src={props.image} alt="menu-im" />
            </div>
            
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AccordionFun;
