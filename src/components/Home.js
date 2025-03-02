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
            <Link to="/">
              <button
                className="home-button medium-home-button"
                style={{ color: "rgb(44, 44, 44)" }}
              >
                Home
              </button>
            </Link>

            {/* <Link to={"/"} >
        <button className="home-button medium-home-button" >Reset</button>
        </Link> */}
          </div>
          <img
            src="/lucky-draw-files/screens/home_screen_1.jpg"
            className="banner-image"
            alt=""
          />
        </div>
        {/* <div className="home-down-portion"> */}

        <div className="card-container">
          <img
            className="home-down-image"
            src="/lucky-draw-files/screens/home_screen_2.jpg"
            alt=""
          />

          <Link to="/firstprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/screens/1_gm_coin_card.jpg"
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
                  src="/lucky-draw-files/screens/2_gm_coin_card.jpg"
                  className="card-image"
                  alt=""
                />
              </div>
            </div>
          </Link>

          <Link to="/thirdprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/screens/3_gm_coin_card.jpg"
                  className="card-image"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
