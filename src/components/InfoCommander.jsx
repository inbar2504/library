import React, { useRef, useState, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import "./InfoCommander.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import HomeIcon from "./HomeIcon";
import { Event } from "@mui/icons-material";



const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover8" ref={ref} data-density="hard">
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
    ["נוהל קליטת חייל ", "2"],
    ["קלירנס", "3"],
    ["חופשות", "4"],
    ["שלישות", "5"],
    ['נוהל ביקורי מאושפזים', "6"]

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
            <tr id="header-board5">{heading}</tr>
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
          <button className="btns5">{val}</button>
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
      <br />
      <div className="flex-container5">
        <span id="press-5">לחצו כדי לגלות מה עליכם לעשות ב </span><br />
      <button className="app-sub-c" onClick={() => btnzClick("c1")}>
   סיום קורס/טירונות 
      </button>
      <button className="app-sub-c" onClick={() => btnzClick("c2")}>
            יום הקליטה 
      </button>
      <button className="app-sub-c" onClick={() => btnzClick("c3")}>
        שבוע ראשון
      </button>
      <button className="app-sub-c" onClick={() => btnzClick("c4")}>
      חודש ראשון
      </button>
      <button className="app-sub-c" onClick={() => btnzClick("c5")}>
     חציון ראשון
      </button>
      </div>
      <div id="c1">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("c1").style.display = "none")
          }
        >
          ✖
        </button>
            טלפון מזל טוב ופרטי הגעה - אחריות המפקד

      </div>
      <div id="c2">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("c2").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>ליווי מהש"ג והגדרת מלווה מטעם המחלקה הקולטת</li>
            <li>קלירנס ביחידה, ראיון ק.משא"ן,עדכון פרטים אישיים, ראיון אישי בראשות מפקד הגף, הוצאת שומר סף,הורדת אפליקציית דוח אחד וקבלת הסבר שלישותי על הנושא</li>
            <li>קבלת פנים במחלקה</li>
            <li>שיחת הסברה על היחידה וחשיפה בסיסית,סיור ביחידה ע"י נציג מחלקה</li>
            <li>שיבוץ לחדר במגורים-תל נוף:ק.ניהול .פלמחים:רסר,בעת הקליטה יצא מייל ממשרד השלישות</li>
            <li>שיחה אישית ראשונית עם המפקד הישיר</li>
          </ul>
      </div>
      <div id="c3">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("c3").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>
              ווידוא חוסרים במידה ויש (אפסנאות,אישור כניסה ועוד)
            </li>
            <li>
              בניית לוז כללי ותיאום פ"ע עם הגורמים הרלוונטים
            </li>
          </ul>
      </div>
      <div id="c4">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("c4").style.display = "none")
          }
        >
          ✖
        </button>
       חשיפה ליחידה (רלוונטי רק ליחידה 5101)
      </div> 
      <div id="c5">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("c5").style.display = "none")
          }
        >
          ✖
        </button>
       כל מש"ק יבקר ביחידה המקבילה על מנת להכיר את העשייה בשתי היחידות (ארגון יום מסודר-ע"י משרד השלישות)
      </div>
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />

    </div>
  );
});
const Information2 = React.forwardRef((props, ref) => {
  const book = props.book;
  function btnzClick(props) {
    document.getElementById(props).style.display = "block";
  }
  return (
    <div className="Information2" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <br />
      <span className="flex-container5">
        <span id="press-5">לחצו כדי לגלות מה עליכם לעשות ב </span><br />
      <button className="app-sub-t" onClick={() => btnzClick("t1")}>
    קליטת חייל
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("t2")}>
            גריעת חייל
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("t3")}>
        קורסים/סיפוח
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("t4")}>
      שחרור
      </button>

      </span>
      <div id="t1">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("t1").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
           <li>סיכום ראיון מפקד יבוצע במערכת "אנשים" ע"י המפקד תוך 48 שעות מרגע הקליטה</li>
           <li>מעבר אצל השליש לביצוע ראיון</li>
           <li>סיכום ראיון סא"ל - כאשר נקלט איש קבע</li>
           <li>ביצוע טופס טיולים בתחנות הנדרשות</li>
           <li>הצמדת חייל חונך לצורך הכרת היחידה וחפיפה</li>
           <li>ווידוא כי קיבל את כלל הדברים הנדרשים - כגון:שומר סף,חדר ועוד</li>
          </ul>

      </div>
      <div id="t2">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("t2").style.display = "none")
          }
        >
          ✖
        </button>
       <span>סיכום ראיון ע"י מפקד וביצוע טופס טיולים כנדרש</span>
      </div>
      <div id="t3">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("t3").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>
             קורס עד 30 יום-יציאה ללא קלירנס
            </li>
            <li>
             לקורס מעל 30 יום - ביצוע גריעה לסיפוח במשרד השלישות
            </li>
            <li>
              סיכום ראיון מפקד חזרה מקורס מעל חודש
            </li>
          </ul>
      </div>
      <div id="t4">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("t4").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>
             הערכת מפקד לשחרור+חוו"ד מפקד למילואים
            </li>
            <li>
            סיכום ראיון מפקד
            </li>
            <li>
           טופס טיולים ביום השחרור ביחידה
            </li>
            <li>
              חיילים שעושים מילואים ימלאו -שאלון פרטים אישיים
            </li>
            <li>
              גזירת חוגר וקבלת - אישור נלווה לשחרור
            </li>
          </ul>
      </div> 
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information3 = React.forwardRef((props, ref) => {
  const book = props.book;
  function btnzClick(props) {
    document.getElementById(props).style.display = "block";
  }
  return (
    <div className="Information1" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     
      <div id="press-6">לחצו כדי לראות פירוט על </div><br />
      <div className="flex-container5">
      
      <button className="app-sub-t" onClick={() => btnzClick("h1")}>
        חופשות חובה
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("h2")}>
         חופשות קבע
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("h3")}>
        חו"ל חובה/קבע לחופשה בלבד
      </button>
      </div>
      <div id="h1">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("h1").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
          <li>כל חייל מקבל בשנה כ18 ימי חופש</li>
          <li>ימי מפקד-עד 5 ימים. לא חובה לאשר, ולשיקול דעתו של המפקד בלבד (ימי מפקד ירדו רק לאחר שהחופשה השנתית תגמר)</li>
          <li>ימי ד'-עד עם אחת ב7 ימים ולא יותר מ10 ימים בשנה</li>
          <li>דו"ח חופשות מופץ מידי חודש ע"י משרד השלישות</li>
          </ul>

      </div>
      <div id="h2">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("h2").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
          <li>חופשה שנתית בדיקת זכאות ויתרת החופשה</li>
          <li>משרת קבע יכול לבקש לצבור 8 ימים ולנצלם בשנתיים העוקבות בלבד</li>
          <li>לאחר כל מחלה יש להעביר אסמכתא מתאימה תוך 30 יום</li>
          <li>מחלה עפ"י הצהרה-זכאות ליומיים בשנה-חל איסור בצמוד לימים ראשון וחמישי</li>
          <li>מחלת הורה/בן זוג-זכאות ל-6 ימים בשנה</li>
          <li>מחלת בכין הריון ולידה-זכאות לבן/בת זוג עד 7 ימים במהלך ההיריון עצמו, ובמשך שבוע לאחר הלידה</li>
          <li>מחלת ילד-ניתן לממש (בהתאמה למספר הילדים 1/2/3 ) 8/10/12 ימים בשנה לכל ילדי איש הקבע</li>
          <li>חיילים בשירות קבע שלהם נותרה יתרת חופשה משירות החובה ברמ"פ א+ ,ינצלו אותה בשלושה חודשים הראשונים בשירות הקבע</li>
        </ul>
      </div>
      <div id="h3">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("h3").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>
             ווידוא יתרת ימי חופשה כנדרש
            </li>
            <li>
             יש למלא טופס ידני
            </li>
           
          </ul>
      </div>
     
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});
const Information4 = React.forwardRef((props, ref) => {
      const book = props.book;
  function btnzClick(props) {
    document.getElementById(props).style.display = "block";
  }
  return (
    <div className="Information2" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <div id="press-6"> לחצו לפירוט על </div><br />
      <span className="flex-container5">
      
        
      <button className="app-sub-t" onClick={() => btnzClick("s1")}>
    "אנשים"
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("s2")}>
          דו"ח אחד
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("s3")}>
       דרגות
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("s4")}>
      שינוי פרטים אישיים
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("s5")}>
        תורנויות
      </button>
      </span>

      <div id="s1">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("s1").style.display = "none")
          }
        >
          ✖
        </button>
        באנשים כלל המפקדים יוכלו לראות את פקודיהם, לראות נתונים כגון: הזנת דו"ח אחד, ימי חופשה,ימי הולדת,דרגות,הטבות ת"ש ועוד

      </div>
      <div id="s2">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("s2").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>
            דו"ח אחד יוזן באפליקציה על ידי הפרט כל יום עד השעה 10:00 בבוקר בטלפון הנייד באפליקציית דו"ח אחד!
            </li>
            <li>
             כל מפקד יוכל לראות את דיווח חייליו באפליקציה בכניסת המפקד
            </li>
            <li>
              במידה והוזן דוח שגוי יש לדווח למשרד השלישות בהקדם ולשלוח תחקיר חתום ע"י סא"ל
            </li>
          </ul>
      </div>
      <div id="s3">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("s3").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>
            דרגות מוזנות באופן אוטומטי במערכת, ניתן לצפות בדרגות עתידיות במערכת אנשים
            </li>
            <li>
            חיילי חובה במקצוע 1809 בקבלת דרגת סמל נדרשים לבצע מבחן שלב, גורמי השלישות יפנו למפקדים בהתאם לצורך
            </li>
            <li>
              בכל חודש ישלח דוח המציין את מקבלי הדרגה באותו החודש ובקבע
            </li>
          </ul>
      </div>
      <div id="s4">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("s4").style.display = "none")
          }
        >
          ✖
        </button>
       מבוצע אוטומטית לאחר שינוי במשרד הפנים מלבד טלפון וכתובת למקרה אסון שמבוצעים בעדכון במערכת
      </div> 
      <div id="s5">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("s5").style.display = "none")
          }
        >
          ✖
        </button>
       כלל חיילי החובה מבצעים תורנויות ביחידה (רס"ר,מטבח ,שמירות וליוויי נסיעה) אחראי התורנויות משבץ לפי פוטנציאל החיילים.ראשית יש לוודא האם לחייל יש פטורים, במידה וכן ,יש להעביר לאחראי טרם השיבוץ
      </div> 
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});

