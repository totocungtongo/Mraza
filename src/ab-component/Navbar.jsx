import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./component.css";

function Navs() {
  const [isBelow730, setIsBelow730] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const viewport = window.innerWidth;
      if (viewport > 990) {
        setIsBelow730(false);
      } else {
        setIsBelow730(true);
      }
    };

    handleResize(); // initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#cceadd" }}
        className="bimbel-blue"
        sticky="top"
      >
        <Container className="justify-content-center">
          <Navbar.Brand href="#home" className="fredokaB">
            <img
              src="https://i.ibb.co/rw8cxgf/Logo-bimble.webp"
              alt="logo bimbel"
              style={{ width: "60px" }}
            />
          </Navbar.Brand>
          {isBelow730 ? (
            <Button
              variant="none"
              className="button-cost fredokaB"
              style={{ fontSize: "20px" }}
              onClick={handleShow}
            >
              Menu
            </Button>
          ) : (
            <Nav
              className="fredokaB"
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#features">Kumpulan soal</Nav.Link>
              <Nav.Link href="/Daftar">Daftar sekarang!</Nav.Link>
              <Nav.Link href="#pricing">Parenting konsul</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} className="navbar-modal">
        <Modal.Header>
          <Modal.Title className="fredokaB" style={{ textAlign: "center" }}>
            Menu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#cceadd",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Nav
            className="fredokaB"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              color: "black !important",
            }}
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Kumpulan soal</Nav.Link>
            <Nav.Link href="/Daftar">Daftar sekarang!</Nav.Link>
            <Nav.Link href="#pricing">Parenting konsul</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navs;
