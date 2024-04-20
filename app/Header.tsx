import React from "react";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className="shadow-[0px_-5px_21px_rgba(40,47,43,0.32)]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3>Woohelps</h3>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
