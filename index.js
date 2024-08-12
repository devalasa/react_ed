// import React from "react";
// import ReactDOM from "react-dom/client";

// ReactDOM.render(
//   <ul>
//     <li>A. Richard</li>
//     <li>B. Desmond</li>
//     <li>C. Adams</li>
//   </ul>,
//   document.getElementById("root")
// );

// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );
// ReactDOM.render(page, document.getElementById("root"));

// const navbar = (
//   <nav>
//     <h1>Emina</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact Us</li>
//     </ul>
//   </nav>
// );

// // ReactDOM.render(page, document.getElementById("root"));
// ReactDOM.createRoot(
//   ReactDOM.render(navbar, document.getElementById("root"))
// ).render(navbar);

const page = (
  <div>
    <h1>My awesome website in react</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);

ReactDOM.createRoot(
  ReactDOM.render(page, document.getElementById("root"))
).render(page);

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
