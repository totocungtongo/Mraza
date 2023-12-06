import "./Home.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./ab-component/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import TeacherSec from "./Home/Teachersec";
import Materi from "./Home/Matpel";

function Home() {
  return (
    <div className="home-wrapper">
      <Navs />
      <Container className="welcome-section">
        <Row className="sambutan-wraper">
          <Col className="sambutan-col-1 back-lightblue">
            <h1 className="fredokaB h1-bimbel">Bimbel Mraza</h1>
            <h2 className="fredokaB h1-bimbel">TK-SD-SMP-SMA</h2>
            <h2 className="fredokaL h2-bimbel">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              libero unde hic quos, vitae adipisci cumque ducimus odio alias,
              possimus explicabo perspiciatis? Excepturi rem tenetur cupiditate
              deserunt adipisci, eius explicabo.
            </h2>
            <Button variant="none" className="button-sam">
              Ketahui lebih lanjut!
            </Button>
          </Col>
          <Col className="sambutan-col-2 back-lightblue">
            <img
              src="https://i.ibb.co/NmxFNpX/sementara.webp"
              alt="bimbel"
              className="image-sam"
              style={{ width: "400px" }}
            />
          </Col>
          <div className="wave2">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </Row>
        <Row className="whois">
          <h3 className="fredokaB judul-whois">Materi-Materi Bimbel Mraza</h3>
          <div className="whois-wraper">
            <Materi />
            <img
              src="https://img.freepik.com/free-photo/little-bookworm-wrapped-up-reading_1098-17283.jpg?w=360&t=st=1701845838~exp=1701846438~hmac=993f490a98b1ac10230ae34aa3b1a24a5d3ff1af2b35f31cc71bc525329c3234"
              alt="kidsplaying"
              className="whois-img"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "200px",
              }}
            />
          </div>
          <div className="wave1">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </Row>
        <Row className="Teacher">
          <Col className="Teacher-col-1  back-darkblue ">
            <TeacherSec />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

// Apa yang home butuhkan
// 1. Welcome section. Check
// 2. Teacher section.
// 3. Materi yang di pelajari.
// 4. why us section.
