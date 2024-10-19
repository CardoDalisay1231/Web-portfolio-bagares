import "./Body.css";
import "./mediaqueries.css";
function Body() {
  const openFacebook = () => {
    window.open('https://www.facebook.com/jm.bagares.14/', '_blank');
  };

  const openGithub = () => {
    window.open('https://github.com/CardoDalisay1231', '_blank');
  };
  return (
    <div>
      <div
        className="slider"
        style={{ "--width": "70px", "--height": "70px", "--quantity": 10 }}
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
    

      <section id="profile">
        <div className="section__pic-container">
          <img
            className="roundImg"
            src="./images/IMG_0635.JPG"
            alt="John Doe profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Jan Manuel Bagares</h1>
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
