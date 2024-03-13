import React from "react";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Commitment from "../components/Commitment";
import Beauty from "../components/Beauty";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Destinations />
      <Commitment />
      <Beauty />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
