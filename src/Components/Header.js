import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="nhk"
          className="header_logo"
        />
      </Link>
      <div className="header_location">
        <div className="header_address">
          <LocationOnIcon className="header_locationIcon" />
        </div>

        <div className="header_address">
          <span className="header_option1">Hello</span>
          <span className="header_option2">Select your address</span>
        </div>
      </div>
      <div className="header_search">
        <input className="header_SearchInput" type="text" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option1">Hello Guest</span>
          <span className="header_option2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_cart">
            <ShoppingBasketIcon className="header_cartIcon" />
            <span className="header_option2 header_cartCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
