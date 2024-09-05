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
        <img id="school-icon" src="assets/school-icon1.png" />
        <div>{props.children}</div>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  const heading = ["כל המידע במרחק נגיעה", ""];
  const bodyy = [
    ["סוגי קצונה", "2"],
    ["תהליך מיון לקצונה", "3"],
    ["וועדת חריגים", "4"],
    ['וועדת ערעורים', "5"],
    ["קצונת מתנדבים", "6"],
    ["מתאם קצונה", "7"]
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
         {props.showPage === 8 ? (
          <Information8
            book={book}
            pageNum={"9"}
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
      <div>
        <div className="lohama-info">קצונת לוחמה: מגמת להב + השלמת גפן/השלמת אתגר </div>
        <div className="lohama-info">קצונת תומכלים: מגמת מעוז / נחשון + השלמה חיילית לפי המערך</div>
        <div className="lohama-info">קצונת מתנדבים: מגמת נבו / השלמה חיילית לפי המערך</div>
      </div>
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
      <div>
        <div className="miun-info" id="level1">שלב 1 - כנס הסברה</div>
        <div className="miun-info" id="level2">שלב 2 -שאלונים ממוחשבים</div>
        <div className="miun-info" id="level3">שלב 3 - סדרת מיון</div>
        <div className="miun-info" id="level4">שלב 4 - וועדה חיילית</div>
        <div className="miun-info" id="level5">שלב 5 -סדרת יסודות</div>
        <div className="miun-info" id="level6">שלב 6 - וועדת צרכים</div>
        <div className="miun-info" id="level7">שלב 7 - לבה"ד</div>
        <div className="miun-info" id="level8">שלב 8 - השלמה</div>
      </div>
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
      <div className="text">
        <p>אל וועדה זו עולים כל החיילים אשר לא מתאימים לקצונה מבחינת המתאם,פז"ם וכל מי שלא עבר שלב בחינה כלשהו אשר מעוניין לנסות ולעברו בשנית</p>
        <span id="blue-background">בכדי לעלות לוועדה נדרש-</span>
        <p className="blue-text">חווד מפקד ישיר + מפקד גף/מפקד יחידה</p>
        <p className="blue-text">סיכום רעיון סא"ל - מפקד היחידה</p>
        <p className="blue-text">מכתב אישי של החיל- החייל מפרט על רצונות לצאת לקצונה</p>
        <p className="blue-text">טופס 102 מהמרפאה - אישור יציאה לקק"צ מבחינה רפואית (מתנדבים)</p>
      </div>
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
      <div className="text">
        <p>וועדה זו מיועדת למי שעבר את שלבי המיון אך בוועדה החיילית הוחלט כי אינו מתאים לצאת לקצונה או נפל אחד השלבים שלאחר היום עיון. על מנת לעלות לוועדה נדרש-</p>
        <p className="blue-background">סיכום ראיון סא"ל + חווד מפקד יחידה</p>
        <p className="blue-background">מכתב אישי-במכתב זה החייל יפרט על רצונו לצאת לקצונה</p>

      </div>
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
      <div className="text1">
        <span>על מנת שחייל יתחיל את תהליך המיון לקצונה עליו להפיק טופס 102 שרק רופא אזרחי ומדור מתנדבים יכולים להפיק<br /> על מנת להפיק טופס זה נדרש מהחייל להביא אישור מרופאו האזרחי על כשירותו לבצע קק"צ או מצבו הרפואי<br /> בנוסף לכך על החייל לכתוב מכתב אישי בו הוא מביע את רצונו לצאת לקצונה. לאחר מכן נדרש להעביר את אישורים אלו למדור לקצונה</span>
        <br /><br /><br />
      <img id="kazhin-img" src="./assets/kazhin.png"/>
      </div>
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
      <table className="table-officer">
        <tr>
          <th className="td1">סוגי מתאם</th>
          <th className="td1">הסבר</th>
        </tr>
        <tr>
          <td className="td1">3</td>
          <td className="td1">התאמה גבוהה מאוד לקצונה</td>
        </tr>
        <tr>
          <td className="td1">2</td>
          <td className="td1">התאמה גבוהה לקצונה</td>
        </tr>
        <tr>
          <td className="td1">1</td>
          <td className="td1">עובר סף בצה"ל אך נדרש וועדת חריגים בחה"א עקב איתור גבוה יותר</td>
        </tr>
        <tr>
          <td className="td1">ג</td>
          <td className="td1">חריג קצונה</td>
        </tr>
        <tr>
          <td className="td1">ב</td>
          <td className="td1">חריג קצונה מטכל"י</td>
        </tr>
        <tr>
          <td className="td1">א</td>
          <td className="td1">חריג קצונה מטכל"י מובהק</td>
        </tr>
        <tr>
          <td className="td1">0</td>
          <td className="td1">נתונים טרם נקבעו</td>
        </tr>
      
      </table>
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
            setShowBook={props.setShowBook}
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
            header="תהליך מיון לקצונה"
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>

          <Page
            header="וועדת חריגים"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="וועדת ערעורים"
            showPage={4}
            number="5"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="קצונת מתנדבים"
            showPage={5}
            number="6"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="מתאם לקצונה"
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
