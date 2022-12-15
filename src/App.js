import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Refresh from "./refresh.png";



function App() {

  
  const [easy, setEasy] = useState(Math.floor(Math.random()*101));
  function handleClickEasy(value) {
    if (value > 100 || value < 0) {
      alert("Enter value between 0-100");
    } else {
      console.log(value);
      setEasy(2 * value);
    }
  }

  const [med, setMed] = useState(Math.floor(Math.random()*101));
  function handleClickMed(value) {
    if (value > 100 || value < 0) {
      alert("Enter value between 0-100");
    } else {
      console.log(value);
      setMed(2 * value);
    }
  }

  const [hard, setHard] = useState(Math.floor(Math.random()*101));
  function handleClickHard(value) {
    if (value > 100 || value < 0) {
      alert("Enter value between 0-100");
    } else {
      console.log(value);
      setHard(2 * value);
    }
  }

  return (
    <div className="App">
      <body id="mainBody">
        <div className="easy">
          <p>{easy / 2}% </p>
          <div id="bar-container">
            <motion.div
              id="bar"
              animate={{
                height: `${easy}px`,
              }}
              transition={{
                duration: 1,
              }}
            ></motion.div>
          </div>
          <p>Easy</p>
          <input id="input" type="number"></input>
          <button
            id="refreshBtn"
            onClick={() =>
              handleClickEasy(document.getElementById("input").value)
            }
          >
            <img src={Refresh}></img>
          </button>
        </div>

        <div className="medium">
          <p>{med / 2}% </p>
          <div id="bar-container">
            <motion.div
              id="bar2"
              animate={{
                height: `${med}px`,
              }}
              transition={{
                duration: 1,
              }}
            ></motion.div>
          </div>
          <p>Medium</p>
          <input id="input2" type="number"></input>

          <button
            id="refreshBtn"
            onClick={() =>
              handleClickMed(document.getElementById("input2").value)
            }
          >
            <img src={Refresh}></img>
          </button>
        </div>

        <div className="hard">
          <p>{hard / 2}% </p>
          <div id="bar-container">
            <motion.div
              id="bar3"
              animate={{
                height: `${hard}px`,
              }}
              transition={{
                duration: 1,
              }}
            ></motion.div>
          </div>
          <p>Hard</p>
          <input id="input3" type="number"></input>
          <button
            id="refreshBtn"
            onClick={() =>
              handleClickHard(document.getElementById("input3").value)
            }
          >
            <img src={Refresh}></img>
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
