import React from "react";
import TabsProject from "../../TabsProject";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
  return (
    <div id="home">
      <Header />
      <About />
      <TabsProject/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
