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
  const heading = ["כל המידע במרחק נגיעה", ""];
  const bodyy = [
    ["מיוחדת אישית", "2"],
    ["מיוחדת לצורך לימודים", "3"],
    ["מיוחדת מעבר דירה", "4"],
    ['מיוחדת ביקור קרוב מחו"ל', "5"],
    ["מיוחדת ביקור קרוב בחול (בודד)", "6"],
    ["מיוחדת כלכלית", "7"],
    ["אישורים נדרשים למיוחדת כלכלית", "8"],
    ["זכאויות לחייל הנשוי", "9"],
    ["מיוחדות לחייל הנשוי","10"],
    ['תשמ"ש לחייל הנשוי',"11"],
    ['מתי תיכנס כל הטבה',"12"],
    ["ימי סידורים לחיילי סדיר","13"],
    ["בתי החייל","14"]
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
        {props.showPage === 8 ? (
          <Information8
            book={book}
            pageNum={"9"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 9 ? (
          <Information9
            book={book}
            pageNum={"10"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
         {props.showPage === 10 ? (
          <Information10
            book={book}
            pageNum={"11"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
         {props.showPage === 11 ? (
          <Information11
            book={book}
            pageNum={"12"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 12 ? (
          <Information12
            book={book}
            pageNum={"13"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
          {props.showPage === 13 ? (
          <Information13
            book={book}
            pageNum={"14"}
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

      <p className="text-p">
        חופשה לאור היערכות לבחינת בגרות/פסיכומטרי/בחינות קבלה נוספות
      </p>
      <p className="text-p">
        <span className="special-header">משך זכאות</span>
        <br />
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
        <span className="special-header">משך זכאות</span>
        <br />
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
        <span className="special-header">משך זכאות</span>
        <br />
        עשרים ואחת ימים במצטבר בשנת שירות
      </p>
      <img
        className="images-specials"
        src="assets/specials/ticket-flight.png"
      />
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

      <p className="text-p">
        חופשה לחייל בודד אשר קרוביו מדרגה ראשונה מתוררים בחו"ל
      </p>
      <p className="text-p">
        <span className="special-header">משך זכאות</span>
        <br />
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
      <ul className="text-p1">
        <li>עובר ושב של החייל וההורים</li>
        <li>פירוט כרטיסי אשראי של החייל וההורים-שלושה חודשים אחרונים </li>
        <li>מכתב אישי</li>
        <li>אישור מפקד</li>
        <li>אישורים על חובות</li>
      </ul>
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information8 = React.forwardRef((props, ref) => {
  const book = props.book;
  function btnzClick(props) {
    console.log(props);
    document.getElementById(`num-${props}`).style.display = "block";
  }
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     
  
      <div className="btns-div">
        <span className="font-header2">
          בלחיצה על הכפתורים יופיע פירוט
        </span>
        <button className="btnz" id="one" onClick={() => btnzClick("one")}>
          מענק נישואין
        </button>
        <button className="btnz" id="two" onClick={() => btnzClick("two")}>
          יום סידורים
        </button>
        <button className="btnz" id="three" onClick={() => btnzClick("three")}>
          מענק לידה
        </button>
        <button className="btnz" id="four" onClick={() => btnzClick("four")}>
          הא"ד 100%
        </button>
        <button className="btnz" id="five" onClick={() => btnzClick("five")}>
          הא"ד 50%
        </button>
        <button className="btnz" id="six" onClick={() => btnzClick("six")}>
          שכ"ד
        </button>
        <button className="btnz" id="seven" onClick={() => btnzClick("seven")}>
          ראיון או"ם
        </button>
        <button className="btnz" id="eight" onClick={() => btnzClick("eight")}>
          הת"ש 3
        </button>
        <button className="btnz" id="nine" onClick={() => btnzClick("nine")}>
          תווים בחוגר
        </button>
      </div>

      <div id="num-one">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-one").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מענק נישואין-</b>
        <br />
        <span>
          המענק נכנס אוטומטית לחשבון הבנק של החייל לאחר עדכון מצבו המשפחתי במשרד
          הפנים והתממשקות לתיק האישי
        </span>
      </div>

      <div id="num-two">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-two").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-יום סידורים-</b>
        <br />
        <span>
          זכאות אחת לחודש בהכשרה ואחת לחודשיים בסדיר . יום הסידורים יהיה 24 שעות
          ,החייל ישוחרר יום לפניי ויחזור יום אחריי
        </span>
      </div>

      <div id="num-three">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-three").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מענק לידה-</b>
        <br />
        <span>
          מענק חד פעמי בגובה שכר טוראי
          <br />
          יש לוודא שהילד/ה מוזנים בתיק אישי מול משרד המשא"ן
        </span>
      </div>

      <div id="num-four">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-four").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-הא"ד 100%-</b>
        <br />
        <span>
          חייל שבבעלותו דירה על שמו, עליה לא משלם משכנתא ולא משכיר דירה אחרת,
          יהיה זכאי ל100% הא"ד ע"ס 317.6 ש"ח
          <br />
          יש לוודא שהילד/ה מוזנים בתיק אישי מול משרד המשא"ן
        </span>
      </div>

      <div id="num-five">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-five").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-הא"ד 50%-</b>
        <br />
        <span>
          בעת עדכון הסטטוס נשוי במשרד הפנים, חייל יהיה זכאי ל50% הא"ד באופן
          אוטומטי ע"ס 158.8 ש"ח
        </span>
      </div>
      <div id="num-six">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-six").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-שכ"ד-</b>
        <br />
        <span>
          חייל נשוי שמשלם שכ"ד ולא זכאי לתשמ"ש, יהיה זכאי לשכ"ד ע"ס 795 ש"ח
          <br />
          חייל נשוי + ילד יוכל לקבל תשמ"ש+ 50% שכ"ד ע"ס 397.5 ש"ח
        </span>
      </div>
      <div id="num-seven">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-seven").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-ראיון או"ם-</b>
        <br />
        <span>
        ראיון או"ם יובצע על ידי המפקד של החייל אחת לחצי שנה
       
        </span>
      </div>
      <div id="num-eight">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-eight").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-הת"ש 3-</b>
        <br />
        <span>
      אב לילד יהיה זכאי להת"ש 3 מטכלי
       
        </span>
      </div>
      <div id="num-nine">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("num-nine").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-תווים לחוגר-</b>
        <br />
        <span>
     חייל נשוי, זכאי תשמ"ש ברמ"פ א ומעלה, יהיה זכאי לתווים אוטומטים בחוגר ע"ס 150 ש"ח
       
        </span>
      </div>
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information9 = React.forwardRef((props, ref) => {
  const book = props.book;
  function btnzClick(props) {
    document.getElementById(`number-${props}`).style.display = "block";
  }
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     

      <div className="btns-div">
        <span className="font-header2">
          בלחיצה על הכפתורים יופיע פירוט
        </span>
        <button className="btnz" id="one" onClick={() => btnzClick("one")}>
          מיוחדת נישואין
        </button>
        <button className="btnz" id="two" onClick={() => btnzClick("two")}>
          מיוחדת הריון
        </button>
        <button className="btnz" id="three" onClick={() => btnzClick("three")}>
          מיוחדת לידה/ אימוץ
        </button>
        <button className="btnz" id="four" onClick={() => btnzClick("four")}>
         מיוחדת טיפולי פוריות
        </button>
        <button className="btnz" id="five" onClick={() => btnzClick("five")}>
         מיוחדת מחלת ילד
        </button>
        <button className="btnz" id="six" onClick={() => btnzClick("six")}>
          מיוחדת מחלת ילד -ממארת
        </button>
      </div>

      <div id="number-one">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number-one").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מיוחדת נישואין-</b>
        <br />
        <span>
          10 ימים
          <br />
       ניתן לנצל חודש לפני מועד הנישואין ועד עשרה ימים אחריו
       <br />
       יום הנישואין יהיה כחלק מעשרת ימי המיוחדת
        </span>
      </div>

      <div id="number-two">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number-two").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מיוחדת הריון-</b>
        <br />
        <span>
          7 ימים
          <br />
         לצורך בדיקות וטיפולים הקשורים להריון של בת הזוג
        </span>
      </div>

      <div id="number-three">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number-three").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מיוחדת לידה/אימוץ-</b>
        <br />
        <span>
         8 ימים
          <br />
         ניתן לנצל חודש טרם מועד הלידההמיועד ועד חודש לאחר הלידה
        </span>
      </div>

      <div id="number-four">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number-four").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מיוחדת טיפולי פוריות-</b>
        <br />
        <span>
         חייל זכאי לחופשה של 12 ימים בשנה וחיילת זכאית לחופשה של 16 ימים בשנה
        </span>
      </div>

      <div id="number-five">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number-five").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מיוחדת מחלת ילד-</b>
        <br />
        <span>
         8 ימים
         <br />
         ימי המיוחדת מתחדשים בכל שנת שירות והימים שלא נוצלו אינם נצברים לשנה הבאה
        </span>
      </div>
      <div id="number-six">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number-six").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מיוחדת מחלת ילד (ממארת)-</b>
        <br />
        <span>
         60 ימים
          <br />
         30 ימים ראשונים באישור רס"ן
         ו30 ימים נוספים באישור סא"ל
         ימי המיוחדת מתחדשים בכל שנת שירות

        </span>
      </div>
      
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information10 = React.forwardRef((props, ref) => {
  const book = props.book;
  
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      
     
      <ul className="text-p2">
      <span id="center-p">קריטריונים:</span>
        <li>
        אשת חייל סטודנטית וסיימה שנה א' טרם נישואיה לחייל. עליה ללמוד לפחות 16 שעות שבועיות במוסד המוכר ע"י המועצה להשכלה גבוהה
        </li>
        <li>
          אשת חייל עובדת-על אשת החייל לעבוד 160 שעות ולהרוויח 5000 ש"ח
        </li>
        <li>
אשת חייל חיילת או בשירות לאומי או בשנת שירות או במכינה
        </li>
        <li>
          אשת חייל תלמידת תיכון או קורס מקצועי- עליה ללמוד כל יום בשבוע שבע שעות לפחות או 35 שעות שבועיות
        </li>
        <li>
          אשת חייל עולה חדשה- מידה ונמצאת בארץ 3 שנים לכל היותר ולומדת עברית באולפן או לימוד מקצועי
        </li>
        <li>
          אשת חייל בהריון משבוע 14 ועד הלידה
        </li>
        <li>
          <span>
          <button id="dgeshim-btn" onClick={() => {document.getElementById("dgeshim").style.display="block"}}> לחץ לדגשים נוספים</button>
          </span>
        </li>
      </ul>
      
      <div id="dgeshim">
      <button
          className="close-window"
          onClick={() =>
            (document.getElementById("dgeshim").style.display = "none")
          }
        >
          ✖
        </button>
        <span>
          <br/>
       <ul id="text-p3">
        <li className="li1">הזכאות לתשמ"ש אינה אוטומטית והינה מותנית בעמידה בקריטריונים ומבחני הכנסות</li>
        <br/>
        <li className="li1">יש לדווח על כלל החשבונות, ההכנסות והנכסים הנמצאים ברשות בני הזוג</li>
        <br/>
        <li className="li1">יש לדווח על כל שינוי בהכנסות גם לאחר שאושרה הבקשה!</li>
       </ul>
        </span>
      </div>
     
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information11 = React.forwardRef((props, ref) => {
  const book = props.book;
  function btnzClick(props) {
    document.getElementById(`number2-${props}`).style.display = "block";
  }
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     

      <div className="btns-div">
        <span className="font-header2">
          בלחיצה על הכפתורים יופיע פירוט
        </span>
        <button className="btnz" id="one" onClick={() => btnzClick("one")}>
         מענק בזק/מענק חד פעמי
        </button>
        <button className="btnz" id="two" onClick={() => btnzClick("two")}>
         תק"ח
        </button>
        <button className="btnz" id="three" onClick={() => btnzClick("three")}>
          תו בזק
        </button>
        <button className="btnz" id="four" onClick={() => btnzClick("four")}>
        מענק מתמשך
        </button>
        <button className="btnz" id="five" onClick={() => btnzClick("five")}>
         קרן סיוע פיקודית, מענק
        </button>
      </div>

      <div id="number2-one">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number2-one").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מענק בזק-</b>
        <br />
        <span>
         לפני גזירת שכר, 72 שעות ממועד ההזנה
         <br />
         שבוע לאחר גזירת שכר (חמישה ימי עסקים ממועד הגזירה)-72 שעות ממועד ההזנה
        </span>
      </div>

      <div id="number2-two">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number2-two").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-תק"ח-</b>
        <br />
        <span>
          במידה והוזן לפניי 19:00, תיכנס בבוקר למחרת 
          <br />
        הטבה שהוזננה לאחר 17:00, תיכנס תוך 72 שעות
        <br />
        *כל זכאות תקפה למשך 60 ימים
        </span>
      </div>

      <div id="number2-three">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number2-three").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-תו בזק-</b>
        <br />
        <span>
         בסמכות קת"ש יחידה קוד עד 300 ש"ח שתקף ל20 דקות בלבד בטלפון האישי של החייל. את הטבה זו יש לתעד תחת בקשת תו ידני תוך 72 שעות ממתן ההטבה
        </span>
      </div>

      <div id="number2-four">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number2-four").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-מענק מתמשך-</b>
        <br />
        <span>
        במידה והוזן לפניי ה15 לחודש יכנס יום לאחר מועד ההזנה ושאר החודשים ב1 לחודש. במידה והוזן לאחר ה15 לחודש ייכנס בראשון לחודש העוקב וכך הלאה בהתאם למספר החודשים שאושרו. כל זכאות תקפה למימוש למשך 60 ימים מלאים
        </span>
      </div>

      <div id="number2-five">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number2-five").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-קרן סיוע פיקודית-</b>
        <br />
        <span>
             תוך חמישה ימי עסקים     
        </span>
      </div>
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information12 = React.forwardRef((props, ref) => {
  const book = props.book;
  function btnzClick(props) {
    console.log("heuyeye");
    document.getElementById(`number1-${props}`).style.display = "block";
  }
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     

      <div className="btns-div">
        <span className="smaller-text">החייל זכאי ל24 שעות בבית לצורך סידורים אישיים. החייל ישתחרר לביתו ביום שלפני יום הסידורים ויחזור ביום שאחריו</span>
        <span className="font-header1">
          בלחיצה על הכפתורים יופיע פירוט
        </span>
        <button className="btnz" onClick={() => btnzClick("one")}>
         חיילים מפונים
        </button>
        <button className="btnz"onClick={() => btnzClick("two")}>
        חיילים בודדים
        </button>
        <button className="btnz" onClick={() => btnzClick("three")}>
        חייל נשוי/ידוע בציבור
        </button>
        <button className="btnz" onClick={() => btnzClick("four")}>
       חייל נשוי/ ידוע בציבור + ילד
        </button>
        <br />
    <span className="smaller-text">על המפקדים קיימת החובה להוציא את החיילים ליום סידורים למעט בתקופת לחימה וכוננות מבצעית גבוהה, וכן במקרים פרטניים</span>
      </div>

      <div id="number1-one">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number1-one").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-חיילים מפונים-</b>
        <br /> <br />
        <span>
        עד להגדרה אחרת, זכאים ליום סידורים אחת לחודש
        </span>
      </div>

      <div id="number1-two">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number1-two").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-חיילים בודדים-</b>
        <br /> <br />
        <span>
         זכאים ליום סידורים אחת לחודשיים, ללא שינוי בהנחיות
        </span>
      </div>

      <div id="number1-three">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number1-three").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-חייל נשוי/ידוע בציבור-</b>
        <br /> <br />
        <span>
       אשר משרת ביחידה סגורה זכאי ליום סידורים אחת לחודשיים
        </span>
      </div>

      <div id="number1-four">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("number1-four").style.display = "none")
          }
        >
          ✖
        </button>
        <br />
        <b>-חייל נשוי/ידוע בציבור + ילד-</b>
        <br /> <br />
        <span>
      זכאי ליום סידורים אחתלחודשיים ללא תלות ברמת הפעילות
        </span>
      </div>

      
  
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information13 = React.forwardRef((props, ref) => {
  const book = props.book;
  function btnzClick(props) {
    document.getElementById(`number1-${props}`).style.display = "block";
  }
  return (
    <div ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <table className="table-soldier">
  <tr>
    <th className="td">בית החייל</th>
    <th className="td">כתובת</th>
    <th className="td">מספר טלפון</th>
  </tr>
  <tr>
    <td className="td">אילת</td>
    <td className="td">בית השיטה 4</td>
    <td className="td">0722702150</td>
  </tr>
  <tr>
    <td className="td">קריית שמונה-מלון צפון</td>
    <td className="td">שד' תל חי 94</td>
    <td className="td">0722702285</td>
  </tr>
  <tr>
    <td className="td">באר שבע</td>
    <td className="td">בית לחם 2</td>
    <td className="td">072-2702150</td>
  </tr>
  <tr>
    <td className="td">טבריה</td>
    <td className="td">גולני 12</td>
    <td className="td">0722702180</td>
  </tr>
  <tr>
    <td className="td">חיפה</td>
    <td className="td">שד' בן גוריון 15</td>
    <td className="td">0722702170</td>
  </tr>
  <tr>
    <td className="td">תל אביב-בית השריון</td>
    <td className="td">לוחמי גליפולי 51</td>
    <td className="td">0722702230</td>
  </tr>
  <tr>
    <td className="td">ירושלים</td>
    <td className="td">האלוף דוד שאלתיאל 3</td>
    <td className="td">0722702258</td>
  </tr>
  <tr>
    <td className="td">רמת גן</td>
    <td className="td">הרא"ה 8</td>
    <td className="td">0722702283</td>
  </tr>
  <tr>
    <td className="td">רמת גן</td>
    <td className="td">רוקח 121</td>
    <td className="td">0722702278</td>
  </tr>
</table>

      
  
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
            <b id="header-book">ת"ש</b>
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
          <Page
            header="זכאויות לחייל הנשוי"
            showPage={8}
            number="9"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="מיוחדות לחייל הנשוי"
            showPage={9}
            number="10"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
           <Page
            header='תשמ"ש לחייל הנשוי'
            showPage={10}
            number="11"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
           <Page
            header="מתי תיכנס כל הטבה"
            showPage={11}
            number="12"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header='ימי סידורים לחיילי סדיר'
            showPage={12}
            number="13"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
           <Page
            header="בתי החייל"
            showPage={13}
            number="14"
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