const Information5 = React.forwardRef((props, ref) => {
  const book = props.book;
  function btnzClick(props) {
    document.getElementById(props).style.display = "block";
  }
  return (
    <div className="Information5" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      
      <div id="press-6"> לחצו לפירוט על </div><br />
      <span className="flex-container5">
      
        
      <button className="app-sub-t" onClick={() => btnzClick("g1")}>
          'ימי ג
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("g2")}>
          מאושפזים
      </button>
      <button className="app-sub-t" onClick={() => btnzClick("g3")}>
          גימלים ממושכים
      </button>
      </span>

      <div id="g1">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("g1").style.display = "none")
          }
        >
          ✖
        </button>
        באנשים כלל המפקדים יוכלו לראות את פקודיהם, לראות נתונים כגון: הזנת דו"ח אחד, ימי חופשה,ימי הולדת,דרגות,הטבות ת"ש ועוד

      </div>
      <div id="g2">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("g2").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>
            טופס טיולים במידה ויועבר מדובר באשפוז מעל ל21 יום יוצא ייעשה ע"י נציג מהמחלקה
            </li>
            <li>
          ביקור ראשון יעשה תוך 3 ימים ע"י מפקד בלבד-ניתן לבקש הקלה בביקורם בתנאי שהחייל אינו מעוניין
            </li>
            <li>
            ביקור שני ואילך כל שבוע ע"י מפקד בלבד
            </li>
            <li>
