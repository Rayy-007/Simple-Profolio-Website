import React from "react";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import "./navbar.css";
import { logo1 } from "../Image";

function Navbar() {
  const [open, setOpen] = React.useState(false); // For Mobile Navbar is open or not
  const [active, setActive] = React.useState("#Home"); // For determing the active the Navbar Link

  // Opened Navbar Sytling
  const styles = {
    transform: open && `translateX(0%)`,
  };

  //  Navbar Links Name
  const navLinksName = [
    "Home",
    "Skills",
    "AboutMe",
    "Projects",
    "Testimonials",
  ];

  // Creating Dynamic Active Nabar Links
  const navLinks = navLinksName.map((link) => (
    <li key={link}>
      <a
        className={active == `#${link}` ? "active" : ""}
        href={`#${link}`}
        onClick={() => setActive(`#${link}`)}
      >
        {link}
      </a>
    </li>
  ));

  return (
    <div className="nav-con">
      <div className="navbar flex-row container">
        <a className="logo flex-row" href="#home">
          <img src={logo1} alt="Logo" />
          <h4>Khant</h4>
        </a>

        <ul style={styles} className="links flex-row">
          {navLinks}
        </ul>

        <div className="cta">
          <a href="#Contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        {/* Mobile Close and Menu */}
        <TiThMenuOutline onClick={() => setOpen(true)} className="menu" />

        {open && <ImCross onClick={() => setOpen(false)} className="close" />}
      </div>
    </div>
  );
}

export default Navbar;
