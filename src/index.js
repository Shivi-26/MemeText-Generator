//var React=require("react");    react gives createElement method
import React from "react";

//var ReactDOM=require("react-dom");
import {createRoot} from "react-dom/client";
//import "../src/Component/Navbar.css"
import App from "./App"
//import Contact from "./Contact"
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from "./Component/Navbar";


//ReactDOM.render('kya dikhana hai','kaha dikhana hai','callback func')     render is the method of ReactDOM
//ReactDOM.render(<h1>Hello World!!</h1>,document.getElementById("root"));     //root is the div class in html
//ReactDOM.render(React.createElement("h1",null,"Shivangi"),document.getElementById("root"));

/*1.
const navbar=(
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(navbar,document.getElementById("root"))

//2.
const page=(
    <div>
        <h1>My awesome website in react</h1>
        <h3>Reasons I love react</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative </li>
            <li>it's a hireable skill</li>
            <li>it's actively maintained</li>
        </ol>
    </div>
)
ReactDOM.render(page,document.getElementById("root"))


//3.
const page=(
    <div>
        <img src="./react-logo.png" width="40px"/>
        <h1>Fun Facts about react</h1>
        <ul>
            <li>was first released in 2013</li>
            <li>was originally created by Jordan Walke</li>
            <li>has well over 100k stars on github</li>
            <li>Is maintained by facebook</li>
        </ul>
    </div>
)
ReactDOM.render(page,document.getElementById("root"))


1.Why do we need to 'import React from "react" in our files?
=> React is what defines JSX

2.If i were to console.log(page) 
=>A javascript object. React element that describes what react should eventually add to the real DOM for us.

3. What wrong to this code:
const page=(
    <> //This is missing part
    <h1>Hello</h1>
    <p>This is my website</p>
    </>
)
Here we need our JSX to be nested under a single parent element 

4. What does it mean for something to be "declarative" instead  of "imperative"?
=> Declarative means I can tell the computer what to do 
and expect it to handle the details.Imperative means I need to tell it how to do each step.

5.What does it mean for something to be "imperative"?
We have small pieces that we can put together to make something larger/greater than the individual pieces.

6.What is React Component?
=>A function that returns React elements (which are the object that get created when we return react elements ).
(UI(whats the user can see actually))

7.What wrong with the code?
=>function myComponent(){    // the error is write this function name in camelcase i.e. MyComponent
    return(
        <small>I'm tiny text</small>
    )
}

8.What wrong with this code?
=>function Header(){
    return(
        <header>
           <nav>
              <img src="./react-logo.png" width="40px"/>
            </nav>
        </header>
    )
}
ReactDOM.render(Header().document.getElementById("root"))  //the error is here we have to write <Header()/>
*/

//#Parent-Child Components
//const ul=document.createElement("ul")
//ul.className=""
//import Header from "./Header"
/*
function Head(){
    return(
        <header>
           <nav className='nav'>
               <img src="./react-logo.png" width="40px"/>
               <ul className='nav-items'>
                   <li>Pricing</li>
                   <li>About</li>
                   <li>Contact</li>
               </ul>
            </nav>
        </header>
    )
}


function Footer(){
    return(
        <footer>
          <small>o 20221 Ziroll development. All rights reserved.</small>
        </footer>
    )
}
function MainComponent(){
    return(
        <div>
        <h1>Reason i am excited to learn react</h1>
        <ol>
            <li>Its a popular library, so i'will able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer if i know react</li>
        </ol>
    </div>
    )
}
function Page(){
    return(
        <div>
            <Header/>
            <MainComponent/>
            <Footer/>
        </div>
    )
}
ReactDOM.render(<Page/>,document.getElementById("root"))
*/
const root=createRoot(document.getElementById('root'));
root.render(<App/>);













































