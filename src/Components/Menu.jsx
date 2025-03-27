import React from "react";
import Logo from "../img/logo.png";
import "../Components/Menu.css";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
function Menu() {
  return (
    <menu>
      <img src={Logo} alt="" />

      <ul id="mainMenu">
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
