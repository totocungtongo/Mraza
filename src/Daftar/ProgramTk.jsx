import React from "react";
import Navs from "../ab-component/Navbar";
import Footer from "../ab-component/Footer";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./daftar.css";

const PTK = () => {
  return (
    <div className="ptk-wrapper">
      <Navs />
      {/* sambutan-tk */}
      <Row
        style={{
          minHeight: "600px",
          backgroundColor: "#61c4B0",
          width: "100%",
          padding: "0px",
        }}
      >
        <Card className="sambutan-tk">
          <Card.Img
            src="https://i.ibb.co/CV4FGQL/pexels-pavel-danilyuk-8422248.jpg"
            alt="kids learning"
            className="img-samb-tk"
            style={{
              borderRadius: "0px",
              objectFit: "cover",
              objectPosition: "70% 20%",
            }}
          />
          <Card.ImgOverlay
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Title className="fredokaB tk-h1">
              Program TK Bimbel Mraza
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <p className="fredokaL tk-p">
          Bimbel Mraza memberikan bimbingan belajar intensif, penjelasan
          mendalam, dan persiapan ujian untuk membantu siswa memaksimalkan
          potensi mereka. Program bimbel ini bertujuan untuk meningkatkan
          prestasi akademik siswa dan membangun kepercayaan diri dalam proses
          pembelajaran.
        </p>
      </Row>
      <Row className="penjelasan-tk">
        <div className="wave5">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Col className="sambutan-col-2 back-lightblue"></Col>
        <Col className="sambutan-col-1">
          <h1 className="fredokaB h1-bimbel">
            Bimbel <span style={{ color: "#eb1d23" }}>M</span>raza
          </h1>
          <h2 className="fredokaL h3-bimbel">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero
            unde hic quos, vitae adipisci cumque ducimus odio alias, possimus
            explicabo perspiciatis? Excepturi rem tenetur cupiditate deserunt
            adipisci, eius explicabo.-Ms mina
          </h2>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default PTK;
