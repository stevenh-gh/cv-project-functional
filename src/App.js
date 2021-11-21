import React from "react";
import Header from "./components/Header/Header";
import Personal from "./components/Personal/Personal";

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto bg-blue-200">
        <Header />
        <Personal />
      </div>
    );
  }
}

export default App;
