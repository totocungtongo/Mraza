import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useRef } from "react";
import useIntersectionObserver from "./AnimationTrigger";

const ReviewSec = () => {
  const componentRef = useRef(null);
  const isVisible = useIntersectionObserver(componentRef);
  const [isBelow730, setIsBelow730] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const viewport = window.innerWidth;
      if (viewport > 720) {
        setIsBelow730(false);
      } else {
        setIsBelow730(true);
      }
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div ref={componentRef}>
      {isVisible ? (
        <Carousel
          controls={false}
          indicators={isBelow730 ? false : true}
          variant="dark"
          style={{ minHeight: "350px", width: "100%", marginBottom: "20px" }}
          className={
            isVisible ? "caraousel-rev animation-fade-left" : "before-animation"
          }
        >
          <Carousel.Item interval={3500}>
            <Card
              style={{ width: "100%", height: "300px" }}
              className="card-style"
            >
              <Card.Img
                variant="left"
                src="https://i.ibb.co/0Jv0WP5/ezgif-com-gif-maker.webp"
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
              <Card.Body>
                <Card.Title className="fredokaB">Mr.wong</Card.Title>
                <Card.Text className="fredokaB">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque officia recusandae sunt sapiente minus aliquam. A ipsam
                  placeat, nulla laboriosam sit repellendus ipsa natus fuga
                  blanditiis recusandae, doloremque atque deserunt?
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Card
              style={{ width: "100%", height: "300px" }}
              className="card-style"
            >
              <Card.Img
                variant="left"
                src="https://i.ibb.co/0Jv0WP5/ezgif-com-gif-maker.webp"
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
              <Card.Body>
                <Card.Title className="fredokaB">Card Title</Card.Title>
                <Card.Text className="fredokaB">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit eligendi provident consequuntur quaerat, facere
                  adipisci exercitationem recusandae laboriosam porro magnam sit
                  laudantium repudiandae voluptatibus ducimus totam dignissimos
                  ratione quidem! Et!
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>{" "}
          <Carousel.Item interval={2000}>
            <Card
              style={{ width: "100%", height: "300px" }}
              className="card-style"
            >
              <Card.Img
                variant="left"
                src="https://i.ibb.co/0Jv0WP5/ezgif-com-gif-maker.webp"
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
              <Card.Body>
                <Card.Title className="fredokaB">Card Title</Card.Title>
                <Card.Text className="fredokaB">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores atque quos nostrum necessitatibus ipsam rem inventore
                  reiciendis, distinctio eveniet esse quasi id aspernatur fugit
                  dignissimos laboriosam quibusdam vel voluptates? Blanditiis.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewSec;
