import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello React 😘");

//JSX
//react element
const jsxHeading = <h1 className="heading">Hello React using JSX Element😊</h1>;

console.log(jsxHeading);
console.log(heading);

//react Component
//1.class based components -- old

//2.functional components -- new

const Title = () => <h2 className="head"> React using JSX Inside</h2>;


var num = 10000

const HeadingComponent = () => (
  <div>
    <Title />
    {num}
    <h2>{200+300}</h2>
    {jsxHeading}
    <h1>React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

root.render(<HeadingComponent />);
