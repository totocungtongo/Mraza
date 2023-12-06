import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useRef } from "react";
import AnimationMasuk from "../ab-component/AnimationTrigger";

const TeacherSec = () => {
  const componentRef = useRef(null);
  const isVisible = AnimationMasuk(componentRef);
  const [isBelow730, setIsBelow730] = useState(false);
  const [teacher, setTeacher] = useState([]);
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
  useEffect(() => {
    const cardlist = [
      {
        name: "Mr.wong",
        background: "Bahasa inggris master",
        img: "",
        ig: "ascasc",
        desk: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque officia recusandae sunt sapiente minus aliquam. A ipsam
                  placeat, nulla laboriosam sit repellendus ipsa natus fuga
                  blanditiis recusandae, doloremque atque deserunt?`,
      },
      {
        name: "Mr.dong",
        background: "Bahasa inggris master",
        img: "",
        ig: "ascasc",
        desk: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque officia recusandae sunt sapiente minus aliquam. A ipsam
                  placeat, nulla laboriosam sit repellendus ipsa natus fuga
                  blanditiis recusandae, doloremque atque deserunt?`,
      },
      {
        name: "Mr.who",
        background: "Bahasa inggris master",
        img: "",
        ig: "ascasc",
        desk: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque officia recusandae sunt sapiente minus aliquam. A ipsam
                  placeat, nulla laboriosam sit repellendus ipsa natus fuga
                  blanditiis recusandae, doloremque atque deserunt?`,
      },
    ];
    setTeacher(cardlist);
  }, []);

  return (
    <div ref={componentRef} className="reviewsec-wrapper">
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
          {teacher.map((item, index) =>{
           return (
             <Carousel.Item interval={3000} key={index}>
               <Card
                 style={{ width: "100%", height: "300px" }}
                 className="card-style"
               >
                 <Card.Img
                   variant="left"
                   src="https://i.ibb.co/0Jv0WP5/ezgif-com-gif-maker.webp"
                   style={{ maxWidth: "300px", maxHeight: "300px" }}
                   className="card-imgs"
                 />
                 <Card.Body>
                   <Card.ImgOverlay>
                     <Card.Title className="fredokaB">{item.name}</Card.Title>
                   </Card.ImgOverlay>
                   <Card.Text className="fredokaB">
                     {item.background}
                   </Card.Text>
                   <Card.Text className="fredokaB">
                    {item.desk}
                   </Card.Text>
                   <Button
                     variant="none"
                     style={{ width: "30px", height: "30px", padding: "0px" }}
                   >
                     <i
                       className="bi bi-instagram"
                       style={{
                         display: "flex",
                         width: "30px",
                         fontSize: "30px",
                       }}
                     ></i>
                   </Button>
                 </Card.Body>
               </Card>
             </Carousel.Item>
           ); 
          })}
          
        </Carousel>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TeacherSec;
