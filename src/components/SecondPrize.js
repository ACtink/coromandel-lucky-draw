import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import SliderContainer from "./SliderContainer";
import Modal from "./Modal";
import { motion } from "framer-motion";

function SecondPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [revealPrize, setRevealPrize] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [announceWinner, setAnnounceWinner] = useState(false);

  const winnersList = [
    { url: "/requirements/final-files/1-gram-gold/1.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/2.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/3.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/4.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/5.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/6.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/7.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/8.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/9.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/10.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/11.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/12.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/13.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/14.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/15.jpg", title: "beach" },
    { url: "/requirements/final-files/1-gram-gold/16.jpg", title: "beach" },
  ];

  const toggleElement = () => {
    setIsShowing(true);
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
   setShowModal(!showModal);
   setAnnounceWinner(!announceWinner);
   setIsCardVisible(!isCardVisible);
  };

  const handleCardClick = () => {
   setIsCardVisible(false);
   setShowModal(!showModal);
   setShowWinners(true);
   setIsShowing(true);
  };

  // const handleAnnounceImage = () => {
  //   setRevealPrize(false);
  //   setShowWinners(true);
  //   setIsShowing(true);
  //   setAnnounceWinner(false);
  //   setShowModal(!showModal);
  // };

  return (
    <div className="grandpage">
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
      </div>
      <div className="grandPrize">
        <img
          src="/requirements/final-files/1-gram-coin-up.gif"
          className="grandprize-image"
          alt=""
        />
      </div>
      <div className="grandprize-down-portion">
        <img
          className="grand-down-image"
          src="/requirements/final-files/1-gram-coin-down.gif"
          alt=""
        />
        <div className="items-container">
          {isCardVisible && (
            <motion.div
              initial={{ y: "-70vh" }}
              animate={{ y: "0" }}
              transition={{ delay: "0.2" }}
              className="grand-page-card-container"
            >
              <div className="card" onClick={handleCardClick}>
                <div className="card-image-container">
                  <img
                    src="/requirements/final-files/1-gram-coin-card.gif"
                    className="card-image"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
          )}
          {/* {isSpinnerVisible && (
            <div>
              <Spinner
                isSpinnerVisible={isSpinnerVisible}
                setIsSpinnerVisible={setIsSpinnerVisible}
                revealPrize={revealPrize}
                setRevealPrize={setRevealPrize}
                setIsShowing={setIsShowing}
                announceWinner={announceWinner}
                setAnnounceWinner={setAnnounceWinner}
              />
            </div>
          )} */}
          {/* {announceWinner && (
            <div
              className={`transition-element ${isShowing ? "show" : ""}`}
              onClick={handleAnnounceImage}
            >
              <img
                src="/images/third_step_image.gif"
                className="announce-prize-image"
                alt="grand-prize-announcement"
              />
            </div>
          )} */}

          {/* {
            showWinners && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                     <img src="grandprizeWinners.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        } */}
          {/* {
            showWinners && (<SliderContainer winnersList={winnersList} />)
        } */}
        </div>
      </div>
      {showWinners && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          toggleModal={toggleModal}
          winnersList={winnersList}
          revealPrize={revealPrize}
          setRevealPrize={setRevealPrize}
        />
      )}
    </div>
  );
}

export default SecondPrize;
