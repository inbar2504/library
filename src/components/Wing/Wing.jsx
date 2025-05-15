import React, { useRef, useState, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Wing.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import HomeIcon from "../HomeIcon";
import { Event } from "@mui/icons-material";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover8" ref={ref} data-density="hard">
      <div>
        <button className="close-book" onClick={() => props.setShowBook(false)}>
          ✖
        </button>
        <img id="school-icon" src="assets/school-icon1.png" />
        <div>{props.children}</div>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  const heading = ["כל המידע במרחק נגיעה", ""];
  const bodyy = [
    ["חיל האוויר", "2"],
    ["כנף 7", "3"]
    // ["נופלי היחידות", "4"]
  ];
  const book = props.book;
  return (
    <div className="page" ref={ref}>
      <h1 class="header-page">{props.header}</h1>
      <div>
        {props.showMenu ? (
          <Table heading={heading} bodyy={bodyy} book={book} setShowBook={props.setShowBook}/>
        ) : (
          ""
        )}
        {props.showPage === 1 ? (
          <Information1
            book={book}
            pageNum={"2"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 2 ? (
          <Information2
            book={book}
            pageNum={"3"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 3 ? (
          <Information3
            book={book}
            pageNum={"4"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
         
      </div>
    </div>
  );
});
const Table = React.forwardRef((props, ref) => {
  const heading = props.heading;
  const bodyy = props.bodyy;

  return (
   <div>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
    ✖
  </button>
  <table>
      <thead>
        <tr id="header-board8">{heading}</tr>
        <br />
        <br />
      </thead>
      <tbody>
        {bodyy.map((rowContent, rowID) => (
          <TableRow rowContent={rowContent} key={rowID} book={props.book} />
        ))}
      </tbody>
    </table>
    <span className="page-number">1</span>
   </div>
    
  );
});
const TableRow = React.forwardRef((props, ref) => {
  const row = props.rowContent;
  const book = props.book;

  return (
    <tr>
      {row.map((val, rowID) => (
        <td
          key={rowID}
          onClick={() => props.book.current.pageFlip().flip(Number(row[1]))}
        >
          <button className="btns7">{val}</button>
        </td>
      ))}
    </tr>
  );
});
const Information1 = React.forwardRef((props, ref) => {
  const book = props.book;

  return (
    <div className="Information1" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     <div style={{ fontSize: "8vmin",textAlign: "center", padding: "7%",direction :"rtl" }}>חיל האוויר הישראלי שומר על שמי המדינה– בשקט, בדיוק ובמהירות.
        עם מטוסי קרב מתקדמים וטכנולוגיה מהשורה הראשונה, הוא מכה עוד לפני שהאויב קולט. 
        הוא לא רק תוקף– גם מציל, מגלה, מגן, ומספק עיניים לצה"ל מכל כיוון.
        </div>
        <img style={{ width: "25%", position: "relative", left: "50%",  transform: "translateX(-50%)"}} src="assets/IAF.png" />
        

      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information2 = React.forwardRef((props, ref) => {
  const book = props.book;
  return (
    <div className="Information2" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <div style={{ fontSize: "8vmin",textAlign: "center", padding: "7%",direction :"rtl" }}>
      כנף 7 היא כנף כוחות האוויר המיוחדים של חיל האוויר. 
      הכנף כוללת בתוכה את ביה"ס לכא"מ, ואת היחידות- שלדג,669,יה"ק וSOI.
      ביה"ס אמון על הכשרת הלוחמים במסלולים השונים
      </div>
      <img style={{ width: "25%", position: "relative", left: "50%",  transform: "translateX(-50%)"}} src="assets/kanaf7.png" />
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information3 = React.forwardRef((props, ref) => {
  return (
    <div className="Information3" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information4 = React.forwardRef((props, ref) => {
  return (
    <div className="Information4" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      
    
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});

const Information5 = React.forwardRef((props, ref) => {
  return (
    <div className="Information4" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information6 = React.forwardRef((props, ref) => {
  return (
    <div className="Information6" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information7 = React.forwardRef((props, ref) => {
  return (
    <div className="Information7" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information8 = React.forwardRef((props, ref) => {
  return (
    <div className="Information8" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     
    
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
export default function Wing(props) {
  const book = useRef();

  return (
    <>
      <div className="book-container">
        <HTMLFlipBook
          width={550}
          height={850}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={520}
          maxHeight={1350}
          showCover={true}
          flippingTime={1000}
          style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          drawShadow={true}
          ref={book}
          className={"open-book"}
          mobileScrollSupport={true}
        >
          <PageCover setShowBook={props.setShowBook} book={book}>
            <b id="header-book">רוח הכנף</b>
          </PageCover>
          <Page
            header="תוכן עניינים"
            id="page1"
            number="1"
            book={book}
            showMenu={true}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="חיל האוויר"
            showPage={1}
            number="2"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="כנף 7"
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>

          {/* <Page
            header="נופלי היחידות"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          */}
          <PageCover setShowBook={props.setShowBook} book={book}>
            <h2 className="the-end">הסוף</h2>
          </PageCover>
        </HTMLFlipBook>

        <br></br>
        <br></br>
      </div>
    </>
  );
}
