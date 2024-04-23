"use client";

import { useEffect, useState } from "react";
import Menu from "./Menu";
import Image from "next/image";
import clsx from "clsx";

const maxScrollY = 70 / 2;

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = scrollY / maxScrollY;

  return (
    <header
      className={clsx(
        "fixed top-0 w-full h-[70px] items-center flex z-10 animate-fade-down animate-duration-1000 animate-ease-in-out transition-[background-color,box-shadow] duration-300",
        {
          "shadow-[0px_-5px_21px_rgba(40,47,43,0.32)]": scrollY >= maxScrollY,
        }
      )}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity > 1 ? 1 : opacity})`,
      }}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex-shrink-0">
          <Image src="/logo.png" width={108} height={26} alt="Woohelps Logo" />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
