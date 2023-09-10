import "./Footer.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import home_icon from "../../assets/home_icon.svg";
import ticket_icon from "../../assets/ticket_icon.svg";
import about_icon from "../../assets/about_icon.svg";
import event_icon from "../../assets/event_icon.svg";
import profile_icon from "../../assets/profile_icon.svg";
import home_icon_active from "../../assets/home_icon_active.svg";
import ticket_icon_active from "../../assets/ticket_icon_active.svg";
import about_icon_active from "../../assets/about_icon_active.svg";
import event_icon_active from "../../assets/event_icon_active.svg";
import profile_icon_active from "../../assets/profile_icon_active.svg";
import am_logo from "../../assets/am_logo.svg";

export default function Footer() {
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const routePath = location.pathname;
  useEffect(() => {
    if (
      routePath === "/signup" ||
      routePath === "/login" ||
      routePath === "/verify" ||
      routePath === "/wallet-create"
    ) {
      setVisible(false);
      console.log("hi");
    } else setVisible(true);
  }, [location]);

  return visible ? (
    <div className="footer">
      <div className="footer_navcontainer p-3">
        <Link to="/" className="footer_navcontainer_tabcontainer">
          <img
            src={routePath === "/" ? home_icon_active : home_icon}
            alt="home"
          />
          <div style={{ color: routePath === "/" ? "#850885" : "#ffffff" }}>
            Home
          </div>
        </Link>
        {/* <Link to="/mytickets" className="footer_navcontainer_tabcontainer">
          <img
            src={routePath === "/mytickets" ? ticket_icon_active : ticket_icon}
            alt="ticket"
          />
          <div
            style={{
              color: routePath === "/mytickets" ? "#850885" : "#ffffff",
            }}
          >
            My Tickets
          </div>
        </Link> */}
        <Link to="/message" className="footer_navcontainer_tabcontainer">
          <img
            src={routePath === "/message" ? event_icon_active : event_icon}
            alt="event"
          />
          <div
            style={{ color: routePath === "/message" ? "#850885" : "#ffffff" }}
          >
            Send Message
          </div>
        </Link>
        <Link to="/directory" className="footer_navcontainer_tabcontainer">
          <img
            src={routePath === "/directory" ? profile_icon_active : profile_icon}
            alt="profile"
          />
          <div
            style={{ color: routePath === "/directory" ? "#850885" : "#ffffff" }}
          >
            Directory
          </div>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
}
