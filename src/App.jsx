import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WorkFlow from "./components/WorkFlow";
import SubcribePricing from "./components/SubcribePricing";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <WorkFlow />
        <SubcribePricing />
      </div>
    </>
  );
};

export default App;
