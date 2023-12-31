import { React, useRef } from "react";
import { Row, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import AnimationMasuk from "../ab-component/AnimationTrigger";

const ProgramStudi = () => {
  const rowRef = useRef(null);
  const isVisible = AnimationMasuk(rowRef);
  const card_program = [
    {
      tingkat: "TK",
      img: "https://content.neutron.co.id/assets/main/_576x225_crop_center-center_82_line/BANNER_SD.jpg",
      materi: [
        { name: "test", ic: "fa-solid fa-book-open-reader" },
        { name: "test", ic: "fa-solid fa-flask" },
        { name: "test", ic: "fa-solid fa-book-open-reader" },
      ],
      kelebihan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est temporibus accusantium quam quisquam iusto quas, fugiat fuga quod deserunt reprehenderit numquam, consequatur exercitationem ipsam. Perspiciatis repellendus numquam consequatur. Voluptatibus.",
      redirect: "",
      icon: ["", "fa-solid fa-square-root-variable", "fa-solid fa-users"],
    },
    {
      tingkat: "SD",
      img: "https://content.neutron.co.id/assets/main/_576x225_crop_center-center_82_line/BANNER_SD.jpg",
      materi: [
        { name: "test", ic: "fa-solid fa-book-open-reader" },
        { name: "test", ic: "fa-solid fa-flask" },
        { name: "test", ic: "fa-solid fa-book-open-reader" },
      ],
      kelebihan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est temporibus accusantium quam quisquam iusto quas, fugiat fuga quod deserunt reprehenderit numquam, consequatur exercitationem ipsam. Perspiciatis repellendus numquam consequatur. Voluptatibus.",
      redirect: "",
    },
    {
      tingkat: "SMP",
      img: "https://content.neutron.co.id/assets/main/_576x225_crop_center-center_82_line/BANNER_SD.jpg",
      materi: [
        { name: "test", ic: "fa-solid fa-book-open-reader" },
        { name: "test", ic: "fa-solid fa-flask" },
        { name: "test", ic: "fa-solid fa-book-open-reader" },
      ],
      kelebihan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est temporibus accusantium quam quisquam iusto quas, fugiat fuga quod deserunt reprehenderit numquam, consequatur exercitationem ipsam. Perspiciatis repellendus numquam consequatur. Voluptatibus.",
      redirect: "",
    },
    {
      tingkat: "SMA",
      img: "https://content.neutron.co.id/assets/main/_576x225_crop_center-center_82_line/BANNER_SD.jpg",
      materi: [
        { name: "test", ic: "fa-solid fa-book-open-reader" },
        { name: "test", ic: "fa-solid fa-flask" },
        { name: "test", ic: "fa-solid fa-book-open-reader" },
      ],
      kelebihan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est temporibus accusantium quam quisquam iusto quas, fugiat fuga quod deserunt reprehenderit numquam, consequatur exercitationem ipsam. Perspiciatis repellendus numquam consequatur. Voluptatibus.",
      redirect: "",
    },
  ];
  return (
    <Row
      ref={rowRef}
      className={isVisible ? "animation-fade-right " : "before-animation"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        height: "auto",
      }}
    >
      {card_program.map((item, index) => {
        return (
          <div style={{ maxWidth: "500px" }} key={index}>
            <Card
              className="card-program"
              style={{
                maxWidth: "500px",
                padding: "0px 0px",
                border: "0px",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            >
              <Card.Img
                variant="top"
                src={item.img}
                className="img-program"
                style={{ filter: "blur(0.5px)", WebkitFilter: "blur(0.5px)" }}
              />
              <Card.ImgOverlay>
                <Card.Title
                  className="fredokaB"
                  style={{
                    color: "white",
                    fontSize: "35px ",
                  }}
                >
                  {item.tingkat}
                </Card.Title>
              </Card.ImgOverlay>
              <Card.Body
                className="fredokaL"
                style={{
                  position: "relative",
                  borderRadius: "20px 20px 5px 5px",
                  bottom: "20px",
                  backgroundColor: "white",
                }}
              >
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ul style={{ listStyleType: "none" }}>
                  {item.materi.map((materi, i) => (
                    <li key={i}>
                      <i className={materi.ic}></i> {materi.name}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="none"
                  style={{ marginRight: "20px " }}
                  className="button-sam"
                >
                  Ketahui lebih lanjut!
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Row>
  );
};

export default ProgramStudi;
