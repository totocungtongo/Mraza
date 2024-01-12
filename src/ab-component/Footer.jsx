import React from "react";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container text-light">
      <Container>
        <Row style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
          <Col md={3}>
            <div className="mb-3">
              <img
                src="https://i.ibb.co/rw8cxgf/Logo-bimble.webp"
                alt="Logo"
                width="150"
                style={{ marginBottom: "15px" }}
              />
              <h6 className="fredokaB">Yayasan Bimbel Mraza</h6>
              <iframe
                title="map-bimbel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.868130600475!2d106.84901787475108!3d-6.2810613937078115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f37973a26839%3A0x85afe03d3f78115a!2sBimbel%20Mraza!5e0!3m2!1sid!2sid!4v1704331920640!5m2!1sid!2sid"
                width="200"
                height="200"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Form>
              <h6 className="fredokaB">Subscribe Email</h6>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="fredokaL">
                  Get the latest content and news from us!
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button
                className="button-sam"
                variant="none"
                type="submit"
                style={{ marginTop: "15px" }}
              >
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col style={{ maxWidth: "200px" }}>
            <h5 className="fredokaB">Pages</h5>
            <ul
              className="list-unstyled"
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col style={{ maxWidth: "200px" }}>
            <h5 className="fredokaB">Social Media</h5>
            <ul
              className="list-unstyled"
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.youtube.com">YouTube</a>
              </li>
            </ul>
          </Col>
          <Col style={{ maxWidth: "200px" }}>
            <h5 className="fredokaB">Social Media</h5>
            <ul
              className="list-unstyled"
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.youtube.com">YouTube</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "20px" }} className="text-center">
              &copy; {new Date().getFullYear()} Yayasan Bimbel Mraza. All Rights
              Reserved.
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
