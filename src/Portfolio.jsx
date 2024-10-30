import React, { useState } from "react";
import "./Portfolio.css";
import Modal from "./Modal";

function Portfolio() {
  const isReverse = true;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projectDetails = [
    {
      id: 1,
      title: "Enrollment System (CvSU - Bacoor)",
      description:
        "This Project is still ongoing but this is an Enrollment  System for my School CvSU - Bacoor",

      image: "./images/slider2_1.png",
      technologies: ["React/js", "Laravel (Not yet implemented)", "HTML"],
    },
    {
      id: 2,
      title: "Inventory System",
      description:
        "Minekaniko is an simple Inventory System that can be used by any business to manage their inventory.",

      image: "./images/slider2_2.png",
      technologies: ["html/css", "php", "mySql"],
    },
    {
      id: 3,
      title: "WEBIT.",
      description:
        "WEBIT. is a psuedo website for a company that sells web development services.",
      image: "./images/slider2_3.png",
      technologies: ["CSS/HTML", "BOOTSTRAP"],
    },
    {
      id: 4,
      title: "JoJi",
      description:
        "I created this Artwork  using Adobe Photoshop in March 9, 2018 this is a Vector Art",
      image: "./images/slider2_4.png",
      technologies: ["Adobe Photoshop"],
    },
    {
      id: 5,
      title: "Alisson Shore",
      description:
        "Alisson Shore is a rapper in the philippines i created this Artwork in  Adobe Photoshop  in 2019",
      image: "./images/slider2_5.png",
      technologies: ["Adobe Photoshop"],
    },
    {
      id: 6,
      title: "PewDiePie (Felix Arvid Ulf Kjellberg)",
      description:
        "I created this artwork to commemorate PewDiePie's  100 million subscribers in August 2019",
      image: "./images/slider2_6.png",
      technologies: ["Adobe Photoshop"],
    },
    {
      id: 7,
      title: "Hoodie Project",
      description:
        "I Designed a Hoodie for my section  in our school UPHSD - Laspinas City 12 ICT 2 Although we didn't  get the chance to produce it i still had fun designing it ",
      image: "./images/slider2_7.png",
      technologies: ["Adobe Photoshop", "Adobe Illustrator"],
    },
    {
      id: 8,
      title: "YZZK",
      description:
        "Also one of my favorite rapper in the philippines i created this Artwork in  Adobe Photoshop  in 2020",
      image: "./images/slider2_8.png",
      technologies: ["Adobe Photoshop"],
    },
    {
      id: 9,
      title: "CVSU WEBSITE",
      description:
        "This Website is just a simple HTML/CSS website when we were in our 2nd year in college",
      image: "./images/slider2_9.png",
      technologies: ["HTML/CSS"],
    },
  ];

  const openModal = (project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section id="projects" style={{ position: "relative" }}>
      <main>
        <div>
          <h1 className="title-project">Projects</h1>
          <p className="section__text__p1">
            Click the Picture for more Details
          </p>
        </div>
        <br />
        <br />
        <div
          className={`slider ${isReverse ? "reverse" : ""}`}
          style={{
            "--width": "clamp(100px, 20vw, 200px)",
            "--height": "clamp(100px, 20vw, 200px)",
            "--quantity": projectDetails.length,
          }}
        >
          <div className="list">
            {projectDetails.map((project, index) => (
              <a
                key={index}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  openModal(project);
                }}
              >
                <div className="item" style={{ "--position": index + 1 }}>
                  <img src={project.image} alt={project.title} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {activeProject && (
          <div>
            <h1>{activeProject.title}</h1>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <p>{activeProject.description}</p>
            <h2>Technologies Used:</h2>
            <ul>
              {activeProject.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Portfolio;
