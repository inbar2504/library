import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MyBook from "./components/MyBook";
import Specials from "./components/specials/Specials";
import InfoCommander from "./components/InfoCommander";
import Segel from "./components/Segel/Segel";
import Officer from "./components/Officer/Officer";

export default function App() {
  const [showBook, setShowBook] = useState(false);
  const [componentName, setComponentName] = useState("");
  const bookClicked = (event) => {
    setComponentName(event.target.getAttribute("id"));
    setShowBook(!showBook);
  };

  useEffect(() => {
    const ua = navigator.userAgent;

const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|FxiOS/.test(ua);
const historyLength = window.history.lenght;

    const params = new URLSearchParams(window.location.search);
    const cleaned = params.get("prod");
    const hasHistory = isSafari ? historyLength > 2 : historyLength > 1;
    // const hasHistory = window.history.length > 1;

    if (!cleaned || hasHistory) {
      Swal.fire({
        title: "ברוכים הבאים לספריית השלישות של בית הספר לכוחות אוויר מיוחדים!",
        text: "הספרייה תלווה אותך מרגע הגעתך ועד שחרורך",
        confirmButtonText: "התחלה",
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
          title: "swal-title",
          htmlContainer: "swal-text",
          confirmButton: "swal-confirm-button",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          params.set("prod", "1");
          const newUrl = `${window.location.pathname}?${params.toString()}`;

          // Open new tab
          window.open(newUrl, "_blank");

          // Remove history in current tab
          window.location.replace(window.location.pathname);
        }
      });
    }
  }, []);

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
            src="assets/bordo-img1.png"
          />
          <img
            className="books"
            id="book2"
            src="assets/brown-img1.png"
            onClick={bookClicked}
          />
          <img
            className="books"
            id="book4"
            onClick={bookClicked}
            src="assets/blue-img1.png"
          />
          <img
            className="books"
            id="book5"
            onClick={bookClicked}
            src="assets/bezh-img1.png"
          />
          <img
            className="books"
            id="book6"
            src="assets/dark-img1.png"
            onClick={bookClicked}
          />
           <img
            className="books"
            id="book7"
            onClick={bookClicked}
            src="assets/tuli-img1.png"
          />
           <img
            className="books"
            id="book8"
            onClick={bookClicked}
            src="assets/cyan-img1.png"
          />
           <img
            className="books"
            id="book9"
            onClick={bookClicked}
            src="assets/pink-img1.png"
          />
        </Carousel>
      ) : (
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
      {showBook && componentName == "book4" ? (
        <Officer setShowBook={setShowBook} />
      ) : (
        ""
      )}
      {showBook && componentName == "book5" ? (
        <Segel setShowBook={setShowBook} />
      ) : (
        ""
      )}
      {showBook && componentName == "book6" ? (
        <Specials setShowBook={setShowBook} />
      ) : (
        ""
      )}
       {showBook && componentName == "book7" ? (
        <Specials setShowBook={setShowBook} />
      ) : (
        ""
      )}
       {showBook && componentName == "book8" ? (
        <Specials setShowBook={setShowBook} />
      ) : (
        ""
      )}
       {showBook && componentName == "book9" ? (
        <Specials setShowBook={setShowBook} />
      ) : (
        ""
      )}
    </>
  );
}
