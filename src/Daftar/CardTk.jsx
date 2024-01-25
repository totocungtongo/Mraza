import React from "react";
import Card from "react-bootstrap/Card";

const Tkcard = () => {
  const all_card_tk = [
    {
      judul: "Eksklusif",
      img: "https://i.ibb.co/Ry2nJMb/ezgif-com-resize.webp",
      ul: [
        "Maksimum Murid per kelas 6 orang",
        "Biaya Per Kedatangan  Rp.50.000 Rupiah",
      ],
    },
    {
      judul: "Reguler",
      img: "https://i.ibb.co/Ry2nJMb/ezgif-com-resize.webp",
      ul: [
        "Maksimum Murid per kelas 12 orang",
        "Biaya Per kedatangan Rp.25.000 Rupiah",
      ],
    },
    {
      judul: "Holiday",
      img: "https://i.ibb.co/Ry2nJMb/ezgif-com-resize.webp",
      ul: [
        "Maksimum Murid per kelas 12 orang",
        " Biaya Per kedatangan Rp.35.000 Rupiah",
      ],
    },
  ];
  return (
    <div className="tk-card-wraper">
      {all_card_tk.map((item, index) => {
        return (
          <Card
            style={{
              maxWidth: "20rem",
              borderRadius: "40px",
              border: "0px",
              boxShadow: "15px 10px 3px rgba(0,0,0,0.3)",
              backgroundColor: "#61c4B0",
            }}
            key={index}
            className="animation-attention-pulse"
          >
            <Card.Img
              variant="top"
              src={item.img}
              style={{ borderRadius: "40px" }}
            />
            <Card.Body>
              <Card.Title
                className="fredokaB"
                style={
                  item.judul === "Eksklusif"
                    ? { color: "#EB1D23" }
                    : item.judul === "Reguler"
                    ? { color: "#2A5D82" }
                    : { color: "#BB5FCB" }
                }
              >
                {item.judul}
              </Card.Title>
              <Card.Text>
                <ul>
                  {item.ul.map((materi,i) => {
                    return <li key={i}>{materi}</li>;
                  })}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Tkcard;
