import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Pagecontent from "./components/pagecontent/Pagecontent";
function App() {
  return (
    <>
      <div className="sidemenuandpagecontent">
        <Navbar />
        <Pagecontent />
        {/* <Footer /> */}
      </div>
      <div className="footer"></div>
    </>
  );
  // reportWebVitals();
}

export default App;
