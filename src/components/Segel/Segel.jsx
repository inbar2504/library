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
        <img id="school-icon" src="assets/school-icon.png" />
        <div>{props.children}</div>
      </div>
    </div>
  );
});
const Page = React.forwardRef((props, ref) => {
  const heading = ["כל המידע במרחק נגיעה", ""];
  const book = props.book;
  return (
    <div className="page" ref={ref}>
      <h1 class="header-page">{props.header}</h1>
      <div>
        {props.showPage === 1 ? (
          <Information1
            book={book}
            pageNum={"2"}
            setShowBook={props.setShowBook}
          />
        ) : (
          ""
        )}
        
      </div>
    </div>
  );
});

const Information1 = React.forwardRef((props, ref) => {
  const book = props.book;

  return (
    <div className="Information1" ref={ref}>
      <button className="close-book" onClick={() => props.setShowBook(false)}>
        ✖
      </button>
      <div id="segel">
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
            header="סגל בקליק"
            showPage={1}
            number="2"
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
