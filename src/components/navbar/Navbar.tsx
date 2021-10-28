import "./Navbar.css";
import { CgComponents } from "react-icons/cg";

const Navbar = () => {
  return (
    <div id="NavbarWrapper">
      <div id="NavbarIcon">
        <div id="NavLetter">
          <h1>T</h1>
        </div>

        <p>Software Developer</p>
      </div>
      <div id="NavbarLinks">
        <ul>
          <li>
            <p>
              <CgComponents />
              Overview
            </p>
          </li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div id="SMIcons"></div>
    </div>
  );
};

export default Navbar;
