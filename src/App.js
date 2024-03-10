import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="contact" element={<Contact />} />
        <Route path="experiences" element={<Experiences />} />

        {/* protected routes */}

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
