import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./MyBook.css";
import 'intro.js/introjs.css';

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  console.log(props.menu);
  // const list=["חדר כושר",'חד"א',"בריכה","נהלי יחידה",'שק"ם','יוהל"ם',"טלפונים חשובים",'ת"ש',"היסעים","תורנויות","רפואה","שלישות"];
  return (
    <div className="page" ref={ref}>
      <h1>{props.header}</h1>
      {/* <h1>{props.menu}</h1> */}
       <dl className="dl1">
          {props.menu.map((option, index) => (
            <dt key={index}>{option}</dt>
            
          ))}
      </dl>
      <dl className="dl2">
          {props.menu.map((option, index) => (
            <dt key={index}>{index}</dt>

          ))}
      </dl>
      {/* {menu.map(name=> (
          <ul>
            {name}
          </ul>
      ))} */}
      {/* <p>{props.children}</p> */}
      {/* {for(let i=0;i<12;i++) 
        <ul>{props.menu}</ul>
      } */}
      {/* <p>{props.number}</p>
        <ul>
          {props.menu.map((option) => (
            <li key={option.id}>{option.brand}</li>
          ))}
        </ul> */}
     
      {/* <p>{cars.map((car) => <Car key={car.id} brand={car.brand} />)}</p> */}
      {/* <ul>
      {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul> */}
      {/* for i in range(11)
        <li>{ props.menu }</li>
      endform   */}
      {/* <p></p> */}
     
    </div>
  );
});

export default function MyBook(props) {
  const book = useRef();
  // this.pageFlip.getPageFlip().flipNext();
  const [inputText, setInputElement] = useState("");
  const [menu, setMenu] = useState(["חדר כושר",'חד"א',"בריכה","נהלי יחידה",'שק"ם','יוהל"ם',"טלפונים חשובים",'ת"ש',"היסעים","תורנויות","רפואה","שלישות"]);
  const [text, setText] = useState("ここに表示されます。");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };
  const cars = [
    {id: 1, brand: 'שלישות'},
    {id: 2, brand: 'רפואה'},
    {id: 3, brand: 'תורנויות'},
    {id: 4, brand: 'היסעים'},
    {id: 5, brand: 'ת"ש'},
    {id: 6, brand: 'טלפונים חשובים'},
    {id: 7, brand: 'יוהל"ם'},
    {id: 8, brand: 'שק"ם'},
    {id: 9, brand: 'נהלי יחידה'},
    {id: 10, brand: 'בריכה'},
    {id: 11, brand: 'חדר אוכל'},
    {id: 12, brand: 'חדר כושר'}
  ];
  //const menu=["חדר כושר",'חד"א',"בריכה","נהלי יחידה",'שק"ם','יוהל"ם',"טלפונים חשובים",'ת"ש',"היסעים","תורנויות","רפואה","שלישות"];
  return (
    <>
     {/* <button onClick={() => book.current.pageFlip().flip(3)}>Next page</button> */}
      <div>
     
        <HTMLFlipBook
          width={550}
          height={650}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}
          flippingTime={1000}
          style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
          drawShadow={true}
          ref={book}
        >
        
          <PageCover style={{color: "pink"}} className="color-cover"><b id="header-book">קליטת חייל חדש</b></PageCover>
          <Page header = "תוכן עניינים" number="1" menu={menu}>
            <hr></hr>
            <p contentEditable="true">ここは編集可能です</p>
          </Page>
          {/* <Page number="2">
            <hr></hr>
            <p>{text}</p>
          </Page>
          <Page number="3">
            <hr></hr>
          </Page>
          <Page number="4">
            <hr></hr>
          </Page> */}
          <PageCover className="color-cover">see you</PageCover>
        </HTMLFlipBook>
        {/* <ul>
              {cars.map((car) => <Page key={car.id} brand={car.brand} />)}
            </ul> */}
        <br></br>
        <br></br>
        {/* <div className="formContainer">
          <input
            class="form-control"
            value={inputText}
            onChange={(e) => setInputElement(e.target.value)}
            type="text"
            placeholder="入力してボタンを押してください。"
          />
          <button class="btn" onClick={printText}>
            表示する
          </button>
        </div> */}
        
      </div>
    </>
  );
}
