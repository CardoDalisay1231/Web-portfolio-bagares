function Contacts() {
  const openGithub = () => {
    window.open('https://github.com/CardoDalisay1231', '_blank');
  };
  return (
    
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./images/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:jmbagares52@gmail.com">jmbagares52@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
        <img
              src="./images/github.png"
              alt="My Github profile"
              className="icon"
              onClick={openGithub}
              style={{ cursor: "pointer" }}
            />
          <p>
            <a href="https://github.com/CardoDalisay1231">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
