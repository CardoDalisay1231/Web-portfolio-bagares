import React, { useState, useEffect } from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  const [visible, setVisible] = useState(false);

  // Manage visibility when isOpen changes
  useEffect(() => {
    if (isOpen) {
      setVisible(true); // Set visible immediately when opening
    } else {
      const timer = setTimeout(() => setVisible(false), 300); // Delay hiding to allow close animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    visible && (
      <div className={`overlay ${isOpen ? "entering" : "exiting"}`}>
        <div className={`window ${isOpen ? "entering" : "exiting"}`} tabIndex="0">
          <div className="window__title-bar">
            <div className="window__title">Project Details</div>
            <button className="window__btn" onClick={onClose}>
              &times;
              <span>Close</span>
            </button>
          </div>
          <div className="window__body">{children}</div>
          <div className="window__status-bar">
            Portfolio &rarr; Projects &rarr; Details
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
