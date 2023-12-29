import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import AnimationMasuk from "../ab-component/AnimationTrigger";
import { Row } from "react-bootstrap";
const Materi = () => {
  const rowRef = useRef(null);
  const isVisible = AnimationMasuk(rowRef, 30);
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
        isVisible ? "matpel-cover animation-bounce-down" : "before-animation"
      }
    >
      {all_mat.map((item, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index} className="matpel-card">
            <Card.Body>
              <Card.Title className="fredokaB matpel-card-t">
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
      <p
        style={{
          color: "#ff9090",
          webkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        im hidden
      </p>
    </Row>
  );
};

export default Materi;
