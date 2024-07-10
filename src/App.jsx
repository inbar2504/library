import React, { useRef, useState } from "react";

import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import HTMLFlipBook from "react-pageflip";
import MyBook from "./components/MyBook";

export default function App() {
  const [showBook, setShowBook] = useState(false);
  const bookClicked = (event) => {
    console.log(event.target.id);
    // document.getElementById(event.target.id).style.cssText = "width:300%;rotate:20deg;margin:-20%;margin-left: -30%";
    setShowBook(!showBook);
  };
  // function bookClicked(e) {
  //   console.log(e.currentTarget.getAttribute("id"));
  //   return(
  //     <MyBook />
  //   );
  // }
  return (
    <>

      <img src="src/assets/frame-books.png" id="top-books"/>
      <h1 id="header">ספריית השלישות</h1>
      {showBook?<MyBook />:" "}
  {!showBook?<Carousel 
        additionalTransfrom={0}
        // arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        // renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        class = "react-multiple-carousel__arrow"
      >
        <img
          onClick={bookClicked}
          id="book1"
          className="books"
          src="src\assets\tulip-img.png"
        />
        <img
          class="books"
          src="src\assets\brown-img.png"
        />
        <img
          class="books"
          src="src\assets\blue-img.png"
        />
        <img
          class="books"
          src="src\assets\bezh-img.png"
        />
        <img
          class="books"
          src="src\assets\dark-img.png"
        />
      </Carousel>:" "}
      

      <img src="src/assets/frame-books.png" id="bottom-books"/>
    </>
    
  );
}
