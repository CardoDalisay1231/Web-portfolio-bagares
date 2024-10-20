import { useEffect, useState } from "react";
import "animate.css"; // Import animate.css animations
import "./body.css";
import "./mediaqueries.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if 20% of the section is in the viewport
      if (rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.2) {
        setIsVisible(true); // 20% of the section is visible
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className={`${isVisible ? "animate__animated animate__fadeInUp" : ""}`} // Apply animation if visible
    >
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./images/IMG_0616.JPG"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./images/skill.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Skills</h3>
              <p>
                React, JavaScript <br />
                HTML/CSS, Bootstrap <br />
                Photoshop, Illustrator <br />
              </p>
            </div>
            <div className="details-container">
              <img
                src="./images/mortarboard.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                CVSU Bacoor- Bachelor of Science in Computer Science
                <br />
                Grade 11 & 12 UPHSD Laspiñas - Information and Communication
                Technology
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm Jan Manuel Bagares from T.S Cruz, LasPiñas City. I'm a 3rd
              year College student at CVSU Bacoor i'm a computer science
              student. I'm a self-taught developer and a designer. I'm
              passionate about creating something new and innovative. Although
              I'm still a newbie, I'm eager to learn more and improve my skills.
              I'm a team player and a quick learner. I'm excited to collaborate
              with you and create something amazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
