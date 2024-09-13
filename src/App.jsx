import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WorkFlow from "./components/WorkFlow";
import SubcribePricing from "./components/SubcribePricing";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <WorkFlow />
        <SubcribePricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
