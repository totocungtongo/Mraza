import React from "react";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ProgramStudi = () => {
  const card_program = [
    {
      tingkat: "TK",
      img: "https://content.neutron.co.id/assets/main/_576x225_crop_center-center_82_line/BANNER_SD.jpg",
      materi: ["", "", ""],
      kelebihan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est temporibus accusantium quam quisquam iusto quas, fugiat fuga quod deserunt reprehenderit numquam, consequatur exercitationem ipsam. Perspiciatis repellendus numquam consequatur. Voluptatibus.",
      redirect: "",
    },
    {
      tingkat: "SD",
      img: "https://content.neutron.co.id/assets/main/_576x225_crop_center-center_82_line/BANNER_SD.jpg",
      materi: ["", "", ""],
      kelebihan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est temporibus accusantium quam quisquam iusto quas, fugiat fuga quod deserunt reprehenderit numquam, consequatur exercitationem ipsam. Perspiciatis repellendus numquam consequatur. Voluptatibus.",
      redirect: "",
    },
    {
      tingkat: "SMP",
      img: "https://content.neutron.co.id/assets/main/_576x225_crop_center-center_82_line/BANNER_SD.jpg",
      materi: ["", "", ""],
      kelebihan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est temporibus accusantium quam quisquam iusto quas, fugiat fuga quod deserunt reprehenderit numquam, consequatur exercitationem ipsam. Perspiciatis repellendus numquam consequatur. Voluptatibus.",
      redirect: "",
    },
    {
      tingkat: "SMA",
      img: "https://content.neutron.co.id/assets/main/_576x225_crop_center-center_82_line/BANNER_SD.jpg",
      materi: ["", "", ""],
      kelebihan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est temporibus accusantium quam quisquam iusto quas, fugiat fuga quod deserunt reprehenderit numquam, consequatur exercitationem ipsam. Perspiciatis repellendus numquam consequatur. Voluptatibus.",
      redirect: "",
    },
  ];
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
      }}
    >
      {card_program.map((item, index) => {
        return (
          <div style={{ maxWidth: "400px" }} key={index}>
            <Card
              className="card-program"
              style={{ maxWidth: "400px", padding: "0px 0px", border: "0px" }}
            >
              <Card.Img
                variant="top"
                src={item.img}
                className="img-program"
                style={{ filter: "blur(1px)", WebkitFilter: "blur(1px)" }}
              />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    color: "white",
                    fontSize: "24px ",
                  }}
                >
                  {item.tingkat}
                </Card.Title>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Row>
  );
};

export default ProgramStudi;
