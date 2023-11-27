import "./Home.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./ab-component/Navbar";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home-wrapper">
      <Navs />
      <Container className="welcome-section">
        <Row className="sambutan-wraper">
          <Col className="sambutan-col-1" style={{ backgroundColor: "white" }}>
            <h1 className="fredokaB">Dengan Membangun Jiwa kebanggaan dll</h1>

          </Col>
          <Col className="sambutan-col-2" style={{ backgroundColor: "Blue" }}>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

// Apa yang home butuhkan
// 1. Welcome section.
// 2. Who is Bimbel mraza section.
// 3. Review section.
// 4. interested? section.
