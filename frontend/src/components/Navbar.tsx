import React from "react";
import { ConnectWallet } from "./ConnectWallet";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">BioKey</div>
      <div className="nav-links">
        <ConnectWallet />
      </div>
    </nav>
  );
};