טופס טיולים חוזר
            </li>
            <li>סיכום ראיון מפקד מחלקה באשפוז מעל 21 יום יועבר לתיעוד</li>
          </ul>
      </div>
      <div id="g3">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("g3").style.display = "none")
          }
        >
          ✖
        </button>
        <ul className="text-p6">
            <li>
           ביקור ראשון-בתוך עשרה ימים מיום שהחייל שוהה בביתו
            </li>
            <li>
           ביקור שני בתוך 14 ימים ממועד הביקור הראשון
            </li>
            <li>
         במקביל לביקור תבוצע שיחת טלפון של המפקד עם החייל אחת ל-10 ימים החל מהטווח שבין הביקור השני לשלישי (שיחה זו תתועד בנוסף לביקורים)
            </li>
            <li>חייל בודד הנמצא בחופשת מחלה ממושכת-ביקור ראשון יבוצע על ידי מפקד ישיר שהינו קצין /נגד/אע"צ. הביקורים יבוצעו על פי לוח הזמנים הבא-הביקור הראשון יבוצע תוך 3 ימים מיום יציאתו למחלה ושאר הביקורים יבוצעו אחת ל-7 ימים</li>
          </ul>
      </div>
      <div id="s4">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("s4").style.display = "none")
          }
        >
          ✖
        </button>
       מבוצע אוטומטית לאחר שינוי במשרד הפנים מלבד טלפון וכתובת למקרה אסון שמבוצעים בעדכון במערכת
      </div> 
      <div id="s5">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("s5").style.display = "none")
          }
        >
          ✖
        </button>
       כלל חיילי החובה מבצעים תורנויות ביחידה (רס"ר,מטבח ,שמירות וליוויי נסיעה) אחראי התורנויות משבץ לפי פוטנציאל החיילים.ראשית יש לוודא האם לחייל יש פטורים, במידה וכן ,יש להעביר לאחראי טרם השיבוץ
      </div> 

      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />
    </div>
  );
});

export default function InfoCommander(props) {
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
            <b id="header-book">מידעון למפקד</b>
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
            header="נוהל קליטת חייל"
               showPage={1}
            number="2"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="קלירנס"
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>

          <Page
            header="חופשות"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="שלישות"
            showPage={4}
            number="5"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="נוהל ביקורי מאושפזים"
            showPage={5}
            number="6"
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
