"use client";
import { useEffect, useState } from "react";

function Header() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScrolled);

  return (
    <>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } fixed top-0 z-50 transition-all duration-500`}
        style={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : "",
        }}
      >
        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto">
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#43472e] group-hover:text-black:`}
                href="/#home"
                onClick={() => setSelectedIndex(0)}
              >
                Home
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex === 1 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex === 1 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black:`}
                href="/#portfolio"
                onClick={() => setSelectedIndex(1)}
              >
                Portfolio
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex === 2 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex === 2 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black:`}
                href="/#about-me-component"
                onClick={() => setSelectedIndex(2)}
              >
                About me
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex === 3 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex === 3 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black:`}
                href="/#about-me-component"
                onClick={() => setSelectedIndex(3)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
