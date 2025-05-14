import React, { useRef, useState, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Education.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import HomeIcon from "../HomeIcon";
import { Event } from "@mui/icons-material";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover9" ref={ref} data-density="hard">
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
    ["קורסי עברית", "2"],
    ["קורס נתיב", "3"],
    ["תגלית", "4"],
    ['קורס השלמת בגרויות', "5"]
  ];
  const book = props.book;
  return (
    <div className="page" ref={ref}>
      <h1 class="header-page">{props.header}</h1>
      <div>
        {props.showMenu ? (
          <Table heading={heading} bodyy={bodyy} book={book} pageNum={"1"} setShowBook={props.setShowBook}/>
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
        <tr id="header-board12">{heading}</tr>
        <br />
        <br />
      </thead>
      <tbody>
        {bodyy.map((rowContent, rowID) => (
          <TableRow rowContent={rowContent} key={rowID} book={props.book} />
        ))}
      </tbody>
    </table>
    <span className="page-number">{props.pageNum}</span>
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
      <div style={{ direction: "rtl", padding: "7%", textAlign: "center", fontSize: "9vmin"}}>
       מטרת הקורס-חיזוק השליטה בשפה העברית
       <br />
       זכאות-חיילים עולים ובני מיעוטים בעלי סימול עברית 6 ומטה
       <br />
       החיילים יזומנו למבחן רמה אצל משקית החינוך. 
       <br />
       לאחר מכן, יזומן לאולפנית ברמה המתאימה לו.
       <br />
       משך הקורס-שלושה שבועות.
      </div>
      <img style={{ width: "25%", position: "relative", left: "50%",  transform: "translateX(-50%)"}} src="assets/hebrew.png" />
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
      <div style={{ direction: "rtl", padding: "7%", textAlign: "center", fontSize: "8vmin"}}>
       הזדמנות לחיילים שאינם יהודים להתגייר, וכן להעמיק את הידע בתחומי התרבות והמורשת של ישראל.
       <br />
       זכאות - חיילים שאינם יהודים.
       <br />
       יזומנו למבחן רמה אצל משקית חינוך.
       <br />
       משך הקורס-סגור-שבעה שבועות, פתוח-עשרה שבועות
       <br />
       קורס זה הינו מטכ"לי
      </div>
      <img style={{ width: "25%", position: "relative", left: "50%",  transform: "translateX(-50%)"}} src="assets/taglit.png" />
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
      <div style={{ direction: "rtl", padding: "7%", textAlign: "center", fontSize: "8vmin"}}>
       מטרת התגלית הינה חיזוק הזהות היהודית בקרב צעירי העם היהודי בתפוצות.
       <br />
      תנאי הקבלה הם-ותק של לפחות שנה בצבא, מקסימום הת"ש 2, שליטה בשפות הקבוצה, יחסי אנוש גבוהים, מוטיבציית שירות גבוהה, גאווה במדינה ובשירות.
       <br />
       מסע של 5-10 ימים.
      </div>
      <img style={{ width: "25%" }} src="assets/nativ.png" />
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
      <div style={{ direction: "rtl", padding: "4%", textAlign: "center", fontSize: "8vmin"}}>
      השלמת מקצועות לטובת קבלת בגרות מלאה.
       <br />
מי זכאי? חייל אשר חסר לו בגרות בשלושת המקצועות ביחד: מתמטיקה,אנגלית ועברית.
       <br />
בנוסף ישנו קורס השלמת בגרות פיקודית שהיא מתמקדת במקצוע יחיד:אנגלית או מתמטיקה.
<br />
לא תתאפשר כניסה לקורסים לחיילים אשר מעוניינים לשפר ציון. 
<br />
משך הקורס-5 חודשים
      </div>
      <img style={{ width: "20%" }} src="assets/study.png" />
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});


export default function Education(props) {
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
            <b id="header-book">חינוך</b>
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
            header="קורסי עברית"
            showPage={1}
            number="2"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="קורס נתיב"
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>

          <Page
            header="תגלית"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="קורס השלמת בגרויות"
            showPage={4}
            number="5"
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
