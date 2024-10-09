import "./Body.css";
function Body() {
  return (
    <div>
      <main>

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
        <header>
        </header>
        <section className="banner">
          <div className="content">
            <h1 className="left">BAGARES, JAN MANUEL</h1>
            <div className="right">
              <h2>FRONT END DEV</h2>
              
            </div>
            <div className="image">
              <img
                src="./images/IMG_0635.JPG"
                alt
              />
            </div>
          </div>
        </section>
        <section className="grid grid-1">
          <figure>
            <img src="./images/sich.png" alt />
          </figure>
          <figure>
            <img src="./images/3.png" alt className="autoRotate" />
          </figure>
          <h2 className="autoShow">Introduce</h2>
        </section>
        <section className="grid grid-2">
          <div className="autoShow">
            <figure>
              <img src="./images/6.png" alt />
            </figure>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen b <br />
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop like.
            </p>
          </div>
          <div className="autoShow">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen b <br />
            ook. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. printer took a galley of type and scrambled it to make a type
            specimen b <br />
            ook. It has survived not only five centuries, but also the leap into
            electronic typesetting, remai
          </div>
          <div className="autoShow">
            <figure>
              <img src="./images/2.png" alt />
            </figure>
            <p>
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen b <br />
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="autoShow">
            <figure>
              <img src="./images/candy.png" alt />
            </figure>
          </div>
        </section>
        <section className="grid grid-3">
          <div className="autoBLur">UI/UX</div>
          <div className="autoBLur">FRONT END DEV</div>
          <div className="autoBLur">PHOTOSHOP</div>
          <div className="autoBLur">ARTIST</div>
        </section>
      </main>
    </div>
  );
}

export default Body;
