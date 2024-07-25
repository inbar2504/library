import React, { useRef, useState } from "react";

import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MyBook from "./components/MyBook";

export default function App() {
  const [showBook, setShowBook] = useState(false);
  const bookClicked = (event) => {
    setShowBook(!showBook);
  };

  return (
    <>
      <img src="src/assets/frame-books.png" id="top-books" />
      <h1 id="header">ספריית השלישות</h1>
      {!showBook ? (
        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
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
        >
          <img
            onClick={bookClicked}
            id="book1"
            className="books"
            src="src\assets\tuli-img.png"
          />
          <img className="books" src="src\assets\brown-img.png" />
          <img className="books" src="src\assets\blue-img.png" />
          <img className="books" src="src\assets\bezh-img.png" />
          <img className="books" src="src\assets\dark-img.png" />
        </Carousel>
      ) : (
        " "
      )}

      <img src="src/assets/frame-books.png" id="bottom-books" />
      {showBook ? <MyBook setShowBook={setShowBook} /> : ""}
    </>
  );
}