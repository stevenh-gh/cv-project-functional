import React from "react";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Personal from "./components/Personal/Personal";

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto bg-blue-200">
        <Header />
        <Personal />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
