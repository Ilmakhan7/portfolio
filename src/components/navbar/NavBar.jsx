import "./navBar.css";
import { useState } from "react";
import Scrollspy from "react-scrollspy";
import navData from "../../Object Files/nav";
import Ilma from "../../assets/profile.jpg";

const NavBar = ({ onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  return (
    <nav className="nav-cont">
      <a href="/" className="logo">
        <img
          src={Ilma}
          alt="Ilma"
          className=" circle-card-cont logo_img"
        />
        <span className="logo_text">

        Ilma Khan</span>
      </a>
      <div className="switch" title="Toggle Theme" onClick={onClick}>
        {children}
      </div>
      <>
        <Scrollspy
          items={["home", "about", "project", "skill", "contact"]}
          currentClassName="active"
          className={`links-container ${isOpen && "show-tab"} `}
          onClick={handleIsOpen}
        >
                {navData.map((items) => {
            return (
              <li key={items.id}>
                <a
                  href={`${items.link}`}
                  className="flex links"
                  onClick={handleIsOpen}
                >
                  <i className={items.icon}></i>
                  {items.description}
                </a>
              </li>
            );
          })}
          
        </Scrollspy>
      </>

      <div
        className={`tab-icon ${isOpen && "dark-tab-icon"} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fa-solid fa-x x"></i>
        ) : (
          <i className="fa-solid fa-bars "></i>
        )}
      </div>
    </nav>
  );
};

export default NavBar;