import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      id: 1,
      link: "/",
      text: "Home",
    },
    {
      id: 2,
      link: "destinations",
      text: "Destinations",
    },
    {
      id: 3,
      link: "experiences",
      text: "Experiences",
    },
    {
      id: 4,
      link: "about",
      text: "About Us",
    },
    {
      id: 5,
      link: "contact",
      text: "Contact Us",
    },
  ];
  return (
    <header className="px-4 shadow fixed w-screen z-50 bg-neutral-500 h-fit">
      <nav className="flex justify-between lg:justify-normal gap-6 items-center">
        <div>
          <img
            src="/assets/logopng2.png"
            alt="woawafrica logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        <ul className="hidden lg:flex">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="text-lg ml-4 cursor-pointer hover:scale-105 duration-200 text-gray-600 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setMenu(!menu)}
          className="cursor-pointer mr-2 lg:hidden"
        >
          {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
      {menu && (
        <ul className="flex flex-col border-0 lg:hidden absolute top-15 right-0 w-full shadow px-4 bg-neutral-500 capitalize">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="text-center text-lg my-4 mr-4 cursor-pointer hover:scale-105 duration-200 text-gray-600"
            >
              <Link
                onClick={() => setMenu(!menu)}
                to={link}
                smooth
                duration={500}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
