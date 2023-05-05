import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Services />
      <Pricing />
      <Contact />
    </main>
  );
}

export default App;
