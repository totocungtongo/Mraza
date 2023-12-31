import "./Home.css";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./ab-component/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import TeacherSec from "./Home/Teachersec";
import ProgramStudi from "./Home/ProgramStudi";
import Footer from "./ab-component/Footer";
import AnimationMasuk from "./ab-component/AnimationTrigger";

function Home() {
  const whyusRef = useRef(null);
  const programRef = useRef(null)
  const isVisible = AnimationMasuk(whyusRef);
  const isVisible2 = AnimationMasuk(programRef);

  return (
    <div className="home-wrapper">
      <Navs />
      <Container className="home-section">
        <Row className="sambutan-wraper">
          <Col className="sambutan-col-1 back-lightblue">
            <h1 className="fredokaB h1-bimbel">
              Bimbel <span style={{ color: "#eb1d23" }}>M</span>raza
            </h1>
            <h2 className="fredokaB h2-bimbel">TK-SD-SMP-SMA</h2>
            <h2 className="fredokaL h3-bimbel">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              libero unde hic quos, vitae adipisci cumque ducimus odio alias,
              possimus explicabo perspiciatis? Excepturi rem tenetur cupiditate
              deserunt adipisci, eius explicabo.-Ms mina
            </h2>
            <Button
              variant="none"
              style={{ marginRight: "20px " }}
              className="button-sam"
            >
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
          <h3 className="fredokaB judul-whois">
           Program Bimbel <span style={{ color: "#eb1d23" }}>M</span>raza
          </h3>
          <Col className="whois-col">
            <ProgramStudi />
            {/* <img
              src="https://img.freepik.com/free-photo/little-bookworm-wrapped-up-reading_1098-17283.jpg?w=360&t=st=1701845838~exp=1701846438~hmac=993f490a98b1ac10230ae34aa3b1a24a5d3ff1af2b35f31cc71bc525329c3234"
              alt="kidsplaying"
              className="whois-img"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "200px",
              }}
            /> */}
          </Col>
        </Row>
        <Row className="Teacher">
          <div className="wave3">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <Col className="Teacher-col-1  back-darkblue ">
            <TeacherSec />
          </Col>
        </Row>
        <Row className="whyus">
          <div className="wave4">
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
            className={
              isVisible
                ? "whyus-col-1  animation-fade-right"
                : "before-animation"
            }
          >
            <h3
              className="fredokaB h3-whyus"
              style={{ fontSize: "50px" }}
              ref={whyusRef}
            >
              Kenapa Kami?
            </h3>
            <p
              className="fredokaL p-whyus"
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolor velit magnam maxime aliquid? Itaque esse aliquam eius quasi
              consequatur dolorem error architecto accusamus, ipsum expedita
              vitae ipsa quidem non? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi, quasi repellendus dolore officiis
              corporis iusto, magnam saepe ab quaerat dolor provident odio quod
              quo quas est laborum adipisci consequuntur. Quas.
            </p>
            <Button variant="none" className="button-sam">
              Hubungi kami!
            </Button>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default Home;

// Apa yang home butuhkan
// 1. Welcome section. ✅ + hubungi
// 2. Fasilitas.
// 3. Teacher section.✅
// 4. why us section. ✅
// 5. Program studi ---> materi
// 6. Review sec
// 6. Footer.

// Noted  :
// slide 2 title slide 2 harus ada kenapa kaminya.
// contact person di footer.
// Fasilitas.
// seksi program pembelajaran ---> materi2.
// review section.
