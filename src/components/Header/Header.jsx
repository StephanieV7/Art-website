import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavModal from "./MobileNavModal";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const onClick = () => {
    setShowMobileNav(true);
  };

  const onCloseMobileNavModal = () => {
    console.log('closed');
    setShowMobileNav(false);
  };
  return (
    <header>
      <div>
        <button
          className="toggleButton"
          type="button"
          onClick={onClick}
        >
          <img
            src="src/assets/mobile_menu_icon.png"
            alt="Toggle Button Graphic"
          />
        </button>
      </div>
      {showMobileNav && (
            <MobileNavModal
              show={showMobileNav}
              onCloseMobileNavModal={onCloseMobileNavModal}
            />
          )}
      <h1 className="headerHeadline">Stephanie V. Fine Art</h1>
      <nav className="mainNav">
        <Link to={"/"} className="mainNavItem">
          Home
        </Link>
        <Link to={"/artworks"} className="mainNavItem">
          Artworks
        </Link>
        <Link to={"/about"} className="mainNavItem">
          About me
        </Link>
        <Link to={"/contact"} className="mainNavItem">
          Contact
        </Link>
      </nav>
    </header>
  );
}
