import React from "react";
import Navs from "./ab-component/Navbar";
import Footer from "./ab-component/Footer";
import ProgramStudi from "./Home/ProgramStudi";
import { Row } from "react-bootstrap";
const DaftarPage = () => {
  return (
    <div className="home-wrapper">
      <Navs />
      <Row
        style={{
          backgroundColor: "#ff9090",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          padding:"20px 20px",
          gap:"40px"
        }}
      >
        <h1 className="fredokaB judul-whois">Pilih Program studi yang di inginkan</h1>
        <ProgramStudi />
      </Row>
      <Footer />
    </div>
  );
};

export default DaftarPage;
