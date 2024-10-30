import "./Body.css";
import "./mediaqueries.css";
function Body() {
  const openFacebook = () => {
    window.open("https://www.facebook.com/jm.bagares.14/", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/CardoDalisay1231", "_blank");
  };
  return (
    <div>
      <div
        className="slider"
        style={{
          "--quantity": 10,
          "--width": "clamp(40px, 7vw, 70px)",
          "--height": "clamp(40px, 7vw, 70px)",
        }}
      >
        <div className="list">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="item"
                style={{ "--position": index + 1 }}
              >
                <img src={`./images/slider1_${index + 1}.png`} alt="" />
              </div>
            ))}
        </div>
      </div>
      <nav class="bottom-navbar">
        <a href="#profile">Profile</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="profile">
        <div className="section__pic-container">
          <img
            className="roundImg"
            src="./images/jmpogi.png"
            alt="John Doe profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">JAN MANUEL M. BAGARES</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div id="socials-container">
            <img
              src="./images/facebook.png"
              alt="fb link"
              className="icon"
              onClick={openFacebook}
              style={{ cursor: "pointer" }}
            />
            <img
              src="./images/github.png"
              alt="My Github profile"
              className="icon"
              onClick={openGithub}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
