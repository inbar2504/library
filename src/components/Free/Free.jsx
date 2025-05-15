import React, { useRef, useState, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Free.css";
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
    ["זכויות לוחמים", "2"],
    ["כרטיס מועדון בהצדעה", "3"],
    ["מענק למשתחרר", "4"],
    ['פיקדון אישי', "5"],
    ["״ממדים ללימודים״", "6"],
    ["טלפונים לנחיתה רכה באזרחות", "9"]
    // ["״ממדים ללימודים״", "8"]
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
        <tr id="header-board9">{heading}</tr>
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
  function btnzClick(props) {
    document.getElementById(props).style.display = "block";
  }

  return (
    <div className="Information1" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>

      <div className="flex-container5">
      
      {/* <span id="press-5">לחצו כדי לגלות מה עליכם לעשות ב </span><br /> */}
    <button className="app-sub-o" onClick={() => btnzClick("o1")}>
 תעודת שחרור כללית
    </button>
    <button className="app-sub-o" onClick={() => btnzClick("o2")}>
          תעודת זהב
    </button>
    <button className="app-sub-o" onClick={() => btnzClick("o3")}>
      תעודת כסף
    </button>
    <button className="app-sub-o" onClick={() => btnzClick("o4")}>
    תעודת ארד
    </button>
    <button className="app-sub-o" onClick={() => btnzClick("o5")}>
 תעודת שחרור בכבוד
    </button>
    </div>
    <div id="o1">
      <button
        className="close-window2"
        onClick={() =>
          (document.getElementById("o1").style.display = "none")
        }
      >
        ✖
      </button>
      תעודת שחרור כללית- מוענקת לכל חייל אשר סיים 85% משירות החובה עפ”י החוק (28 חודשי שירות -למי שמשרת שנתיים ושמונה חודשים).

    </div>
    <div id="o2">
      <button
        className="close-window2"
        onClick={() =>
          (document.getElementById("o2").style.display = "none")
        }
      >
        ✖
      </button>
      תעודת זהב- לוחם שצבר לפחות 75% משירתו כלוחם (24 חודשי לחימה -לא כולל טירונות).
    </div>
    <div id="o3">
      <button
        className="close-window2"
        onClick={() =>
          (document.getElementById("o3").style.display = "none")
        }
      >
        ✖
      </button>
      תעודת כסף- זכאי משרת תומכ”ל בצבר לפחות 85% משירותו הצבאי כתומך לחימה (28 חודשי שירות) או 65% משירותו הצבאי כלוחם (לא כולל טירונות).
    </div>
    <div id="o4">
      <button
        className="close-window2"
        onClick={() =>
          (document.getElementById("o4").style.display = "none")
        }
      >
        ✖
      </button>
      תעודת ארד- כלל המשרתים שאינם עומדים בקריטריונים של תעודת כסף\זהב.
    </div> 
    <div id="o5">
      <button
        className="close-window2"
        onClick={() =>
          (document.getElementById("o5").style.display = "none")
        }
      >
        ✖
      </button>
      זכאות לתעודת שחרור “בכבוד”-
זכאות לשחרור בכבוד נקבע בהתאם לאחוזי השירות הפעיל שביצע המשרת ביחס למשך השירות שלו.
    </div> 
    <div style={{ direction: "rtl", padding: "7%", textAlign: "center", fontSize: "7vmin"}}>שימו ♥ כי את כלל התעודות ניתן למצוא באפליקציית ״הארנק הדיגיטלי״</div>
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
      <div style={{ direction: "rtl", padding: "7%", textAlign: "center", fontSize: "7vmin"}}>
      כרטיס מועדון של רשת "מקס" אשר מציע למשתחררים "בכבוד" משירות הסדיר ומשרתי מילואים מספר רב של הטבות בתחומי בילוי, פנאי, הנחות ומגוון מבצעים.
<br />
ניתן להזמין את הכרטיס באופן אינטרנטי באתר "בהצדעה" והכרטיס יגיע עד לביתך.
<br />
הכרטיס תקף עד 3 שנים ממועד השחרור.

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
      <div style={{ direction: "rtl", padding: "5%", textAlign: "center", fontSize: "6.5vmin"}}>
      מענק שחרור משירות הסדיר-
      <br />
מענק השחרור מועבר ישירות לחשבון הבנק אליו הועברה המשכורת בשירותכם, תוך 60 ימים.
<br />
המענק זמין לכל שימוש שתבחרו, על פי רצונכם.
<br />
גובה המענק נקבע על פי משך השירות וסוג השירות.
<br />
תקופת הזכאות מחושבת לפי מספר החודשים בהם שירתם בפועל בשירות חובה.
<br />
לוחמים מקבלים פר חודש- 575.29₪
<br />
תומכי לחימה מקבלים פר חודש- 479.07₪
<br />
תפקיד אחר / שירות לאומי מקבלים פר חודש- 287.32₪
<br />
בכדי לחשב את סכום מענק השחרור שלך, עליך להכפיל את הסכום הרלוונטי לסוג שירותך במספר החודשים ששירתת ובכך תדע את סכום המענק שלו אתה זכאי.
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
      <div style={{ direction: "rtl", padding: "5%", textAlign: "center", fontSize: "6.5vmin"}}>
      הפיקדון האישי הינו סכום כספי העומד לרשותכם כדי לסייע לכם
בתחילת חייכם באזרחות.
בשונה ממענק השחרור, את כספי הפיקדון האישי ניתן למשוך מהיום ה-14 מסיום שירות לאומי-אזרחי, לטובת 6 מטרות (יפורטו בעמוד הבא).
לאחר 5 שנים ממועד השירות תוכל לממש את כספי הפיקדון לכל
מטרה ויתרת הפיקדון לכל מטרה ויתרת הפקדון תעבור לחשבון הבנק
שלכם כפי שהוזן במערכת טרם שחרורכם.
<br />
לוחמים מקבלים פר חודש- 831.95₪
<br />
תומכי לחימה מקבלים פר חודש- 693.29₪
<br />
תפקיד אחר / שירות לאומי מקבלים פר חודש- 554.63₪
<br />
בכדי לחשב את סכום הפיקדון האישי שלך, עליך להכפיל את הסכום הרלוונטי לסוג שירותך במספר החודשים ששירתת ובכך תדע את סכום המענק שלו אתה זכאי.
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
      <div style={{ direction: "rtl", padding: "5%", textAlign: "center", fontSize: "8vmin"}}>
      כלל החיילים מהאוכלוסיות הבאות- 
      זכאי תשמ״ש, הורים, חיילים בודדים, עולים חדשים ובני מיעוטים.
<br />
3 שנות לימוד באוניברסיטאות 
(הנדסה ורפואה- 4 שנות לימוד)
<br />
זכאות לוחמים- 
שחרור בכבוד (תעודת זהב) 
רמת התנהגות- ראויה לציון/טובה מאוד 
<br />
1/3- מימין ע״ח פיקדון החייל 
2/3- מימון ע״ח המערכת
<br />
גיוס יולי 2013 ואלך 
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
      <div style={{ direction: "rtl", padding: "5%", textAlign: "center", fontSize: "8vmin"}}>
      
      שימו לב,
ההטבה לכל שנה וסה”כ עבור 3 שנות לימוד בלבד, למעט לימודי הנדסה ורפואה, אשר ימומנו עבור 4 שנות לימוד. 
משרתים בעלי תואר ראשון, העומדים בתנאי הזכאות לתכנית, זכאים למימון תועד שני עבור 2 שנות לימוד בלבד.
הזכאות הינה למשך 3 שנים מיום השחרור משירות החובה ועד לסוף השנה הקלנדרית (31.12) השלישית לשחרור, בתנאי שסיום הלימודים לתואר יושלם תוך 5 שנים מתחילת הלימודים.
     </div>
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
      <div style={{ direction: "rtl", padding: "5%", textAlign: "center", fontSize: "6.5vmin"}}>
      הירשמות למוסד לימוד- על מנת להירשם לאחד ממוסדות הלימוד האקדמאים, עליך להיכנס לרשימת המוסדות המוכרים ע”י המועצה
להשכלה גבוהה.
יש להיכנס ל”איזור אישי” ולבחור בנושא “מלגות”
יש לבדוק האם שמכם מופיע ברשימת המלגות המועצות בעמוד. אם לא- יש לפנות לקפ”צ בטלפון!
להרשמה, בחרו מרשימת המלגות במלגת תכנית “ממדים ללימודים” יש למלא באופן מדויק את כלל הפרטים הנדרשים! פנו למוסד הלימודים אליו נרשמתם ובקשו את גיליון התשלומים או הקבלות, אותם עליכם לשלוח במייל. ללא אישור זה לא תטופל הבקשה.
לאחר ההירשמות האגף והקרן לחיילים משוחררים יבצעו את בדיקת חישוב התשלום והזיכוי יועבר לחשבון הפיקדון שלכם.

      </div>
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
      <div style={{ direction: "rtl", padding: "5%", textAlign: "center", fontSize: "6.5vmin"}}>
      המוסד לביטוח לאומי
      מוקד טלפוני ארצי- 
      <br />
      *6050 
      <br />
      04-8812345
      <br />
      <br />
      קופות חולים ממשלתיות- 
        <br />
        כללית- *2700 או 03-9405350
        <br />
        מכבי- *3555

        <br />
        מאוחדת- 04-9107238

        <br />
        לאומית- 1-700-507-507 או *507
    </div>
    <img style={{ width: "100%", position: "relative", left: "50%",  transform: "translateX(-50%)", marginTop: "-10vh"}} src="assets/phone.png" />
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
export default function Free(props) {
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
            <b id="header-book">מידעון למשתחרר</b>
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
            header="זכויות לוחמים"
            showPage={1}
            number="2"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header='כרטיס מועדון בהצדעה'
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>

          <Page
            header="מענק למשתחרר"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="פיקדון אישי"
            showPage={4}
            number="5"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="״ממדים ללימודים״"
            showPage={5}
            number="6"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="״ממדים ללימודים״"
            showPage={6}
            number="7"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
           <Page
            header="״ממדים ללימודים״"
            showPage={7}
            number="8"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
            <Page
            header="טלפונים לנחיתה רכה באזרחות"
            showPage={8}
            number="9"
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
