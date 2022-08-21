
// import { render } from "@testing-library/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import  ReactDOM from "react-dom";
import Header from "./component/Header1";
import Paragraph from "./component/Paragraph";
import Header2 from "./component/Header2";
import List from "./component/List";
import NavBar from './component/NavBar';
import  "./index.css"
function App(){
  return(
    <>
    <NavBar/>
      <Header/>
      <Paragraph/>
      <Header2/>
      <List/>
    </>

  );
}
// ReactDOM.render(<h2>hi </h2>, document.getElementById("root"));

ReactDOM.render(
  
<App /> 
, document.getElementById("root")); //(what,where)
