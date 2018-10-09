import * as React from "react";
import "./App.css";
import Status from "./components/Status";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1>Hallo Berlin</h1>
        <hr />
        <Status />
      </div>
    );
  }
}

export default App;
