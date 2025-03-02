


// import { useState } from "react";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const rightArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   right: "16px",
//   fontSize: "70px",
//   color: "#f579",
//   zIndex: 1,
//   cursor: "pointer",
// };

// const leftArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   left: "16px",
//   fontSize: "70px",
//   color: "#f579",
//   zIndex: 1,
//   cursor: "pointer",
// };

// const sliderStyles = {
//   position: "relative",
//   height: "100%",
//   width: "100%",
// };

// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
//   marginTop: "10px",
// };

// const dotStyle = (isActive) => ({
//   margin: "0 5px",
//   cursor: "pointer",
//   fontSize: "20px",
//   color: isActive ? "#0d6efd" : "#6c757d", // Active: Primary Blue, Inactive: Darker Grayish-Blue
//   transition: "color 0.3s ease", // Smooth transition for color change
// });



// const Slider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url("${slides[currentIndex].url}")`,
//   };

//   return (
//     <div className="slides-div" style={sliderStyles}>
//       <div>
//         {slides.length > 1 && (
//           <div onClick={goToPrevious} style={leftArrowStyles}>
//             ❰
//           </div>
//         )}
//         {slides.length > 1 && (
//           <div onClick={goToNext} style={rightArrowStyles}>
//             ❱
//           </div>
//         )}
//       </div>
//       <div className="slides" style={slideStylesWidthBackground}></div>
//       <div style={dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => (
//           <div
//             style={dotStyle(slideIndex === currentIndex)} // Apply active style
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;




import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 0.4s ease-in-out", // Smooth background transition
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "16px",
  fontSize: "70px",
  color: "#f579",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "16px",
  fontSize: "70px",
  color: "#f579",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "hidden", // Prevent content overflow
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const dotStyle = (isActive) => ({
  margin: "0 5px",
  cursor: "pointer",
  fontSize: "20px",
  color: isActive ? "#0d6efd" : "#6c757d", // Active: Primary Blue, Inactive: Darker Grayish-Blue
  transition: "color 0.3s ease", // Smooth transition for color change
});

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWithBackground = {
    ...slideStyles,
    backgroundImage: `url("${slides[currentIndex].url}")`,
  };

  return (
    <div className="slides-div" style={sliderStyles}>
      <div>
        {slides.length > 1 && (
          <div onClick={goToPrevious} style={leftArrowStyles}>
            ❰
          </div>
        )}
        {slides.length > 1 && (
          <div onClick={goToNext} style={rightArrowStyles}>
            ❱
          </div>
        )}
      </div>
      <div className="slides" style={slideStylesWithBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle(slideIndex === currentIndex)} // Apply active style
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
