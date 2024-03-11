import React from "react";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Commitment from "../components/Commitment";
import Beauty from "../components/Beauty";

function Home() {
  return (
    <div>
      <Hero />
      <Destinations />
      <Commitment />
      <Beauty />
    </div>
  );
}

export default Home;
