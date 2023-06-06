import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spidey from "./spidey";
import Welcome from './Components/Welcome';


function App() {
  const [count, setCount] = useState(1);

  const [count2, setCount2] = useState(100); //use state is the starting point
  const updateCount = () => {
    setCount((count) => {
      return count + 1;
    });
    setCount2((count2) => count2 + 10);
  };

  // const invalidJSX = <div><p>p1</p><p>p2</p></div>

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  const batman = {
    name: "Batman",
    alterEgo: "Bruce Wane",
    catchPhrase: "I am Batman.",
  };

  return (
    //  empty brackets is also <React.Fragment>
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {" "}
        //change from card to variable. then use JS to call the variable. use JS
        by using curly brackets
        {/* <button onClick={() => setCount((count) => count + [0])}> */}
        {/* <div> </div>
        </button> */}
        <button onClick={() => updateCount()}> count is {count} </button>
        <button onClick={() => setCount2((count2) => count2 + 10)}>
          new count is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Spidey superhero= {spiderman} countHere = {count}/>

      <Spidey superhero = {batman} countHere = {count2}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Welcome name='Students'><p>Child Element</p></Welcome>
      <Welcome name2='John'></Welcome>
    </>
  );
}

export default App;
