import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ComparisonTable from "./components/ComparisonTable";
import About from "./components/About";
import Partner from "./components/Partner";
import Products from "./components/Products";
import ServiceEngineerForm from "./components/ServiceEngineerForm";
import SalesAdvisor from "./components/SalesAdvisor"; // Import SalesAdvisor
import TalkToUs from "./components/TalkToUs";
import SupportForm from "./components/SupportForm";
import LocationMap from "./components/LocationMap";
import LocationMapp from "./components/LocationMapp";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <ComparisonTable />
      <Partner />
      <Products />
      <ServiceEngineerForm />
      <SalesAdvisor /> {/* Add SalesAdvisor here */}
      <TalkToUs />
      <SupportForm />
      <LocationMap />
      <LocationMapp />
      <Footer />
    </div>
  );
}

export default App;
