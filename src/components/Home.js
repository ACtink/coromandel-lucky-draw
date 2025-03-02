import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CarouselC from "./CarouselC";
import "../carousal.css";
import { ShowNewGrandPageContext } from "./GrandPageContext";
import { motion } from "framer-motion";

function Home() {
  // const [
  //   showSecondGrandPage,
  //   setShowSecondGrandPage,
  //   showGrandPage2,
  //   setShowgrandPage2,
  // ] = useContext(ShowNewGrandPageContext);

  // // if(showSecondGrandPage===false){
  // //   setShowSecondGrandPage(true)
  // // }

  // // if(showGrandPage2===false){
  // //   setShowgrandPage2(true)
  // // }

  // if (localStorage.getItem("setShowSecondGrandPage") === true) {
  // }

  return (
    <>
      <div className="outer">
        <div className="home">
          <div className="nav-buttons-container">
            <Link to={"/"}>
                              <motion.button
                                whileHover={{ scale: "1.2", color: "yellow" }}
                                whileTap={{ scale: "0.9" }}
                                className="home-button medium-home-button"
                              >
                                Home
                              </motion.button>
                               </Link>
            {/* <Link to={"/"} >
        <button className="home-button medium-home-button" >Reset</button>
        </Link> */}
          </div>
          <img
            src="/requirements/final-files/new-home-up.gif"
            className="banner-image"
            alt=""
          />
        </div>
        {/* <div className="home-down-portion"> */}

        <div className="card-container">
          <img
            className="home-down-image"
            src="/requirements/final-files/new-home-down.gif"
            alt=""
          />

          <Link to="/firstprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/requirements/final-files/2-gram-coin-card.gif"
                  className="card-image"
                  alt=""
                />
              </div>
              {/* <Link to="/1stPrize" className="button-link"><button class="button">
            <span>1st Prize</span>
          </button></Link> */}
            </div>
          </Link>
          <Link to="/secondprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/requirements/final-files/1-gram-coin-card.gif"
                  className="card-image"
                  alt=""
                />
              </div>

              {/* <Link to="/2ndPrize" className="button-link"><button class="button">
            <span>2nd Prize</span>
          </button></Link> */}
            </div>
          </Link>

          {/* <div className="inner-container"> */}

          {/* </div> */}
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

export default Home;
