import React, { useState } from "react";
import './App.css';
import Hello from "./Hello";
import Greeting from "./Greeting";
import ToggleButton from "./ToggleButton";

function App (){
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John Doe");
  return(
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>

        <p>Count: {count}</p>
        <button onClick={()=> setCount(count+1)}>Increment</button>

        <Hello message= "Hello Props!"/>

        <Greeting name= "John Doe"/>

        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name.."
        />

        <ToggleButton/>
        
      </header>

    </div>
  );
}
export default App;