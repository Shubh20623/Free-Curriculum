import React from "react";
import "./AboutPage.css"; // Import CSS file for styling

const AboutPage = () => (
  <div className="about-container">
    <h2 className="about-title">About</h2>
    <p className="about-description">
      Welcome to our online course management application! This app is built
      using modern web technologies such as React, Redux, and React Router to
      provide a seamless and interactive learning experience for both educators
      and students.
    </p>
    <p className="about-features">
      Key Features:
    </p>
    <ul className="about-feature-list">
      <li>View, update, and delete course details</li>
      <li>User-friendly interface with intuitive navigation</li>
      <li>Secure user authentication using Firebase</li>
      <li>Integration with Mock API for backend simulation</li>
    </ul>
  </div>
);

export default AboutPage;
