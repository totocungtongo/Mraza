import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import AnimationMasuk from "../ab-component/AnimationTrigger";
import { Row ,Button} from "react-bootstrap";
const Fasilitas = () => {
  const rowRef = useRef(null);
  const isVisible = AnimationMasuk(rowRef);
  const [all_mat, setMatpel] = useState([]);
  useEffect(() => {
    const matpel = [
      {
        matname: "Mtk",
        icon: "fa-solid fa-square-root-variable",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "Ipa",
        icon: "fa-solid fa-flask",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "Calistung",
        icon: "fa-solid fa-book-open-reader",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "Ips",
        icon: "fa-solid fa-users",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "English",
        icon: "fa-solid fa-a",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "Membantu ujian",
        icon: "fa-solid fa-newspaper",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
    ];
    setMatpel(matpel);
  }, []);
  return (
    <Row
      ref={rowRef}
      className={
        isVisible ? "fasilitas-cover animation-bounce-down" : "before-animation"
      }
    >
      <h3
        className="fredokaB h3-whyus"
        style={{ textAlign: "center", fontSize: "50px" }}
      >
        Fasilitas kami
      </h3>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {all_mat.map((item, index) => {
          return (
            <Card
              style={{ maxWidth: "300px" }}
              key={index}
              className="fasilitas-card"
            >
              <Card.Body>
                <Card.Title className="fredokaB matpel-card-t ">
                  <i
                    className={item.icon + " icon-style"}
                    style={{
                      padding: "0",
                      fontSize: "40px",
                      marginRight: "10px",
                      color: "#2a5d82",
                    }}
                  ></i>
                  {item.matname}
                </Card.Title>
                <Card.Text className="fredokaL matpel-card-p">
                  {item.desk}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      <Button
        variant="none"
        className="button-sam"
        style={{ maxWidth: "200px" }}
      >
        Hubungi kami!
      </Button>
    </Row>
  );
};

export default Fasilitas;
