import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [start,setStart]=useState(false);
  function hi(){
    setStart(true);
  }
  return (
    <div id="main">
      <button id="click" onClick={hi}>click me</button>
      {start?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy</p>:null}
    </div>
  );

  //  let [start,setStart]=useState(false);

	// function hi(){
	// 	setStart(true);
	// }
  //   	return(
  //   		<div id="main">
	// 			{ /* Do not remove this main div!! */ }
	// 			<button id="click" onClick={hi} >click me</button>
	// 			{start?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes
  //         me so happy</p>:null}
				
  //   		</div>
  //   	);
    

}


export default App;
