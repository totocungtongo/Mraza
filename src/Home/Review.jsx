import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const ReviewS = () => {
  const cards1 = [
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: " Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: " Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
  ];
  const cards2 = [
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: " Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: " Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
  ];
  const cards3 = [
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: " Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: "Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
    {
      name: " Fiad",
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      rev: "",
    },
  ];
  return (
    <Container style={{ backgroundColor: "#61c4b0", paddingBottom:"120px",paddingLeft:"20px",paddingRight:"20px" }}>
      <Col
        className="d-flex"
        style={{ flexDirection: "column", gap: "20px", overflow: "hidden" }}
      >
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            flexWrap: "nowrap",
            justifyContent: "space-around",
          }}
        >
          {cards1.map((item, index) => {
            return (
              <Card className="card-review  card-animation" key={index}>
                <Card.Img src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>testa s as sda scas asc</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            flexWrap: "nowrap",
            justifyContent: "space-around",
          }}
        >
          {cards2.map((item, index) => {
            return (
              <Card className="card-review card-animation2" key={index}>
                <Card.Img src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>testa s as sda scas asc</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            flexWrap: "nowrap",
            justifyContent: "space-around",
          }}
        >
          {cards3.map((item, index) => {
            return (
              <Card className="card-review card-animation" key={index}>
                <Card.Img src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>testa s as sda scas asc</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Col>
    </Container>
  );
};

export default ReviewS;
