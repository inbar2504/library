import React, { useRef, useState, Component } from "react";
import HTMLFlipBook from "react-pageflip";
import "./MyBook.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import HomeIcon from "./HomeIcon";
import { Event } from "@mui/icons-material";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
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
    ["מבנה היחידה", "3"],
    ["שלישות", "4"],
    ["רפואה", "5"],
    ["תורנויות", "6"],
    ["היסעים", "8"],
    ['ת"ש', "10"],
    ["טלפונים חשובים", "11"],
    ['יוהל"ם', "12"],
    ['שק"ם', "13"],
    ["נהלי יחידה", "14"],
    ["בריכה", "16"],
    ["חדר אוכל", "18"],
    ["חדר כושר", "19"],
  ];
  const book = props.book;
  return (
    <div className="page" ref={ref}>
      <h1 class="header-page">{props.header}</h1>
      <div>
        {props.showMenu ? (
          <Table
            heading={heading}
            bodyy={bodyy}
            book={book}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 0 ? (
          <Information0
            book={book}
            pageNum={"0"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 1 ? (
          <Information17
            book={book}
            pageNum={"2"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 2 ? (
          <Information1
            book={book}
            pageNum={"3"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 3 ? (
          <Information2
            book={book}
            pageNum={"4"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 4 ? (
          <Information3
            book={book}
            pageNum={"5"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 6 ? (
          <Information4
            book={book}
            pageNum={"7"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 8 ? (
          <Information5
            book={book}
            pageNum={"9"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 9 ? (
          <Information6
            book={book}
            pageNum={"10"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 10 ? (
          <Information7
            book={book}
            pageNum={"11"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 11 ? (
          <Information8
            book={book}
            pageNum={"12"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 12 ? (
          <Information9
            book={book}
            pageNum={"13"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 14 ? (
          <Information10
            book={book}
            pageNum={"15"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 16 ? (
          <Information11
            book={book}
            pageNum={"17"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 17 ? (
          <Information12
            book={book}
            pageNum={"18"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 5 ? (
          <Information13
            book={book}
            pageNum={"6"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 7 ? (
          <Information14
            book={book}
            pageNum={"8"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 13 ? (
          <Information15
            book={book}
            pageNum={"14"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        {props.showPage === 15 ? (
          <Information16
            book={book}
            pageNum={"16"}
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
      <table className="table-myBook">
        <thead>
          <tr id="header-board">{heading}</tr>
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
          <button className="btns">{val}</button>
        </td>
      ))}
    </tr>
  );
});
const Information0 = React.forwardRef((props, ref) => {
  const book = props.book;

  return (
    <div className="Information0" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <p id="intro-text">
        <span className="special-header1">שלום וברוכים הבאים</span>
        <br />
        <span className="special-header1">לביה"ס לכא"מ</span>
        <br />
        <br />
        ספר זה מוגש בכדי להקל על התאקלמותך ולאפשר קליטה בצורה קלה יותר ביחידה
        <br />
        <br />
        בספר מידע חשוב על הבסיס ונהלי שגרה ביחידה
      </p>
    </div>
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
            <br />
            <img className="applications-images" src="assets/doch.png" />
            <button className="container-button" type="submit"></button>
          </a>
          <br />
        </div>
        <div className="apps">
          <a href="https://zuzu.prat.idf.il/" target="_blank">
            <a className="font-header" target="_blank">
              זוזו
            </a>
            <br />

            <img className="applications-images" src="assets/zuzu.png" />
            <button className="container-button" type="submit"></button>
          </a>
          <br />
        </div>
        <div className="apps">
          <a href="https://idf.mltp.co.il" target="_blank">
            <a className="font-header">אתר כוכבים</a>
            <br />
            <img className="applications-images" src="assets/stars.png" />
            <button className="container-button" type="submit"></button>
          </a>
          <br />
        </div>
        <div className="apps">
          <a
            href="https://www.prat.idf.il/%D7%9B%D7%95%D7%9B%D7%91%D7%99%D7%9D-%D7%A0%D7%A7%D7%95%D7%93%D7%95%D7%AA-%D7%95%D7%93%D7%9C%D7%A7/%D7%9C%D7%95%D7%9E%D7%93%D7%95%D7%AA-%D7%93%D7%A4%D7%99-%D7%A0%D7%97%D7%99%D7%AA%D7%94/%D7%A7%D7%9C%D7%99%D7%98%D7%94-%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C%D7%99%D7%AA/?returnUrl=%2f%d7%9b%d7%95%d7%9b%d7%91%d7%99%d7%9d-%d7%a0%d7%a7%d7%95%d7%93%d7%95%d7%aa-%d7%95%d7%93%d7%9c%d7%a7%2f%d7%9c%d7%95%d7%9e%d7%93%d7%95%d7%aa-%d7%93%d7%a4%d7%99-%d7%a0%d7%97%d7%99%d7%aa%d7%94%2f%d7%a7%d7%9c%d7%99%d7%98%d7%94-%d7%93%d7%99%d7%92%d7%99%d7%98%d7%9c%d7%99%d7%aa%2f"
            target="_blank"
          >
            <a className="font-header">קליטה דיגיטלית</a>
            <br />
            <img className="applications-images" src="assets/solider.png" />
            <button className="container-button" type="submit"></button>
          </a>
          <br />
        </div>
        <div className="apps">
          <a className="font-header">לוח חופשות</a>
          <br />
          <a
            href="https://www.idf.il/%D7%9B%D7%AA%D7%91%D7%95%D7%AA-%D7%95%D7%A2%D7%93%D7%9B%D7%95%D7%A0%D7%99%D7%9D/2024/%D7%99%D7%A0%D7%95%D7%90%D7%A8/%D7%9C%D7%95%D7%97-%D7%97%D7%95%D7%A4%D7%A9%D7%95%D7%AA-%D7%A6%D7%94%D7%9C-2024/"
            target="_blank"
          >
            <img className="applications-images" src="assets/calander.png" />
            <button className="container-button" type="submit"></button>
          </a>
          <br />
        </div>
        <div className="apps">
          <a className="font-header">טופס חול</a>
          <br />
          <a
            href="https://www.prat.idf.il/%D7%94%D7%A9%D7%9B%D7%A8-%D7%A9%D7%9C%D7%99/%D7%AA%D7%95%D7%A6%D7%90%D7%95%D7%AA-%D7%97%D7%99%D7%A4%D7%95%D7%A9/?search=%D7%97%D7%95%22%D7%9C&population="
            target="_blank"
          >
            <img className="applications-images" src="assets/airplane.png" />
            <button className="container-button" type="submit"></button>
          </a>
          <br />
        </div>
      </div>
      <span className="page-number">{props.pageNum}</span>
      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
        <a
          id="afnayot"
          href="https://meditik.medical.idf.il/home"
          target="_blank"
        >
          <p className="medi">מעקב תורים והפניות</p>

          <img className="imgs" id="afnayot" src="assets/hearth.png" />
          <button className="container-button-afnayot" type="submit"></button>
        </a>
        <CopyToClipboard text="0520990110">
          <a id="portal">
            <p className="medi">פורטל מכל הלב -לחץ להעתקה- 0520990110</p>
            <img
              className="imgs"
              id="portal-img"
              src="assets/portal.webp"
              onClick={() => ""}
            />
            <button className="container-button-portal" type="button"></button>
          </a>
        </CopyToClipboard>
        <br />
        <a id="torim" href="https://torim.prat.idf.il/home" target="_blank">
          <p className="medi">זימון תורים</p>

          <img
            className="imgs"
            id="zimun-logo"
            src="assets/healthcare-and-medical.png"
          />
          <button className="container-button-torim" type="submit"></button>
        </a>
      </div>
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
        <p className="text-toranuyot">רס"ר-חצי ב' ומתחילים בשעה 7:30 </p>
      </div>
      <div className="sub">
        <p className="turanuyot-header">מטבח</p>
        <p className="text-toranuyot">מטבח- חצי ב' ומתחילים בשעה 7:15</p>
      </div>
      <div className="sub">
        <p className="turanuyot-header">שמירות תומכ"ל</p>
        <p className="text-toranuyot">
          שמירות תומכ"ל- חצי ב
          <br />
          21:00-23:15
          <br />
          23:15-1:30
          <br />
          1:30-3:45
          <br />
          3:45-6:00
          <br />
          בסופשים -21:00-1:30/1:30-6:00
        </p>
      </div>
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
        target="_blank"
      >
        קישור לשאטלים ממזכרת בתיה
      </a>
      <br />
      <img id="bus-img" src="assets/bus.png" />
      <br />
      <a
        className="link-driving"
        href="https://drive.google.com/file/d/13bDaWAEzdSrPXObHEkz7ZfChsD6RSouV/view"
        target="_blank"
      >
        קישור להסעות מרחבי הארץ
      </a>
      <br />
      <div id="warning">
        <p id="warning-text">
          ניתן לקחת טרמפים לבסיס אך ורק בהצגת חוגר ושומר סף
        </p>
      </div>
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
          <div className="tash-header">מיוחדת כלכלית</div>
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
          <div className="tash-header">מיוחדת אישית</div>
          עבור חייל אשר נתקל בבעיה אישית שאינה ניתנת למענה ע"י מיוחדת מסוג אחר
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
          <h4>קצינת ת"ש כנף-שירה</h4>
          <CopyToClipboard text="0509532202">
            <button className="copy-icon">העתק | 050-9532202</button>
          </CopyToClipboard>

          <h4>משקית ת"ש כנף-רומי</h4>
          <CopyToClipboard text="0506361009">
            <button className="copy-icon">050-6361009 | העתק</button>
          </CopyToClipboard>
        </p>
      </div>
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
        <CopyToClipboard text="052-3334441">
          <p className="important-phones">
            רלשית מפקד יחידה-נויה סאסי
            <button
              className="btns-phones"
              id="copy-btn5"
              onClick={() =>
                (document.getElementById("copy-btn5").innerText = "copied")
              }
            >
              {" "}
              copy{" "}
            </button>
            052-3334441
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0586910910">
          <p className="important-phones">
          רלשית סגן מפקד יחידה- דנה חסון 
            <button
              className="btns-phones"
              id="copy-btn4"
              onClick={() =>
                (document.getElementById("copy-btn4").innerText = "copied")
              }
            >
              {" "}
              copy{" "}
            </button>
            058-6910910
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0587780688">
          <p className="important-phones">
          גאיה שוורץ-קצינת שלישות
            <button
              className="btns-phones"
              id="copy-btn3"
              onClick={() =>
                (document.getElementById("copy-btn3").innerText = "copied")
              }
            >
              {" "}
              copy{" "}
            </button>
058-7780688
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0509119896">
          <p className="important-phones">
            שירה עמרם- נגדת משא"ן
            <button
              className="btns-phones"
              id="copy-btn"
              onClick={() =>
                (document.getElementById("copy-btn").innerText = "copied")
              }
            >
              {" "}
              copy{" "}
            </button>
            050-9119896
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="054-3698400">
          <p className="important-phones">
            גל חן-משקית שלישות
            <button
              className="btns-phones"
              id="copy-btn1"
              onClick={() =>
                (document.getElementById("copy-btn1").innerText = "copied")
              }
            >
              {" "}
              copy{" "}
            </button>
054-3698400
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0587009400">
          <p className="important-phones">
            מבצעים
            <button
              className="btns-phones"
              id="copy-btn2"
              onClick={() =>
                (document.getElementById("copy-btn2").innerText = "copied")
              }
            >
              {" "}
              copy{" "}
            </button>
            07-33636669
          </p>
        </CopyToClipboard>
       
       
      </div>
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
    </div>
  );
});
const Information7 = React.forwardRef((props, ref) => {
  return (
    <div className="Information7" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <img id="img-yoalam" src="assets/hands-hold-heart.png" />

      <p id="yoalam">
        <br />
        <br />
        <br />
        <br />
        <img className="phone" src="assets/icon-phone.png"></img>
        ממונת יוהל”ם מירי שחורי 051-2980576
        <br /> <img className="phone" src="assets/icon-phone.png"></img>
        מהות- 039482600 שלוחה 5 ואז שלוחה 2
      </p>
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
        <b className="header-base">תל נוף</b>
        <br />
        בימי א'-ד': 7:15-16:30
        <br />
        ביום ה': 7:15-15:50
        <br />
        ביום ו': 7:15-12:30
        <br />
        <br />
        <b className="header-base">פלמחים</b>
        <br />
        9:00-21:00
        <br />
        עם הפסקות משתנות
      </div>
      {/* <img id="shekem-img" src="assets/caveret-icon.png" /> */}
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
      <img id="pool" src="assets/pool-icon.png" />
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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

      {/* <br /> */}
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
      {/* <br /> */}
      <div className="morning-div">
        <img id="moon-img" src="assets/moon.png" />
        <p className="morning-text">
          ערב
          <br />
          18:00-19:30
        </p>
      </div>
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
          רס"ר- חצי ב' נמצאים בתורנות שבוע שלם פעמיים בשירות{" "}
        </p>
      </div>
      <div className="sub">
        <p className="turanuyot-header">מטבח</p>
        <p className="text-toranuyot">
          'מטבח- חצי ב
          <br />
          7:00-17:30 |8:30-20:30 | 10:30-22:30
        </p>
      </div>
      <div className="sub">
        <p className="turanuyot-header">שמירות תומכ"ל</p>
        <p className="text-toranuyot">
          שמירות תומכ"ל-ב' מלא
          <br />
          10:00-14:00+22:00-2:00
          <br />
          14:00-18:00+2:00-6:00
          <br />
          6:00-10:00+18:00-22:00
        </p>
      </div>
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
        target="_blank"
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
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
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

      <img id="pool" src="assets/pool-icon.png" />
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
    </div>
  );
});
const Information17 = React.forwardRef((props, ref) => {
  return (
    <div className="Information17" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>

      <img id="mivne-img" src="./assets/newSoldier/mivne.png" />
      <span className="page-number">{props.pageNum}</span>

      <HomeIcon setPageToMenu={() => props.book.current.pageFlip().flip(3)} />
    </div>
  );
});

export default function MyBook(props) {
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
            <b id="header-book">מידעון לחייל חדש</b>
          </PageCover>
          <Page
            header="מבוא"
            showPage={0}
            number="0"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="תוכן עניינים"
            id="page1"
            number="1"
            book={book}
            showMenu={true}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="מבנה היחידה"
            showPage={1}
            number="2"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="שלישות"
            showPage={2}
            number="3"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="רפואה"
            showPage={3}
            number="4"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>

          <Page
            header="תורנויות"
            showPage={4}
            number="5"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="תורנויות"
            showPage={5}
            number="6"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="היסעים"
            showPage={6}
            number="7"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="היסעים"
            showPage={7}
            number="8"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header='ת"ש'
            showPage={8}
            number="9"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="טלפונים חשובים"
            showPage={9}
            number="10"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header='יוהל"ם'
            showPage={10}
            number="11"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header='שק"ם'
            showPage={11}
            book={book}
            number="12"
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="נהלי יחידה"
            showPage={12}
            number="13"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="נהלי יחידה"
            showPage={13}
            number="14"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="בריכה"
            showPage={14}
            number="15"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="בריכה"
            showPage={15}
            number="16"
            book={book}
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="חדר אוכל"
            showPage={16}
            book={book}
            number="17"
            showMenu={false}
            setShowBook={props.setShowBook}
          ></Page>
          <Page
            header="חדר כושר"
            showPage={17}
            number="18"
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
