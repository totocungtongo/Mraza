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
        <Col
          className="penjelasan-tk-col"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://img.freepik.com/free-photo/medium-shot-girl-coloring-table_23-2149355178.jpg?w=360&t=st=1706091006~exp=1706091606~hmac=14310eb42a532ca9eb0b0eda655769cedf5443a45b406f5cb19ed3faa7faf642"
            alt="kids learning"
            style={{ maxWidth: "350px" ,borderRadius:"5px"}}
          />
        </Col>
        <Col className="penjelasan-tk-col">
          <h2 className="fredokaB h2-bimbel">
            Yang kami tawarkan di <br /> program TK
          </h2>
          <ul className="fredokaL h3-bimbel">
            <li>
              ADAPTO: Satu-satunya video belajar interaktif di Indonesia. Bisa
              sesuaikan pemahaman siswa!
            </li>
            <li>
              25 Koin Roboguru Plus untuk bertanya secara instan dengan Tutor
              Roboguru (Roboguru Expert)
            </li>
            <li>
              GARANSI! Jawaban terverifikasi oleh Tutor Roboguru (Roboguru
              Expert) dalam 24 jam, hingga 20 pertanyaan (dengan 2,000 Golds
              Ruangguru)
            </li>
            <li>65rb video belajar premium dengan ADAPTO</li>
            <li>400rb latihan soal serta pembahasan</li>
          </ul>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default PTK;
