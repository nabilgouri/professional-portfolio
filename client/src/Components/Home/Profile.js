import React from "react";
import "./Profile.css";
import Button from "@mui/material/Button";
import Typical from "react-typical";
const eventHandler = () => console.log("Button Clicked");
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-colz">
        <div className="profile-colz-icons">
          <a href="https://getbootstrap.com/">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/nabil-gouri-875385105/">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.github.com/nabilgouri">
            <i className="bi bi-github"></i>
          </a>
        </div>

      <div className="profile-details">
        <div className="profile-details-name">
          <h1>Hey, I'm Nabil</h1>
        </div>
        <div className="profile-details-roles">
          <h1>
            <Typical
              steps={[
                "Full stack developer",
                3000,
                "I use the MERN JS stack",
                3000,
                "and also I'm a computer vision engineer ",
                1000,
                "But mostly , i'm a problem solver .... ",
                3000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
        </div>

        <div className="profile-options">
          <button className="btn primary-btn" onClick={() => eventHandler()}>
            Hire me
          </button>
          <a href="cv.pdf" download="nabil gouri resume.pdf">
            <button className="btn primary-btn" onClick={() => eventHandler()}>
              Get my resume
            </button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>

      </div>
    </div>
  );
}
