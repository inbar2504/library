import React, { useRef, useState, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Officer.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import HomeIcon from "../HomeIcon";
import { Event } from "@mui/icons-material";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover7" ref={ref} data-density="hard">
      <div>
        <button className="close-book" onClick={() => props.setShowBook(false)}>
          ✖
        </button>
        <img id="school-icon" src="assets/school-icon.png" />
        <div>{props.children}</div>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  const heading = ["כל המידע במרחק נגיעה", ""];
  const bodyy = [
    ["סוגי קצונה", "2"],
    ["מתאם לקצונה", "3"],
    ["תהליך מיון לקצונה", "4"],
    ["וועדת חריגים", "5"],
    ['וועדת ערעורים', "6"],
    ["קצונת מתנדבים", "7"],
  ];
  const book = props.book;
  return (
    <div className="page" ref={ref}>
      <h1 class="header-page">{props.header}</h1>
      <div>
        {props.showMenu ? (
          <Table heading={heading} bodyy={bodyy} book={book} />
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
         {props.showPage === 4 ? (
          <Information4
            book={book}
            pageNum={"5"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 5 ? (
          <Information5
            book={book}
            pageNum={"6"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 6 ? (
          <Information6
            book={book}
            pageNum={"7"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 7 ? (
          <Information7
            book={book}
            pageNum={"8"}
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
    <table>
      <thead>
        <tr id="header-board7">{heading}</tr>
        <br />
        <br />
      </thead>
      <tbody>
        {bodyy.map((rowContent, rowID) => (
          <TableRow rowContent={rowContent} key={rowID} book={props.book} />
        ))}
      </tbody>
    </table>
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

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});

const Information5 = React.forwardRef((props, ref) => {
  return (
    <div className="Information5" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>

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

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});

export default function Officer(props) {
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
            <b id="header-book">קצונה</b>
          </PageCover>
          <Page
            header="תוכן עניינים"
            id="page1"
            number="1"
            book={book}
            showMenu={true}
          ></Page>
          <Page
            header="סוגי קצונה"
            showPage={1}
            number="2"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="מתאם לקצונה"
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>

          <Page
            header="תהליך מיון לקצונה"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="וועדת חריגים"
            showPage={4}
            number="5"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="וועדת ערעורים"
            showPage={5}
            number="6"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="קצונת מתנדבים"
            showPage={6}
            number="7"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
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
