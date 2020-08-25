import React, { Component } from "react";
import "./App.css";
import CheckBox from "./CheckBox";
import CheckApp from "./CheckApp";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fruites: [
  //       { id: 1, value: "banana", isChecked: false },
  //       { id: 2, value: "apple", isChecked: false },
  //       { id: 3, value: "mango", isChecked: false },
  //       { id: 4, value: "grap", isChecked: false },
  //     ],
  //   };
  // }

  // handleAllChecked = (event) => {
  //   let fruites = this.state.fruites;
  //   fruites.forEach((fruite) => (fruite.isChecked = event.target.checked));
  //   this.setState({ fruites: fruites });
  //   console.log(fruites);
  // };

  // handleCheckChieldElement = (event) => {
  //   let fruites = this.state.fruites;
  //   fruites.forEach((fruite) => {
  //     if (fruite.value === event.target.value)
  //       fruite.isChecked = event.target.checked;
  //   });
  //   this.setState({ fruites: fruites });
  //   console.log(fruites);
  // };

  render() {
    return (
      <div className="App">
        {/* <h1> Check and Uncheck All Example </h1>
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />{" "}
        Check / Uncheck All
        <ul>
          {this.state.fruites.map((fruite, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            );
          })}
        </ul> */}
        <CheckApp />
      </div>
    );
  }
}

export default App;
