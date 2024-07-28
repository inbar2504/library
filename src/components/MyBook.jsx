import React, { useRef, useState, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import "./MyBook.css";
import "intro.js/introjs.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import HomeIcon from "./HomeIcon";
import { Event } from "@mui/icons-material";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <img id="school-icon" src="assets/school-icon.png" />
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  // const list=["חדר כושר",'חד"א',"בריכה","נהלי יחידה",'שק"ם','יוהל"ם',"טלפונים חשובים",'ת"ש',"היסעים","תורנויות","רפואה","שלישות"];
  const heading = ["לחצו על הנושא כדי להגיע לעמוד שלו במהירות", ""];
  const bodyy = [
    ["שלישות", "2"],
    ["רפואה", "3"],
    ["תורנויות", "4"],
    ["היסעים", "6"],
    ['ת"ש', "8"],
    ["טלפונים חשובים", "9"],
    ['יוהל"ם', "10"],
    ['שק"ם', "11"],
    ["נהלי יחידה", "12"],
    ["בריכה", "14"],
    ['חדר אוכל', "16"],
    ["חדר כושר", "17"],
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
        {props.showPage === 1 ? <Information1 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 2 ? <Information2 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 3 ? <Information3 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 5 ? <Information4 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 7 ? <Information5 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 8 ? <Information6 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 9 ? <Information7 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 10 ? <Information8 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 11 ? <Information9 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 13 ? <Information10 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 15 ? <Information11 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 16 ? <Information12 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 4 ? <Information13 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 6 ? <Information14 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 12 ? <Information15 book={book} setShowBook = {props.setShowBook}/> : ""}
        {props.showPage === 14 ? <Information16 book={book} setShowBook = {props.setShowBook}/> : ""}
        {/* <Table heading={heading} bodyy={bodyy} book={props.book}/>, */}
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
        <tr id="header-board">
          {heading}
        
        </tr>
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
         <button className="btns">{val}</button> 
        </td>
      ))}
    </tr>
  );
});
const Information1 = React.forwardRef((props, ref) => {
  const book = props.book;
  const showMenu = props.showMenu;

  const [showCover, setShowCover] = useState(false);
  const menu = () => {
    book.current.pageFlip().flip(1);
  };

  return (
    <div className="Information1" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <div className="applications">
        <div className="apps">
        
          <a href="https://one.prat.idf.il/login" target="_blank">
          
          <a className="font-header">דוח 1</a>
          <br /><br />
            <img className="applications-images" src="assets/doch.png" />
          </a>
        </div>
        <div className="apps">
          
          <a href="https://zuzu.prat.idf.il/" target="_blank">
          <a className="font-header" target="_blank">זוזו</a>
          <br /><br />
            <img className="applications-images" src="assets/zuzu.png" />
          </a>
        </div>
        <div className="apps">
          
          <a href="https://idf.mltp.co.il" target="_blank">
          <a className="font-header">אתר כוכבים</a>
          <br /><br />
            <img className="applications-images" src="assets/stars.png" />
          </a>
        </div>
        <br />
        <div className="apps">
          <a
            href="https://www.prat.idf.il/%D7%9B%D7%95%D7%9B%D7%91%D7%99%D7%9D-%D7%A0%D7%A7%D7%95%D7%93%D7%95%D7%AA-%D7%95%D7%93%D7%9C%D7%A7/%D7%9C%D7%95%D7%9E%D7%93%D7%95%D7%AA-%D7%93%D7%A4%D7%99-%D7%A0%D7%97%D7%99%D7%AA%D7%94/%D7%A7%D7%9C%D7%99%D7%98%D7%94-%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C%D7%99%D7%AA/?returnUrl=%2f%d7%9b%d7%95%d7%9b%d7%91%d7%99%d7%9d-%d7%a0%d7%a7%d7%95%d7%93%d7%95%d7%aa-%d7%95%d7%93%d7%9c%d7%a7%2f%d7%9c%d7%95%d7%9e%d7%93%d7%95%d7%aa-%d7%93%d7%a4%d7%99-%d7%a0%d7%97%d7%99%d7%aa%d7%94%2f%d7%a7%d7%9c%d7%99%d7%98%d7%94-%d7%93%d7%99%d7%92%d7%99%d7%98%d7%9c%d7%99%d7%aa%2f"
            target="_blank">
              <button className="shalishut-btns">
             <a className="font-header">קליטה דיגיטלית</a>
             <br /><br />
            <img className="applications-images" src="assets/solider.png" />
            </button>
          </a>
        </div>
        <div className="apps">
          <a className="font-header">לוח חופשות</a>
          <br /><br />
          <a
            href="https://www.idf.il/%D7%9B%D7%AA%D7%91%D7%95%D7%AA-%D7%95%D7%A2%D7%93%D7%9B%D7%95%D7%A0%D7%99%D7%9D/2024/%D7%99%D7%A0%D7%95%D7%90%D7%A8/%D7%9C%D7%95%D7%97-%D7%97%D7%95%D7%A4%D7%A9%D7%95%D7%AA-%D7%A6%D7%94%D7%9C-2024/"
            target="_blank"
          >
            <img
              className="applications-images"
              src="assets/calander.png"
            />
          </a>
        </div>
        <div className="apps">
          <a className="font-header">טופס חול</a>
          <br /><br />
          <a
            href="https://www.prat.idf.il/%D7%94%D7%A9%D7%9B%D7%A8-%D7%A9%D7%9C%D7%99/%D7%AA%D7%95%D7%A6%D7%90%D7%95%D7%AA-%D7%97%D7%99%D7%A4%D7%95%D7%A9/?search=%D7%97%D7%95%22%D7%9C&population="
            target="_blank"
          >
            <img
              className="applications-images"
              src="assets/airplane.png"
            />
          </a>
        </div>
      </div>


      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>


      {/* <img className="home-icon" src="assets/home-icon.png" /> */}
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
      <div className="imagess">
        <a href="https://meditik.medical.idf.il/home" target="_blank">
          <img className="imgs" src="assets/afnayot.png" />
        </a>
        <a id="portal">
        <CopyToClipboard text="055555555">
          <button type="submit">
            <img className="imgs" src="assets/portral.png" />
            </button>
        </CopyToClipboard>
          
        </a>
        <a href="https://torim.prat.idf.il/login" target="_blank">
          <img className="imgs" src="assets/torim.png" />
        </a>
      </div>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>

    </div>
  );
});
const Information3 = React.forwardRef((props, ref) => {
  return (
    <div className="Information3" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <b className="header-base">תל נוף</b>
      <div className="sub">
        <p className="turanuyot-header">
          <b>רס"ר</b>
        </p>
        <p className="text-toranuyot">
          רס"ר-עושים על ב' מלא ומתחילים בשעה 7:30 {" "}
        </p>
      </div>
      <div className="sub">
        <p className="turanuyot-header">מטבח</p>
        <p className="text-toranuyot">
          מטבח-עושים על חצי ב' ומתחילים בשעה 7:15 
        </p>
      </div>
      <div className="sub">
        <p className="turanuyot-header">שמירות תומכ"ל</p>
        <p className="text-toranuyot">
          שמירות תומכ"ל- שמירה על ב' מלא
          <br />
          21:00-23:15/23:15-1:30/1:30-3:45/3:45-6:00
          <br />
          בסופשים
          <br />
          21:00-1:30/1:30-6:00
        </p>
      </div>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information4 = React.forwardRef((props, ref) => {
  return (
    <div className="Information4" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
     
      <b className="header-base">תל נוף</b>
      <br />
      <a
        className="link-driving"
        href="https://drive.google.com/file/d/1iUZCQBJJvF5USPaYwRe499nNEaeFFzBu/view"
      >
        קישור לשאטלים ממזכרת בתיה
      </a>
      <br />
      <img id="bus-img" src="assets/bus.png" />
      <br />
      <a
        className="link-driving"
        href="https://drive.google.com/file/d/13bDaWAEzdSrPXObHEkz7ZfChsD6RSouV/view"
      >
        קישור להסעות מרחבי הארץ
      </a>
      <br />
      <div id="warning">
        <p id="warning-text">
          ניתן לקחת טרמפים לבסיס אך ורק בהצגת חוגר ושומר סף
        </p>
      </div>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});

const Information5 = React.forwardRef((props, ref) => {
  const Special = (a, b, c, d, e, f) => {
    document.getElementById(a).style.display = "block";
    document.getElementById(b).style.display = "none";
    document.getElementById(c).style.display = "none";
    document.getElementById(d).style.backgroundColor = "#2dbdbd";
    document.getElementById(e).style.backgroundColor = "rgb(214 215 215)";
    document.getElementById(f).style.backgroundColor = "rgb(214 215 215)";
  };
  return (
    <div className="Information5" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <span id="buttons-specials">
        <button
          id="economy"
          onClick={() =>
            Special(
              "economy-special",
              "private-special",
              "tash-phones",
              "economy",
              "private",
              "tash"
            )
          }
        >
          מיוחדת כלכלית
        </button>
        <button
          id="private"
          onClick={() =>
            Special(
              "private-special",
              "economy-special",
              "tash-phones",
              "private",
              "economy",
              "tash"
            )
          }
        >
          מיוחדת אישית
        </button>
        <button
          id="tash"
          onClick={() =>
            Special(
              "tash-phones",
              "economy-special",
              "private-special",
              "tash",
              "private",
              "economy"
            )
          }
        >
          יצירת קשר
        </button>
      </span>
      <div className="specials">
        <p id="economy-special">
          <h2>מיוחדת כלכלית</h2>
          עבור חייל שנתקבל בקושי כלכלי ומעוניין לצאת לעבוד. על החייל להיות בעל
          היתר עבודה פרטית בתוקף
          <br />
          <b>--גורם מאשר--</b>
          <br />
          משך זמן של עד 30 ימים - רס"ן
          <br />
הארכת משך הזמן למיוחדת של 45 ימים- סא"ל 
          <br />
          <b>--אישורים נדרשים--</b>
          <br />
          עובר ושב 3 חודשים אחרונים של החייל+ הורים פירוט כרטיס אשראי 3 חודשים
          אחרונים של החייל
        </p>
        <div id="private-special">
          <h2>מיוחדת אישית</h2>
          עבור חייל אשר נתקל בבעיה אישית שאינה ניתנת למענה ע"י מיוחדת מסוג
אחר
          <br />
          <b>--גורם מאשר--</b>
          <br />
          משך זמן של עד 30 ימים - רס"ן
          <br />
הארכת משך הזמן למיוחדת של 45 ימים- סא"ל 
          <br />
          <b>--אישורים נדרשים--</b>
          <br />
          מכתב אישי\ כל אישור אחר שמסביר את הצורך במיוחדת
        </div>
        <p id="tash-phones">
          <h2>קצינת ת"ש כנף-שירה</h2>
          <CopyToClipboard text="0509532202">
            <button className="copy-icon">העתק | 050-953-2202</button>
          </CopyToClipboard>

          <h2>משקית ת"ש כנף-רומי</h2>
          <CopyToClipboard text="0506361009">
            <button className="copy-icon">050-636-1009 | העתק</button>
          </CopyToClipboard>
        </p>
      </div>
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information6 = React.forwardRef((props, ref) => {
  return (
    <div className="Information6" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <div>
        <CopyToClipboard text="0587009400">
          <p className="important-phones">
            רלשית מפקד יחידה-נעמה בן גל &#9990; 058-7009400
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0556629527">
          <p className="important-phones">
            רלשית סגן מפקד יחידה-לירז זלצמן &#9990; 055-993-9856
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0542557290">
          <p className="important-phones">
            {" "}
            שלישה-מיקה זית &#9990; 054-2557290
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0587009400">
          <p className="important-phones">
            מבצעים &#9990; 07-33636669
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="086443397">
          <p className="important-phones">
            נוהל 9 &#9990; 08-6443397
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0529253137">
          <p className="important-phones">
            רב בח"א 8 &#9990; 052-9253137
          </p>
        </CopyToClipboard>
      </div>
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information7 = React.forwardRef((props, ref) => {
  return (
    <div className="Information7" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p id="yoalam">
        <br />
        <br />
        <br />
        <br />
        <img className="phone" src="assets/icon-phone.png"></img>
        ממונת יוהל”ם מירי שחורי 0512980576
        <br /> <img className="phone" src="assets/icon-phone.png"></img>
        מהות- 039482600 שלוחה 5 ואז שלוחה 2
      </p>

      <img id="img-yoalam" src="assets/yohalam.png" />
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information8 = React.forwardRef((props, ref) => {
  return (
    <div className="Information8" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <div id="shekem-text">
        <b>תל נוף</b>
        <br />
        בימי א'-ד': 7:15-16:30
        <br />
        ביום ה': 7:15-15:50
        <br />
        ביום ו': 7:15-12:30
        <br />
        <br />
        <b>פלמחים</b>
        <br />
        9:00-21:00
        <br />
        עם הפסקות משתנות
      </div>
      <img id="shekem-img" src="assets/caveret-icon.png" />
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information9 = React.forwardRef((props, ref) => {
  return (
    <div className="Information9" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p className="header-base">תל נוף</p>
      <img id="clothes-icon" src="assets/clothes.png" />
      <p id="clothes-text">
        ביחידה לובשים חצי ב' ,דיונים וכנסים על ב' מלא לארוחת ערב ניתן לבוא על
        אזרחי
      </p>
      <img id="bin-icon" src="assets/bin.png" />
      <p id="bin-text">
        בימי שני וחמישי יש מסדר במגורים ובחמישי יש מסדר במבנה ביה"ס
      </p>
      <p className="no-camera-text">חל איסור צילום בגבולות היחידה</p>
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information10 = React.forwardRef((props, ref) => {
  return (
    <div className="Information10" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p className="header-base">תל נוף</p>
      <p id="pool-text">
        ימי א',ג',ד
        <br />
        9:00-13:00, 15:00-19:00
        <br />
        'ימי ב', ה<br />
        7:00-8:00, 10:00-13:00, 15:00-19:00
        <br />
        'יום ו<br />
        9:00-13:00, 15:00-18:30
        <br />
        יום שבת
        <br />
        9:00-13:00, 15:00-19:00
        <br />
        בימי ג' יש שחייה לילית: 20:30-22:00
      </p>
      <img id="pool" src="assets/pool.webp" />
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information11 = React.forwardRef((props, ref) => {
  return (
    <div className="Information11" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <br />
      <div className="morning-div">
        <img id="sun-img" src="assets/sun.png" />
        <p className="morning-text">
          בוקר
          <br />
          7:30-8:30
        </p>
      </div>

      <br />
      <div className="morning-div">
        <img id="half-sun-img" src="assets/half-sun.png" />
        <p className="morning-text">
          צהריים
          <br />
          12:30-14:00 :תל נוף
          <br />
          פלמחים: 12:00-13:30
        </p>
      </div>
      <br />
      <div className="morning-div">
        <img id="moon-img" src="assets/moon.png" />
        <p className="morning-text">
          ערב
          <br />
          18:00-19:30
        </p>
      </div>
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information12 = React.forwardRef((props, ref) => {
  return (
    <div className="Information12" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p id="gym-text">
        -תל נוף-
        <br />
        'ימי א'-ד
        <br />
        19:00-22:00
        <br />
        'ימי ב'-ד <br />
        :שעת בנות 19:00-20:00 &#x2640;
        <br />
        'ימי א'-ג <br />
        :שעת בנים 19:00-20:00 &#x2642;
        <br />
        -פלמחים-
        <br />
        7:00-22:00
      </p>
      <img id="gym-img" src="assets/gym.png" />
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information13 = React.forwardRef((props, ref) => {
  return (
    <div className="Information3" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <b className="header-base">פלמחים</b>
      <div className="sub">
        <p className="turanuyot-header">
          <b>רס"ר</b>
        </p>
        <p className="text-toranuyot">
          רס"ר- עושים על חצי ב נמצאים בתורנות שבוע שלם פעמיים בשירות{" "}
        </p>
      </div>
      <div className="sub">
        <p className="turanuyot-header">מטבח</p>
        <p className="text-toranuyot">
          מטבח-עושים על חצי ב
          <br />
          7:00-17:30 |8:30-20:30 | 10:30-22:30
        </p>
      </div>
      <div className="sub">
        <p className="turanuyot-header">שמירות תומכ"ל</p>
        <p className="text-toranuyot">
          שמירות תומכ"ל- שמירה על ב' מלא
          <br />
          10:00-14:00+22:00-2:00
          <br />
          14:00-18:00+2:00-6:00
          <br />
          6:00-10:00+18:00-22:00
        </p>
      </div>
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information14 = React.forwardRef((props, ref) => {
  return (
    <div className="Information4" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <b className="header-base">פלמחים</b>
<br />
      <a
        className="link-driving"
        href="https://drive.google.com/file/d/1HV71YMXPuzIDkyg0U2kHOJWH-Mthy4-5/view"
      >
        קישורים לשאטלים נוסעים בפלמחים
      </a>
      <br />
      <img id="bus-img" src="assets/bus.png" />
      <br />
<br />
      <div id="warning">
        <p id="warning-text">
          ניתן לקחת טרמפים לבסיס אך ורק בהצגת חוגר ושומר סף
        </p>
      </div>
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information15 = React.forwardRef((props, ref) => {
  return (
    <div className="Information9" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p className="header-base">פלמחים</p>
      <img id="clothes-icon" src="assets/clothes.png" />
      <p id="clothes-text">ביחידה לובשים אזרחי</p>
      <img id="bin-icon" src="assets/bin.png" />
      <p id="bin-text">ביום חמישי מסדר בביס"ק ב13:00 במגורים בשעה משתנה</p>
      <p className="no-camera-text">חל איסור צילום בגבולות היחידה</p>
       <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
const Information16 = React.forwardRef((props, ref) => {
  return (
    <div className="Information10" ref={ref}>
       <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p className="header-base">פלמחים</p>
      <p id="pool-text">
        ימי א',ג'
        <br />
        6:00-8:00, 15:00-19:00
        <br />
        'ימי ב', ד', ה<br />
        9:00-13:00, 16:00-20:00
        <br />
        'יום ו<br />
        7:00-8:00, 10:00-13:00, 15:00-19:00
        <br />
        יום שבת
        <br />
        10:00-14:00, 15:00-19:00
      </p>

      <img id="pool" src="assets/pool.webp" />
 <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(2)}/>
    </div>
  );
});
export default function MyBook(props) {
  const book = useRef();

  const [inputText, setInputElement] = useState("");
  const [menu, setMenu] = useState([
    "חדר כושר",
    'חד"א',
    "בריכה",
    "נהלי יחידה",
    'שק"ם',
    'יוהל"ם',
    "טלפונים חשובים",
    'ת"ש',
    "היסעים",
    "תורנויות",
    "רפואה",
    "שלישות",
  ]);
  // const [text, setText] = useState("ここに表示されます。");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };

  // const cars = [
  //   { id: 1, brand: "שלישות" },
  //   { id: 2, brand: "רפואה" },
  //   { id: 3, brand: "תורנויות" },
  //   { id: 4, brand: "היסעים" },
  //   { id: 5, brand: 'ת"ש' },
  //   { id: 6, brand: "טלפונים חשובים" },
  //   { id: 7, brand: 'יוהל"ם' },
  //   { id: 8, brand: 'שק"ם' },
  //   { id: 9, brand: "נהלי יחידה" },
  //   { id: 10, brand: "בריכה" },
  //   { id: 11, brand: "חדר אוכל" },
  //   { id: 12, brand: "חדר כושר" },
  // ];

  //const menu=["חדר כושר",'חד"א',"בריכה","נהלי יחידה",'שק"ם','יוהל"ם',"טלפונים חשובים",'ת"ש',"היסעים","תורנויות","רפואה","שלישות"];
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
          <PageCover>
            <b id="header-book">מידעון לחייל חדש</b>
          </PageCover>
          <Page
            header="תוכן עניינים"
            id="page1"
            number="1"
            book={book}
            showMenu={true}
          ></Page>
          <Page
            header="שלישות"
            showPage={1}
            number="2"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="רפואה"
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>

          <Page
            header="תורנויות"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="תורנויות"
            showPage={4}
            number="5"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="היסעים"
            showPage={5}
            number="6"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="היסעים"
            showPage={6}
            number="7"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header='ת"ש'
            showPage={7}
            number="8"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="טלפונים חשובים"
            showPage={8}
            number="9"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header='יוהל"ם'
            showPage={9}
            number="10"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header='שק"ם'
            showPage={10}
            book={book}
            number="11"
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="נהלי יחידה"
            showPage={11}
            number="12"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="נהלי יחידה"
            showPage={12}
            number="13"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="בריכה"
            showPage={13}
            number="14"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="בריכה"
            showPage={14}
            number="15"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header='חדר אוכל'
            showPage={15}
            book={book}
            number="16"
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <Page
            header="חדר כושר"
            showPage={16}
            number="17"
            book={book}
            showMenu={false}
            setShowBook = {props.setShowBook}
          ></Page>
          <PageCover>
            <h2 className="the-end">הסוף</h2>
          </PageCover>
        </HTMLFlipBook>

        <br></br>
        <br></br>
        {/* <div className="formContainer">
          <input
            className="form-control"
            value={inputText}
            onChange={(e) => setInputElement(e.target.value)}
            type="text"
            placeholder="入力してボタンを押してください。"
          />
          <button className="btn" onClick={printText}>
            表示する
          </button>
        </div> */}
      </div>
    </>
  );
}
