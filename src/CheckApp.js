import React, { useState, useEffect } from "react";
import "./App.css";
import CheckBox from "./CheckBox";

const App = () => {
  const [isChecked, setChecked] = useState(false);
  const [fruite, setFruites] = useState([
    { id: 1, value: "banana", isChecked: false, price: 12 },
    { id: 2, value: "apple", isChecked: false, price: 32 },
    { id: 3, value: "mango", isChecked: false, price: 42 },
    // { id: 4, value: "grapefruit" },
    // { id: 5, value: "grape" },
  ]);

  const [amount, setAmount] = useState([0]);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let count = [0];

  const handleAllChecked = (event) => {
    // useEffect(() => {
    let fruites = fruite;
    fruites.forEach((fruite) => {
      fruite.isChecked = event.target.checked;
      if (fruite.isChecked === true) {
        count.push(fruite.price);
      } else {
        // amount.push(0);
      }
      console.log(fruite.price);
    });
    setFruites(fruites);
    setChecked(!isChecked);
    setAmount(count);
    // console.log(count);
    // console.log(fruites)
    // }, []);
  };

  const handleCheckChieldElement = (event) => {
    console.log(event.target.checked);
    // setChecked(!isChecked);
    let fruites = fruite;
    fruites.forEach((fruite) => {
      if (fruite.value === event.target.value) {
        fruite.isChecked = event.target.checked;
        if (fruite.isChecked == true) {
          count.push(fruite.price);
        } else {
          count.pop(fruite.price);
        }
      }
      setAmount(count);
      setChecked(!isChecked);
      console.log(fruite.value, event.target.value, fruites);
    });
  };

  return (
    <div className="App">
      <h1> Check and Uncheck All Example </h1>
      <input type="checkbox" onChange={handleAllChecked} value="checkedall" />
      Check / Uncheck All
      <ul>
        {fruite.map((fruite, index) => {
          return (
            <>
              <li>
                <input
                  key={index}
                  onChange={handleCheckChieldElement}
                  type="checkbox"
                  checked={fruite.isChecked}
                  value={fruite.value}
                />
                {fruite.value}
              </li>
            </>
            // (<p>total : {fruite.price}</p>)
          );
        })}
      </ul>
      <p>total : {amount.reduce(reducer)}</p>
    </div>
  );
};

export default App;
