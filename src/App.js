import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
// import Resume from "./components/Resume";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Services />
      <Pricing />
      {/* <Resume /> */}
      <Contact />
    </main>
  );
}

export default App;
