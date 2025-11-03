import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () => (
// <h1 className="head" tabIndex="5">
//     Namaste React using JSX
//     </h1>
// );

const title = () => (
<h1 className="head" tabIndex="5">
    Namaste React using JSX
    </h1>
);


const HeadingComponent = () => (
    <div id="container">
        {title()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)


// const heading = React.createElement("h1",
//     {id:"heading"},
//     "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);