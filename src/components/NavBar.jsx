import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header className="w-full flex justify-between items-center h-fit py-4 px-8 bg-neutral-500 z-20 fixed">
      <div className="flex gap-6">
        <h1>LOGO</h1>
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

      <div className="flex items-center gap-4">
        <button>Button</button>
        <button>Button</button>
      </div>
    </header>
  );
}

export default NavBar;
