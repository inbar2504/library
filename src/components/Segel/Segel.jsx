import React, { useRef, useState, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Segel.css";
import HomeIcon from "../HomeIcon";
import { Event } from "@mui/icons-material";



const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover5" ref={ref} data-density="hard">
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
    ["סגל בקליק", "2"],
    ["זכאויות", "3"],
    ["עיכוב בדרגה", "4"],
    ["דרגות נגדים", "5"],
    ["דרגות קצינים", "6"]
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
          <button className="btns6">{val}</button>
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
      <div className="flex-container">
          <a className="app-sub" href="https://mofet-frontend.wiz.digital.idf.il/m/UUCSEARBGJ">
            <p className="sub-name">הוצאות נלוות</p>
            <img className="img-apps" src="./assets/segel/credit-card.png" />
           
          </a>
          <a className="app-sub" href="https://people.digital.idf.il/pratSoldier">
            <p className="sub-name">אנשים בדיגיטל</p>
            <img className="img-apps" src="./assets/segel/people.png" />
          </a>    
          <a className="app-sub" href="https://www.prat.idf.il/%D7%94%D7%A9%D7%9B%D7%A8-%D7%A9%D7%9C%D7%99/%D7%98%D7%A4%D7%A1%D7%99%D7%9D-%D7%9E%D7%A7%D7%95%D7%95%D7%A0%D7%99%D7%9D/%D7%94%D7%97%D7%96%D7%A8-%D7%92%D7%A0%D7%99-%D7%99%D7%9C%D7%93%D7%99%D7%9D/?returnUrl=%2f%d7%94%d7%a9%d7%9b%d7%a8-%d7%a9%d7%9c%d7%99%2f%d7%98%d7%a4%d7%a1%d7%99%d7%9d-%d7%9e%d7%a7%d7%95%d7%95%d7%a0%d7%99%d7%9d%2f%d7%94%d7%97%d7%96%d7%a8-%d7%92%d7%a0%d7%99-%d7%99%d7%9c%d7%93%d7%99%d7%9d%2f">
            <p className="sub-name">החזר גני ילדים</p>
            <img className="img-apps" src="./assets/segel/children.png" />
          </a>  
          <a className="app-sub" href="https://www.hvr.co.il/orders/signin.aspx?redirect=/site/pg/ins_body">
            <p className="sub-name">ביטוחים</p>
            <img className="img-apps" src="./assets/segel/insurance.png" />
          </a>  
          <a className="app-sub" href="https://pniot.prat.idf.il/pniot/tohash/#no-eligibility">
            <p className="sub-name">לימודים</p>
            <img className="img-apps" src="./assets/segel/student.png" />
          </a>  
          <a className="app-sub" href="https://www.prat.idf.il/%D7%94%D7%A9%D7%9B%D7%A8-%D7%A9%D7%9C%D7%99/%D7%98%D7%A4%D7%A1%D7%99%D7%9D-%D7%9E%D7%A7%D7%95%D7%95%D7%A0%D7%99%D7%9D/%D7%94%D7%90%D7%A8%D7%9B%D7%AA-%D7%A9%D7%99%D7%A8%D7%95%D7%AA/">
            <p className="sub-name">הארכת שירות</p>
            <img className="img-apps" src="./assets/segel/notes.png" />
          </a>  
          <a className="app-sub" href="https://mofet-frontend.wiz.digital.idf.il/m/STLMXA8D3Y">
            <p className="sub-name" >החזר שכר דירה</p>
            <img className="img-apps" src="./assets/segel/home-money.png" />
          </a>  
          <a className="app-sub" href="https://idfpoints.mltp.co.il/">
            <p className="sub-name">נקודות</p>
            <img className="img-apps" src="./assets/segel/add.png" />
          </a>  
          <a className="app-sub">
            <p className="sub-name">נופש קבע</p>
            <img className="img-apps" src="./assets/segel/vacation.png" />
          </a>  
          <a className="app-sub" href="https://mofet-frontend.wiz.digital.idf.il/m/KULKM7NT9R">
            <p className="sub-name">מעבר דירה</p>
            <img className="img-apps" src="./assets/segel/box.png" />
          </a>  
          <a className="app-sub">
            <p className="sub-name">אישור תושב</p>
            <img className="img-apps" src="./assets/segel/garden.png" />
          </a>  
          <a className="app-sub" href="https://www.prat.idf.il/%D7%90%D7%99%D7%A9%D7%95%D7%A8%D7%99%D7%9D/">
            <p className="sub-name">אישורים צבאיים</p>
            <img className="img-apps" src="./assets/segel/note.png" />
          </a>  
          <a className="app-sub" href="https://www.hvr.co.il/orders/signin.aspx?redirect=/site/pg/ins_body">
            <p className="sub-name">אתר חבר</p>
            <img className="img-apps" src="./assets/segel/hever.png" />
          </a>  
          <a className="app-sub" href="https://www.prat.idf.il/%D7%94%D7%A9%D7%9B%D7%A8-%D7%A9%D7%9C%D7%99/%D7%AA%D7%9C%D7%95%D7%A9-%D7%94%D7%A9%D7%9B%D7%A8/">
            <p className="sub-name">תלוש משכורת</p>
            <img className="img-apps" src="./assets/segel/salary.png" />
          </a>  
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
      <div id="explain">לחצו לפירוט על הזכאויות</div>
      
      <span className="flex-container">
        
          <button className="app-sub1 z1" onClick={() => btnzClick("n1")}>
            מעונות יום
          </button>
          <button className="app-sub1 z2" onClick={() => btnzClick("n2")}>
            קייטנת קיץ
          </button>    
          <button className="app-sub1 z3" onClick={() => btnzClick("n3")}>
            מלגות לילדים
          </button>  
          <button className="app-sub1 z4" onClick={() => btnzClick("n4")}>
            החזרי נסיעות
          </button>  
          <button className="app-sub1 z1" onClick={() => btnzClick("n5")}>
            ימי מחלה
          </button>  
          <button className="app-sub1 z2" onClick={() => btnzClick("n6")}>
            שי לחג
          </button>  
          <button className="app-sub1 z3" onClick={() => btnzClick("n7")}>
            שי ליולדת
          </button>  
          <button className="app-sub1 z4" onClick={() => btnzClick("n8")}>
            שי לילד בכיתה א
          </button>  
          <button className="app-sub1 z1" onClick={() => btnzClick("n9")}>
            נופש בזכאות
          </button>  
          <button className="app-sub1 z2" onClick={() => btnzClick("n10")}>
            כרטיס אשראי חבר
          </button>  
          <button className="app-sub1 z3" onClick={() => btnzClick("n11")}>
            כרטיס חבר הצהוב
          </button>  
          <button className="app-sub1 z4" onClick={() => btnzClick("n12")}>
            כרטיס חבר כחול
          </button>  
          <button className="app-sub1 z1" onClick={() => btnzClick("n13")}>
            כרטיס אפור אט"ל
          </button>  
          <button className="app-sub1 z2" onClick={() => btnzClick("n14")}>
           גמול השתלמות
          </button>  
          <button className="app-sub1 z3" onClick={() => btnzClick("n15")}>
           גמו"ש א
          </button> 
          <button className="app-sub1 z4" onClick={() => btnzClick("n16")}>
           גמו"ש ב
          </button> 
      </span>
      <div id="n1">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n1").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">מעונות יום</span>
        
        <br />
         תוספת כספית המיועדת להוריה לילד מתחת לגיל 5 בגין השתתפות בדמי מעונות הילד. הזכאות תינתן רק לאחד מבני הזוג (נדרש בהגשת מסמכים דרך שלישות היחידה) החזרים ניתנים בגין 10 חודשים בשנה: החל מה-1 בספמטבר ועד ה-30 ביוני
      </div>
      <div id="n2">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n2").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">קייטנת קיץ</span>
        <br />
        משולם במחזור אחד בלבד בחודשי הקיץ יולי/אוגוסט עבור ילדים מגיל 3 חודשים עד גיל 18. ניתןלהצהיר על מטפלת קיץ עבור ילדים מגיל 3 חודשים עד גיל 12
      </div>
      <div id="n3">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n3").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">מלגות לילדי משרתי קבע</span>
        <br />
       מענק חד פעמי שמקבל איש קבע עבור כל ילד מטרום חובה עד כיתה י"ב -התשלום נכנס באופן אוטומטי לשכר של אוגוסט/ספטמבר.הזכאות ניתנת למשרת קבע בוותק שירות של 4 שנים ומעלה
      </div>
      <div id="n4">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n4").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">החזרי נסיעות</span>
        <br />
          כל משרת קבע אשר לא מחזיק ברכב, זכאי לקבל החזרי נסיעות. לצורך קבלה יש לגשת למשרד השלישות להזנת ההחזרים
      </div>
      <div id="n5">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n5").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">ימי מחלה</span>
        <br />
        איש הקבע זכאי ל-30 ימי מחלה בשנה (כלל סוגי חופשת המחלה מנוכים מסל זה -מחלת ילד,בן זוג וכ'ו) עובד יקבל תשלום מלא בגין היעדרותו מהעבודה עקב מחלה החל מהיום הראשון להיעדרותו.בנוסף קיימת חעובד זכאות ל2 ימי מחלה עפ"י הצהרה בשנה
      </div>
      <div id="n6">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n6").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">שי לחג</span>
        <br />
        איש הקבע זכאי לשי זה בחג הפסח ובראש השנה (500 שח) ופעם בשנה לקבע ראשוני בלבד בחג החנוכה (360 שח) נטען בכרטיס "חבר" הצהוב
      </div>
      <div id="n7">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n7").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">שי ליולדת</span>
        <br />
        השי מוזן לכרטיס "חבר" ברגע שהוזן הילד ברשומה הצהל"ית (300 שח)
      </div>
      <div id="n8">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n8").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big"> שי לילד העולה לכיתה א</span>

        <br />
        משרת קבע אשר מלאו לילדו 6 שנים, יזוכה בשי על סך 180 שח וזאתלרגל עלייתו לכיתה א'.השי מוזן לכרטיס "חבר" במהלך החודשים יולי-אוגוסט
      </div>
      <div id="n9">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n9").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">נופש בזכאות</span>
        <br />
       איש הקבע זכאי לנופש מסובסד לאחר 4 שנות שירות (חובה+קבע) מספר הלילות תלוי ומשתנה לכל אחד ע"פ אופי שירותו
      </div>
      <div id="n10">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n10").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">כרטיס אשראי חבר</span>
        <br />
       הזמנת כרטיס אשראי חבר "כרטיס שחור" ,מתבצעת עצמאית בטלפון 
       <br />
       1-700-503-002
       <br />
       לאחר הזמנת הכרטיס ישלחו כרטיסי חבר טעמים וכרטיס ההטבות
      </div>
      <div id="n11">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n11").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">כרטיס חבר הצהוב</span>
        <br />
       כרטיס רב פעמי הניתן לטעינה עצמית בהנחה של כ-30% ל-1000 שח הראשונים בחודש ושל 20% ל-1000 שח נוספים
      </div>
      <div id="n12">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n12").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">כרטיס חבר כחול</span>
        <br />
       חבר טעמים : מזכה את איש הקבע בהנחה של כ-30% במסעדות
      </div>
      <div id="n13">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n13").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">כרטיס אפור אט"ל</span>
        <br /> 
    נקודות ספורט,אישיות,מדים... הנקודות מיועדות למשרתי קבע בלבד לצורך רכישת פריטי לבוש אישי, צבאי וספורט לצור שמירה על הופעה תקינה וארוח חיים בריא. להזמנת הכרטיס האפור ניתן ליצור קשר בטלפון 03-7374800
      </div>
      <div id="n14">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n14").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">גמול השתלמות</span>
        <br />
      גמול השתלמות הינו רכיב שכר אזרחי המשולם בהתאם להנחיות נציבות שירות המדינה בשכר זכאות לגמו"ש נקבעת עפ"י מספר קריטריונים כגון: השכךה,דרגת שכר,ותק במקצוע וצבירת 400 שעות מזכות ושעות משלימות במידת הצורך. משרתי הקע בגין קורסים והשתלמויות המוכרים לצורך זה
      </div>
      <div id="n15">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n15").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">מי זכאי לגמו"ש א</span>
        <ul className="text-p2">
            <li>קצינים לאחר סיום בה"ד 1 החל משנת 2015 באופן אוטומטי לתלוש השכר </li>
            <li>נגדים/קצינים בדרג מנהלי בדרגה סרן/רס"ר שהשלימו לפחות 11/12 שנו"ל</li>
            <li>נגדים בדרגה אקדמית ניתן להגיש החל משנת הקבע הראשונה בהשלמת 400 שעות</li>
            <li>צבירה של 400 שעות מזכאות בטווח של 5 שנים (200 העשרתי ו-200 מקצועי)</li>
          </ul>
      </div>
      <div id="n16">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("n16").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
        <span className="header-big">מי זכאי לגמו"ש ב</span>
       <br />
       זכאים רק קצינים לאחר השלמה של תואר ראשון לפחות והשלמת 400 שעות לימוד (200 מקצועי ו-200 השערתי)/נגדים מהדור הישן שהשלימו גמו"ש א
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
    <div className="Information3" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <span>לחץ לפירוט</span>
      <br />
      <button className="app-sub3" onClick={() => btnzClick("b1")}>
           עיכוב עקב חקירה או משפט
          </button>
         <span id="darga-color">
           משרת קבע יעוכב בדרגתו למשך שנה במקרים הבאים
           </span>
           <ul className="text-p3">
            <li>נשפט בבית דין צבאי/בית משפט ונמצא אשם</li>
            <li>נשפט בבית דין/בית משפט לתעבורה,נמצא אשם וקיבל עונש מחבוש/מאסר בפועל</li>
            <li>נשפט בדמ"ש ,נמצא אשם וקיבל עונש מחבוש בפועל</li>
          </ul>
             
      <div id="b1">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("b1").style.display = "none")
          }
        >
          ✖
        </button>
        <br /><br />
      נגד אשר מתנהלת נגדו חקירה של מצ"ח/ מ"י/ ווח"ק ,יעוכב בדרגה עד למועד סיום החקירה,אלא אם ס.פצ"ר חווה את דעתו שאין מניעה לקידום-או אז ניתן לדון בדרגה באופן חריג, ע"י מחה"ס
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
    <div className="Information4" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p className="rtl-p">
        <span className="header-dargot-nagadim">בדרגת סמ"ר</span>
        <br />
        נוהל רגיל,לוחמים ומסלול בכיר - דרגת הכניסה המינימאלית לקבע
      </p>
   <p className="rtl-p">
   <span className="header-dargot-nagadim">בדרגת רס"ל</span>
    <br />
    נוהל רגיל - 24 חודשי שירות. נגד יחידה לאחר פז"ם של שנה וחצי בדרגת סמ"ר
    <br />
    לוחמים- נגד לוחם-שנה וחצי
    <br />
  נגד לוחם מיוחד-שנה
  <br />
  תנאי מעבר עיקריים-מעבר קורס כניסה לקבע בחיל
   </p>
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
      <div id="center-p1">לחצו לפירוט על כל אחת מן הדרגות</div>
      <span className="flex-container1">
      <button className="app-sub-k" onClick={() => btnzClick("k1")}>
        סג"מ סגן
      </button>
      <button className="app-sub-k" onClick={() => btnzClick("k2")}>
        סגן סרן
      </button>
      <button className="app-sub-k" onClick={() => btnzClick("k3")}>
       סרן רס"ן
      </button>
      </span>
      <div id="k1">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("k1").style.display = "none")
          }
        >
          ✖
        </button>

       נוהל רגיל:
        פז"ם של שנה בדרגת סג"מ/כניסה לקבע
       <br /><br />
       נוהל יחידות מיוחדות בלבד:
       שישה חודשי שירות לפחות בדרגת סג"מ
       <br /><br />
      </div>
      <div id="k2">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("k2").style.display = "none")
          }
        >
          ✖
        </button>

       נוהל רגיל:
        פז"מ של 3 שנים בדרגת סגן (ללא חל"ת/מחבוש) וביצוע דמ"ש ק.שיפוט זוטר טרם מועד הזכאות(תקף לשנה)
       <br /><br />
       נוהל מפקדי:
       נשיאת מינוי מפקד לוחם(נגררת אופי תפקיד בתיק אישי) ופז"ם של שנתיים בדרגה סגן (ללא חל"ת/מחבוש) וביצוע דמ"ש ק.שיפוט זוטר טרם מועד הזכאות (תקף לשנה)
        <br /><br />
