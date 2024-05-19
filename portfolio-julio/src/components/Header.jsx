import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 flex justify-center items-center py-5 ${
        isScrolled ? 'bg-blur' : ''
      } transition-all duration-300 ease-in-out lg:block hidden`}
    >
      <div className="w-full max-w-screen-lg mx-auto px-4">
        <nav className="flex flex-row gap-x-10 justify-center items-center">
          <a href="#inicio">Inicio</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
