import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function Home() {
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
  return (
    <>
      {/* section 1 */}
      <div className="section1">
        <img
          className="image_welcome"
          style={{ width: "100%", height: "auto" }}
          src="https://i.postimg.cc/ZK3CYLFL/desk-workspace-with-various-elements.jpg"
          alt=""
        />
        <div className="layer"></div>
        <div className="welcome">
          <img
            style={{ width: "350px" }}
            src="https://i.postimg.cc/V6pZDJsh/Mediamodifier-Design-Template-1-1.png"
            alt=""
          />
          <h1 style={{ fontSize: "48px" }}>
            <b>What is lorep ipsum</b>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
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
        <div className="postcard" style={{width: "1050px",height:"400px"}}><div className="postcard-text" style={{color:"white"}}><h1>What is lorep ipsum</h1></div></div>
      </div>
      <div className="section4" id="bottom" style={{ height: "500px" }}></div>
    </>
  );
}

export default Home;