נוהל יחידות מיוחדות:
פז"ם של 18 חודשים בדרגת סגן (ללא חל"ת/מחבוש) והצבה ביחידה מיוחדת 24 חודשים לפחות בכולל וביצוע דמ"ש ק. שיפוט זוטר טרם מועד הזכאות (תקף לשנה)
      </div>
      <div id="k3">
        <button
          className="close-window"
          onClick={() =>
            (document.getElementById("k3").style.display = "none")
          }
        >
          ✖
        </button>
       נוהל רגיל:
        פז"ם מינימאלי של 3 שנים בדרגת סרן ונשיאת מינוי בדרגת רס"ן וביצוע דמ"ש בכיר טרם מועד הזכאות (תקף לשנה)
       <br /><br />
       נוהל מפקדי:
     פז"ם מינימאלי של שנתיים ו-4 חודשים בדרגת סרן וביצוע דמ"ש בכיר טרם מועד הזכאות (תקף לשנה)
        <br /><br />
      נוהל יחידות מיוחדות:  
          שלושים חודשים בדרגת סרן ומבצע תפקיד לחימה ייעודי ודרגת הסרן הוענקה לו לאחר ששירת בדרגת הסגן 18 חודשים לפחות
      </div>
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)} />

    </div>
  );
});
export default function Segel(props) {
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
            <b id="header-book">סגל</b>
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
            header="סגל בקליק"
            showPage={1}
            number="2"
            book={book}
            setShowBook={props.setShowBook}
          ></Page>
           <Page
            header="זכאויות"
            showPage={2}
            number="3"
            book={book}
            setShowBook={props.setShowBook}
          ></Page>
           <Page
            header="עיכוב בדרגה"
            showPage={3}
            number="4"
            book={book}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="דרגות נגדים"
            showPage={4}
            number="5"
            book={book}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="דרגות קצינים"
            showPage={5}
            number="6"
            book={book}
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
