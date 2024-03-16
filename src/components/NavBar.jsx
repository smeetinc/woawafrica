import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header className="w-full flex justify-between items-center h-fit  px-8 bg-neutral-500 z-20 fixed">
      <div className="flex gap-6 items-center">
        <div>
          <img
            src="/assets/logopng2.png"
            alt="woawafrica logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        <nav>
          <ul className="flex gap-8 font-Lora text-shades-300">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/destinations">
              <li>Destinations</li>
            </Link>
            <Link to="/experiences">
              <li>Experiences</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4"></div>
    </header>
  );
}

export default NavBar;
