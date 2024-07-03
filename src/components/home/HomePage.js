import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-4">Welcome to Free Curriculum</h1>
      <p className="lead">
        Empowering educators and students with cutting-edge technology.
      </p>
      <hr className="my-4" />
      <p>
        Our platform utilizes the latest technologies like React, Redux, and
        React Router to deliver an immersive learning experience.
      </p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  </div>
);

export default HomePage;





// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => (
//   <div className="jumbotron">
//     <h1>Pluralsight Administration</h1>
//     <p>React, Redux and React Router for ultra-responsive web apps.</p>
//     <Link to="about" className="btn btn-primary btn-lg">
//       Learn more
//     </Link>
//   </div>
// );

// export default HomePage;
