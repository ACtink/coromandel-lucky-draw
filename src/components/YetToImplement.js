import React, { useState } from "react";

function YetToImplement() {

  const [animationClass, setAnimationClass] = useState("");

  const handleSpinnerClick = () => {

    setAnimationClass("spinner-spin");

    console.log("hello clicked on spinner image")
  }
  return (
    <div className="yet-to-implement-div">
      <h1>This Page is yet to Implement!</h1>
      <img className={`spin-card ${animationClass}`} src="requirements/cards/1.gif" alt="" onClick={handleSpinnerClick} />
    </div>
  );
}

export default YetToImplement;
