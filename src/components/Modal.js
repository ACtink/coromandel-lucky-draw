import React, { useEffect, useState } from "react";
import SliderContainer from "./SliderContainer";
import { AnimatePresence, motion } from "framer-motion";


function Modal({ showModal, setShowModal, toggleModal, winnersList, closeModal }) {


 


  return (
    <>
    <AnimatePresence>
      {showModal && (
        <motion.div
        initial={{y:"-100vh"}}
        animate={{y:"0"}}
        exit={{y:"-200vh"}}
         className={`modal ${showModal ? "open" : "" }`}>
          {/* <div className="overlay"></div> */}

          <div className="container-modal">
            {/* {winnersList[0].title==="first" &&  <SliderContainer winnersList={winnersList} />}
          {winnersList[0].title==="second" &&  <SliderContainer winnersList={winnersList} />} */}
            <SliderContainer winnersList={winnersList} />

            <motion.button
            // whileHover={{scale:"1.1"}}
            // whileTap={{scale:"0.8"}}
        
            
            className="modal-close-button" onClick={closeModal}>
              Close
            </motion.button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
