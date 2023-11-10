import React, { useState } from "react";

function Home() {
  const [glowing, setGlowing] = useState('red');
  const [purpleVisible, setPurpleVisible] = useState(false);
  const trafficClass = purpleVisible ? "trafficPurple" : "traffic";

  const togglePurple = () => {
    setPurpleVisible(!purpleVisible);
    setGlowing('purple');
  };

  return (
    <div className="text-center">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          if (glowing === "purple") {
            setGlowing("green");
          } else if (glowing === "red") {
            setGlowing("purple");
          } else if (glowing === "green") {
            setGlowing("yellow");
          } else if (glowing === "yellow") {
            setGlowing("red");
          }
        }}
      >
        Switch Colors
      </button>
      <button
        type="button"
        className="btn btn-secondary m-3"
        onClick={togglePurple}
      >
        Luz Púrpura
      </button>
      <div className={trafficClass}>
	  {purpleVisible && (
          <div
            className={"lamp purple " + (glowing === "purple" ? "glowingPurple" : "")}
            onClick={() => setGlowing("purple")}
          ></div>
        )}
        <div
          className={"lamp red " + (glowing === "red" ? "glowingRed" : "redTenue")}
          onClick={() => setGlowing("red")}
        ></div>
        <div
          className={"lamp yellow " + (glowing === "yellow" ? "glowingYellow" : "yellowTenue")}
          onClick={() => setGlowing("yellow")}
        ></div>
        <div
          className={"lamp green " + (glowing === "green" ? "glowingGreen" : "greenTenue")}
          onClick={() => setGlowing("green")}
        ></div>
        
      </div>
      <div className="text-center poste"></div>
    </div>
  );
}

export default Home;