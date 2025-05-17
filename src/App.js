import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CollectionPreview from "./components/CollectionPreview";
import Footer from "./components/Footer";
import "./App.css";
import LogoBar from "./components/LogoBar";

function App() {
  return (
    <div className="App">
      <LogoBar />
      <Header />
      <Hero />
      <CollectionPreview />
      <Footer />
    </div>
  );
}

export default App;
