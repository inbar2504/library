import React, { useRef, useState, Component } from "react";
import HomeIcon from "../HomeIcon";
import { Event } from "@mui/icons-material";
import "./Specials.css";
import HTMLFlipBook from "react-pageflip";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover6" ref={ref} data-density="hard">
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
  // const list=["חדר כושר",'חד"א',"בריכה","נהלי יחידה",'שק"ם','יוהל"ם',"טלפונים חשובים",'ת"ש',"היסעים","תורנויות","רפואה","שלישות"];
  const heading = ["כל המידע במרחק נגיעה", ""];
  const bodyy = [
    ["מיוחדת אישית", "2"],
    ["מיוחדת לצורך לימודים", "3"],
    ["מיוחדת מעבר דירה", "4"],
    ['מיוחדת ביקור קרוב מחו"ל', "5"],
    ["מיוחדת ביקור קרוב בחול (בודד)", "6"],
    ["מיוחדת כלכלית", "7"],
    ["אישורים נדרשים למיוחדת כלכלית", "8"],
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
        <tr id="header-board6">{heading}</tr>
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
          <button className="btns6">{val}</button>
        </td>
      ))}
    </tr>
  );
});
const Information1 = React.forwardRef((props, ref) => {
  const book = props.book;

  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p className="text-p">חופשה לאור בעיה אישית/סוציאלית/חריגה</p>
      <p className="text-p">
        <span className="special-header">משך זכאות</span>
        <br />
        עד 40 ימים בשנת שירות (אותו סל של כלכלית)
      </p>
      
      <img className="images-specials" src="assets/specials/behaviour.png" />
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information2 = React.forwardRef((props, ref) => {
  const book = props.book;
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      
      <p className="text-p">חופשה לאור היערכות לבחינת בגרות/פסיכומטרי/בחינות קבלה נוספות</p>
      <p className="text-p">
        <span className="special-header">משך זכאות</span><br />
        עד ארבעה ימים עבור כל בחינה
      </p>
      <img className="images-specials" src="assets/specials/test.png" />
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information3 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      

      <p className="text-p">חופשה לחייל בודד/נשוי אשר עובר/מחפש דירה</p>
      <p className="text-p">
        <span className="special-header">משך זכאות</span><br />
       יומיים בשנת שירות
      </p>
      <img className="images-specials" src="assets/specials/open-box.png" />
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information4 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     

      <p className="text-p">חופשה לחייל אשר אחד מהוריו /בן זוגו מתגורר בחו"ל</p>
      <p className="text-p">
        <span className="special-header">משך זכאות</span><br />
      עשרים ואחת ימים במצטבר בשנת שירות
      </p>
      <img className="images-specials" src="assets/specials/ticket-flight.png" />
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});

const Information5 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     

      <p className="text-p">חופשה לחייל בודד אשר קרוביו מדרגה ראשונה מתוררים בחו"ל</p>
      <p className="text-p">
        <span className="special-header">משך זכאות</span><br />
     שלושים ימים במצטבר בשנת שירות
      </p>
      <img className="images-specials" src="assets/specials/airplane.png" />
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
    

      <p className="text-p">חופשה לאור מצוקה כלכלית על מנת שהחייל יצא לעבוד</p>
      <p className="text-p">
        <span className="special-header">משך זכאות</span>
        <br />
        עד 40 ימים בשנת שירות (אותו סל של אישית)
      </p>
      <img className="images-specials" src="assets/specials/financial.png" />
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information7 = React.forwardRef((props, ref) => {
  const book = props.book;

  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <ul className="text-p1" type="circle">
        <li>עובר ושב של החייל וההורים-שלושה חודשים אחרונים</li>
        <li>פירוט כרטיסי אשראי של החייל וההורים-שלושה חודשים אחרונים </li>
        <li>ריכוז יתרות של החייל וההורים</li>
        <li>מכתב אישי</li>
        <li>אישור מפקד</li>
        <li>אישורים על חובות</li>
        <li>היתר עבודה בתוקף</li>
        <li>זכאי לתשמש ואחיהם זכאים לתש כלכלי ואינם נדרשים לאישורים כלכליים</li>
      </ul>
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
export default function Specials(props) {
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
            <b id="header-book">מיוחדות ממשרד הת"ש</b>
          </PageCover>
          <Page
            header="תוכן עניינים"
            id="page1"
            number="1"
            book={book}
            showMenu={true}
          ></Page>
          <Page
            header="מיוחדת אישית"
            showPage={1}
            number="2"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            
            header="מיוחדת לצורך לימודים"
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>

          <Page
            
            header="מיוחדת מעבר דירה"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            
            header='מיוחדת ביקור קרוב מחו"ל'
            showPage={4}
            number="5"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header='מיוחדת ביקור קרוב בחו"ל (בודד)'
            showPage={5}
            number="6"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="מיוחדת כלכלית"
            showPage={6}
            number="7"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="אישורים נדרשים למיוחדת כלכלית"
            showPage={7}
            number="8"
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
