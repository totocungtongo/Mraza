import "./App.css";
import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import BeatLoader from "react-spinners/BeatLoader";

function Home() {
  const [loading, setLoading ] = useState(false);
  const Viewmiddle = () => {
    const middleElement = document.getElementById("middle");
    // Scroll ke elemen tengah
    middleElement.scrollIntoView();
    // Mengatur scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    // Menentukan posisi scroll ke tengah layar
    const windowHeight = window.innerHeight;
    const middleElementHeight = middleElement.offsetHeight;
    const middleElementTop =
      middleElement.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition =
      middleElementTop - windowHeight / 2 + middleElementHeight / 2;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },5000)
  },[])
  return (
    <>
    <div className="App">{loading ? (
          <BeatLoader color={"#61c4b0"} loading={loading} size={30}  className="loaders"/>
      ) : (
        <>
          {/* section 1 */}
          <div className="section1">
            <img
              className="image_welcome"
              style={{ width: "100%", height: "auto" }}
              src="https://i.postimg.cc/RZwkbCGR/DALL-E-2023-03-06-10-01-07-creative-auto-x234.jpg"
              alt=""
              loading="lazy"
            />
            {/* <div className="layer"></div> */}
            <div className="welcome">
              <img
                style={{ width: "20vw" }}
                src="https://i.postimg.cc/V6pZDJsh/Mediamodifier-Design-Template-1-1.png"
                alt=""
                loading="lazy"
              />
              <h1 style={{ fontSize: "2.4vw" }}>
                <b>What is lorep ipsum</b>
              </h1>
              <p style={{ fontSize: "1vw" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <Button
                variant="none"
                style={{ backgroundColor: "#61c4b0" }}
                onClick={Viewmiddle}
              >
                What is our services?
              </Button>
            </div>
          </div>
          {/* section 2 */}
          <div className="section2" id="middle" style={{ height: "600px" }}>
            <div
              className="postcard"
              style={{ width: "1050px", height: "400px" }}
            >
              <div className="postcard-text" style={{ color: "white" }}>
                <h1 style={{ textAlign: "start" }}>What is lorep ipsum</h1>
                <p className="postcard-text-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
                <li>
                  <i class="bi bi-check-circle-fill mr-3"></i>
                  Lorem Ipsum is simply dummy text of the printing
                </li>
                <li>
                  <i class="bi bi-check-circle-fill mr-3"></i>Lorem Ipsum is
                  simply dummy text of the printing
                </li>
                <li>
                  <i class="bi bi-check-circle-fill mr-3"></i>Lorem Ipsum is
                  simply dummy text of the printing
                </li>
              </div>
            </div>
          </div>
          <div
            className="section4"
            id="bottom"
            style={{ height: "500px" }}
          ></div>
        </>
      )}</div>
      
    </>
  );
}

export default Home;
