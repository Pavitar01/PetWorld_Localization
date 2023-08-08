import React, { useEffect, useState } from "react";
import "../css/nav.css";
import "../css/Select.css";
import logo from "../Assets/Icons/Logo.svg";

const NavBar = ({ setLang }) => {
  const [val, setVal] = useState("en");
  const GoogleSignIin = () => {};
  useEffect(() => {
    document.querySelector("html").lang = val;
    setLang(val);
  }, [val]);
  return (
    <div class="topnav" id="myTopnav">
      <a href="#home" class="active">
        <img src={logo} alt="logo" style={{ paddingLeft: "20px" }} />
      </a>
      <div className="right">
        <div class="custom-select">
          <select onChange={(e) => setVal(e.target.value)}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
        <a
          href="#contact"
          style={{
            backgroundColor: "#3366FF",
            color: "white",
            width: "120px",
            borderRadius: "10px",
          }}
          onClick={GoogleSignIin}
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
