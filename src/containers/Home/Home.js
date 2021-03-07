import React from "react";

import LoaderButton from "../../components/LoaderButton/LoaderButton";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="lander">
        <h1>SRover</h1>
        <p className="text-muted">SRover - A Mars Rover app</p>
        <p>
          <LoaderButton size="lg" href="/rovers" variant="outline-info">
            Check out the Rovers
          </LoaderButton>
        </p>
      </div>
    </div>
  );
};

export default Home;
