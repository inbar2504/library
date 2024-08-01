import React, { useRef, useState } from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MyBook from "./components/MyBook";
import InfoCommander from "./components/InfoCommander";

export default function App() {
  const [showBook, setShowBook] = useState(false);
  const [componentName, setComponentName] = useState("");
  const bookClicked = (event) => {
    setComponentName(event.target.getAttribute("id"));
    setShowBook(!showBook);
    console.log(componentName);
  };

  return (
    <>
      <img src="assets/frame-books.png" id="top-books" />
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
          minimumTouchDrag={70}
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
            src="assets/tuli-img.png"
          />
          <img
            className="books"
            id="book2"
            src="assets/brown-img.png"
            onClick={bookClicked}
          />
          <img className="books opacity-book" src="assets/blue-img.png" />
          <img className="books opacity-book" src="assets/bezh-img.png" />
          <img className="books opacity-book" src="assets/dark-img.png" />
        </Carousel>
      ) : (
        //   <img
        //   onClick={bookClicked}
        //   // id="book1"
        //   id="book-1-example"
        //   className="books"
        //   src="assets/tuli-img.png"
        // />
        " "
      )}

      <img src="assets/frame-books.png" id="bottom-books" />
      {showBook && componentName == "book1" ? (
        <MyBook setShowBook={setShowBook} />
      ) : (
        ""
      )}
      {showBook && componentName == "book2" ? (
        <InfoCommander setShowBook={setShowBook} />
      ) : (
        ""
      )}
    </>
  );
}
