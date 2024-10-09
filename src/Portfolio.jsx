import React from "react";
import "./Portfolio.css";
function Portfolio() {
  const isReverse = true;
  return (
    <main>
      <div
        className={`slider ${isReverse ? 'reverse' : ''}`} // Use the isReverse variable here
        style={{ "--width": "200px", "--height": "200px", "--quantity": 9 }}
      >
        <div className="list">
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <a
                key={index}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  delayLink(`http://w3schools.com`, 500);
                }}
              >
                <div className="item" style={{ "--position": index + 1 }}>
                  <img src={`./images/slider2_${index + 1}.png`} alt="" />
                </div>
              </a>
            ))}
        </div>
      </div>
    </main>
  );
}

function delayLink(url, delay) {
  setTimeout(() => {
    window.location.href = url;
  }, delay);
}

export default Portfolio;
