import React from "react";
import GeneralInformation from "./components/GeneralInformation/GeneralInformation";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto bg-blue-200">
        <Header />
        <GeneralInformation />
      </div>
    );
  }
}

export default App;
