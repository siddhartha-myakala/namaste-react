import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Siddu is here!!!🚀</h1>;
const Navbar = () => {
  return (
    <>
      {heading}
      <ol className="navbar">
        <li className="list">Home</li>
        <li className="list">About</li>
        <li className="list">Careers</li>
      </ol>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Navbar());
