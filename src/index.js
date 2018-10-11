import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

/* ReactDOM.render(
  <div>
    <h1>hello React</h1>
  </div>,
  document.getElementById("index")
); */

/* function Plan(props) {
  return (
    <div className="container">
      <div className="title-part" id={props.colorId}>
        <h1>{props.title}</h1>
        <h5>{props.subtitle}</h5>
      </div>
      <div className="content-part">
        <ul>
          <li>{props.descriptions[0]}</li>
          <li>{props.descriptions[1]}</li>
          <li>{props.descriptions[2]}</li>
        </ul>
      </div>
      <div className="btn-part">
        <button className="btn">Select Plan</button>
      </div>
    </div>
  );
}

function PlanSelector() {
  return (
    <div id="wrapper">
      <Plan colorId="bg-color1" title="Career" subtitle="Get hired and get ahead" descriptions={["This is a text", "See how you compare to other applicants", "Learn new skills advance your career"]} />
      <Plan colorId="bg-color2" title="Business" subtitle="Grow your network" descriptions={["This is a text", "Promote and grow your business", "Learn new skills to enhance your professionla brand"]} />
      <Plan colorId="bg-color3" title="Sales" subtitle="Unlock sakes opportunities" descriptions={["This is a text", "Get real-time insights for warm outreach", "Build trusted relationships with customers and prospects"]} />
      <Plan colorId="bg-color4" title="Hiring" subtitle="Find and hire top talent" descriptions={["This is a text", "Contact top talent directly", "Build relationships with prospective hires"]} />
    </div>
  )
}; */

function Plan(props) {
  return (
    <li className="option">
      <div className="title-part" id={props.colorId}>
        <h1>{props.title}</h1>
        <h5>{props.subtitle}</h5>
      </div>
      <div className="content-part">
        <ul className="explain">
          <li className="explain-list">{props.descriptions[0]}</li>
          <li className="explain-list">{props.descriptions[1]}</li>
          <li className="explain-list">{props.descriptions[2]}</li>
        </ul>
      </div>
      <div className="btn-part">
        <button className="btn">Select Plan</button>
      </div>
    </li>
  );
}

function PlanSelector() {
  return (
    <div id="wrapper">
      <ul id="container-options">
        <Plan colorId="bg-color1" title="Career" subtitle="Get hired and get ahead" descriptions={["This is a text", "See how you compare to other applicants", "Learn new skills advance your career"]} />
        <Plan colorId="bg-color2" title="Business" subtitle="Grow your network" descriptions={["This is a text", "Promote and grow your business", "Learn new skills to enhance your professionla brand"]} />
        <Plan colorId="bg-color3" title="Sales" subtitle="Unlock sakes opportunities" descriptions={["This is a text", "Get real-time insights for warm outreach", "Build trusted relationships with customers and prospects"]} />
        <Plan colorId="bg-color4" title="Hiring" subtitle="Find and hire top talent" descriptions={["This is a text", "Contact top talent directly", "Build relationships with prospective hires"]} />
      </ul>
    </div>
  )
};
ReactDOM.render(<PlanSelector />, document.getElementById("index"));


