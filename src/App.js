import React, { useState, useEffect } from "react";
import imgData from "./data";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

const App = () => {
  const [current, setCurrent] = useState(0);
  const length = imgData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1);
      if (current === length - 1) {
        setCurrent(0);
      }
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [current]);
  return (
    <>
      <header>
        <h2>slider</h2>
        <div className="underline"></div>
      </header>
      <section>
        <BiLeftArrowCircle className="arrowLeft" onClick={prevSlide} />
        <BiRightArrowCircle className="arrowRight" onClick={nextSlide} />
        {imgData.map((image, index) => {
          const { id, img, name } = image;
          // console.log(index);
          // console.log(current);
          return (
            <div
              key={id}
              className={index === current ? "slide active" : "slide"} //adding class based on condition
            >
              {index === current && <img src={img} alt={name} />}
              {/* short circuit evaluation*/}
            </div>
          );
        })}
      </section>
    </>
  );
};
export default App;
