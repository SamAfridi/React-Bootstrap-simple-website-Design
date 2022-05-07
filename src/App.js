import "./App.css";
import Heading from "./Components/Heading";
import Nav from "./Components/Nav";
import Contant from "./Components/Contant";
import AccordionFun from "./Components/AccordionFun";
import ToggleText from "./Components/ToggleText";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function App() {
  return (
    <div className="App">
      <Heading />
      <Nav />
      <br />
      <br />
      <br />
      <Contant />

      <Container>
         <h1>Our expertise</h1>
         <br/>
         <br/>
        <Row>
          <AccordionFun
            para="We anticipate future disruptions and what they mean to product development"
            list1="Future landscaping"
            list2="Future use cases"
            list3="Design fuel"
            image="../imgs/Accimg3.jpg"
            key="0"
          >
            Opportunity discovery
          </AccordionFun>
        </Row>
      </Container>

      <Container>
        <Row>
          <AccordionFun
            para="We uncover insight from deep observation and wide data"
            list1="User needs and profiles"
            list2="Opportunity frameworks"
            list3="Market analysis and sizes"
            image="../imgs/Accimg2.jpg"
            key="1"
          >
            Proposition design
          </AccordionFun>
        </Row>
      </Container>
      <Container>
        <Row>
          <AccordionFun
            para="We build clear and compelling product offers"
            list1="Product visions"
            list2="Prototyped and validated propositions"
            list3="Innovation roadmaps"
            image="../imgs/Accimg3.jpg"
            key="2"
          >
            Experience strategy
          </AccordionFun>
        </Row>
      </Container>
      <Container>
        <Row>
          <AccordionFun
            para="We help position and harmonise your product portfolio"
            list1="Portfolio assessment"
            list2="Experience vision and principles"
            list3="Implementation plan"
            image="../imgs/image1.jpg"
            key="3"
          >
            Strategic foresight
          </AccordionFun>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <Container>
        <h1>Features</h1>
        <br />
        <br />
        <Row>
          <Col>
            <ToggleText
              image="../imgs/f1.png"
              title="Desiging And winning Product"
              titleDetail="How to position hormines and articulate your project Protfolio"
            />
          </Col>
          <Col>
            <ToggleText
              image="../imgs/f2.png"
              title="Desiging And winning Product"
              titleDetail="How to position hormines and articulate your project Protfolio"
            />
          </Col>

          <Col>
            <ToggleText
              image="../imgs/f3.png"
              title="Desiging And winning Product"
              titleDetail="How to position hormines and articulate your project Protfolio"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <ToggleText
              image="../imgs/f4.png"
              title="Desiging And winning Product"
              titleDetail="How to position hormines and articulate your project Protfolio"
            />
          </Col>
          <Col>
            <ToggleText
              image="../imgs/f5.jpg"
              title="Desiging And winning Product"
              titleDetail="How to position hormines and articulate your project Protfolio"
            />
          </Col>
          <Col>
            <ToggleText
              image="../imgs/f6.jpg"
              title="Desiging And winning Product"
              titleDetail="How to position hormines and articulate your project Protfolio"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
