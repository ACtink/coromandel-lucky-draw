import React, { useContext, useState } from "react";
import "../spinner.css";
import { ShowNewGrandPageContext } from "./GrandPageContext";
import { motion } from "framer-motion";


function Spinner2({
  isSecondSpinnerVisible,
  setIsSecondSpinnerVisible,
  showSecondSelected,
  setShowSecondSelected,
  setIsShowing,
}) {
  const [showSecondGrandPage, setShowSecondGrandPage] = useContext(
    ShowNewGrandPageContext
  );

  const [animationClass, setAnimationClass] = useState("");

  console.log(isSecondSpinnerVisible, setIsSecondSpinnerVisible);

  const handleSpinnerClick = () => {
    setAnimationClass("spinner-spin");

    setTimeout(() => {
      setAnimationClass("");
      setIsSecondSpinnerVisible(false);
      localStorage.setItem("setShowSecondSelected", "true");
      localStorage.setItem("isSecondSpinnerVisible", "false");
      localStorage.setItem("isShowing", "true");

      setShowSecondSelected(true);
      setIsShowing(true);
      setShowSecondGrandPage(true);
      localStorage.setItem("setShowSecondGrandPage" , "true")
    }, 7000);

    // Apply the animation class
    console.log(animationClass);
  };
  return (
    <>
      <div className="spinner-container" onClick={handleSpinnerClick}>
        <motion.img
        initial={{x:"100vw"}}
        animate={{x:"0"}}
        transition={{delay:"0.4"}}
          src="spinphoto.png"
          className={`spinner ${animationClass}`}
          alt="spin"
        />
      </div>
    </>
  );
}

export default Spinner2;
