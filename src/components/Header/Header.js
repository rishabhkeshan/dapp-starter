import "./Header.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useHistory } from "react-router-dom";
import nftixLogo from "../../assets/nftix_logo_white.svg";
import logout_icon from "../../assets/logout_icon.svg";
import useWindowSize from "../../utils/windowSize";
import ViewportPopup from "./ViewportPopup";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const routePath = location.pathname;
  const size = useWindowSize();
  const [viewPopup,setViewPopup]= useState(size.width>900);
  useEffect(()=>{setViewPopup(size.width > 900);},[size.width])
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );

  const username = localStorage.getItem("username");

  useEffect(() => {
    setLoggedIn(localStorage.getItem("jwt") !== null);
    if (
      routePath === "/signup" ||
      routePath === "/login" ||
      routePath === "/verify" ||
      routePath === "/wallet-create"
    ) {
      setVisible(false);
      console.log("hi");
    } else setVisible(true);
  }, [location, localStorage]);

  return (
    <div className="header">
      <ViewportPopup viewPopup={viewPopup}/>
      <div className="header_logo">
        <a href="/">
          <img className="header_logo_img" src={nftixLogo} alt="nftix logo" />
        </a>
      </div>
    </div>
  );
}
