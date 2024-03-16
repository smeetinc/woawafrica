import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <main className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
