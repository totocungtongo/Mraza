import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import AnimationMasuk from "../ab-component/AnimationTrigger";
import { Row } from "react-bootstrap";
const Materi = () => {
  const rowRef = useRef(null);
  const isVisible = AnimationMasuk(rowRef);
  const [all_mat, setMatpel] = useState([]);
  useEffect(() => {
    const matpel = [
      {
        matname: "mtk",
        icon: "jasnca",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "mtk",
        icon: "jasnca",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "mtk",
        icon: "jasnca",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "mtk",
        icon: "jasnca",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "mtk",
        icon: "jasnca",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
      {
        matname: "mtk",
        icon: "jasnca",
        desk: " possimus atque officiis ea commodi pariatur mollitia ad similique, reprehenderit debitis libero distinctio quasi.",
      },
    ];
    setMatpel(matpel);
  }, []);
  return (
    <Row
      ref={rowRef}
      className={isVisible ? "animation-bounce-down" : "before-animation"}
    >
      {all_mat.map((item, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Body>
              <Card.Title>{item.matname}</Card.Title>
              <Card.Text>{item.desk}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Row>
  );
};

export default Materi;
