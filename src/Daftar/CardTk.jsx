import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const Tkcard = () => {
  const [showModal, setShowModal] = useState({
    eksklusif: false,
    reguler: false,
    holiday: false,
  });

  const handleClose = (modalName) => {
    setShowModal({ ...showModal, [modalName]: false });
  };

  const handleShow = (modalName) => {
    setShowModal({ ...showModal, [modalName]: true });
  };
  const all_card_tk = [
    {
      judul: "Eksklusif",
      img: "https://i.ibb.co/Ry2nJMb/ezgif-com-resize.webp",
      ul: [
        "Maksimum Murid per kelas 6 orang",
        "Biaya Per Kedatangan  Rp.50.000 Rupiah",
      ],
      ulh: [
        "Maksimum Murid per kelas 6 orang",
        "Biaya Per Kedatangan  Rp.50.000 Rupiah",
        "mendapatkan fasilitas konsultasi",
        "Kelas nyaman full AC",
        "Gratis wifi untuk proses pembelajaran",
      ],
      wa: "",
    },
    {
      judul: "Reguler",
      img: "https://i.ibb.co/Ry2nJMb/ezgif-com-resize.webp",
      ul: [
        "Maksimum Murid per kelas 12 orang",
        "Biaya Per kedatangan Rp.25.000 Rupiah",
      ],
      ulh: [
        "Maksimum Murid per kelas 12 orang",
        "Biaya Per Kedatangan  Rp.25.000 Rupiah",
        "mendapatkan fasilitas konsultasi",
        "Kelas nyaman full AC",
        "Gratis wifi untuk proses pembelajaran",
      ],
      wa: "",
    },
    {
      judul: "Holiday",
      img: "https://i.ibb.co/Ry2nJMb/ezgif-com-resize.webp",
      ul: [
        "Maksimum Murid per kelas 12 orang",
        " Biaya Per kedatangan Rp.35.000 Rupiah",
        "Pendaftaran di buka Hanya di liburan semester ",
      ],
      ulh: [
        "Maksimum Murid per kelas 12 orang",
        "Biaya Per Kedatangan  Rp.35.000 Rupiah",
        "Pendaftaran di buka Hanya di liburan semester ",
        "Tidak mendapatkan fasilitas konsultasi",
        "Kelas nyaman full AC",
        "Gratis wifi untuk proses pembelajaran",
      ],
      wa: "",
    },
  ];
  return (
    <div className="tk-card-wraper">
      {all_card_tk.map((item, index) => {
        const modalName = item.judul.toLowerCase();
        return (
          <div>
            <Card
              className="card-paket-design animation-attention-pulse"
              onClick={() => handleShow(modalName)}
              key={index}
            >
              <Card.Img
                variant="top"
                src={item.img}
                style={{ borderRadius: "40px" }}
              />
              <Card.Body>
                <Card.Title
                  className="fredokaB tk-h2"
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
                <ul>
                  {item.ul.map((materi, i) => {
                    return (
                      <li key={i} className="fredokaB">
                        {materi}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Card>
            <Modal
              show={showModal[modalName]}
              onHide={() => handleClose(modalName)}
              className="modal-paket"
            >
              <Modal.Header closeButton style={{ backgroundColor: "" }}>
                <Modal.Title
                  className="fredokaB tk-h2"
                  style={
                    item.judul === "Eksklusif"
                      ? { color: "#EB1D23" }
                      : item.judul === "Reguler"
                      ? { color: "#2A5D82" }
                      : { color: "#BB5FCB" }
                  }
                >
                  {" "}
                  {item.judul}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ backgroundColor: "" }}>
                <ul>
                  {item.ulh.map((materi, i) => {
                    return (
                      <li key={i} className="fredokaB">
                        {materi}
                      </li>
                    );
                  })}
                </ul>
                <Button
                  variant="none"
                  className="button-sam"
                  style={{ maxWidth: "200px" }}
                >
                  daftar sekarang!
                </Button>
              </Modal.Body>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default Tkcard;
