import "./HomeScreen.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import location_icon from "../../assets/location_icon.svg";
import seat_icon from "../../assets/seat_icon.svg";
import Api from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import rishabhtele from "../../assets/rishabhkeshan.jpg";

function HomeScreen() {
  const [tempData, setTempData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("jwt")) {
  //     const api = new Api(localStorage.getItem("jwt"));
  //     (async () => {
  //       const resp = await api.getProfile();
  //       if (resp.status) {
  //         if (resp.data.is_new) {
  //           history.push("/wallet-create");
  //         } else {
  //           localStorage.setItem("deto", JSON.stringify(resp.data));
  //           const data = await api.getAllEvents();
  //           if (data.data) {
  //             setTempData(data.data);
  //           }

  //           setShowLoading(false);
  //         }
  //       }
  //     })();
  //   } else {
  //     setShowLoading(false);
  //   }
  // }, []);
  // const [dashboardModal, setDashboardModal] = useState(false);
  // const handleCloseSelectDashboard = () => {
  //   setDashboardModal(false);
  // };
  const history = useHistory();
  return (
    <article
      style={{ filter: showLoading ? "blur(10px)" : "none" }}
      className="homescreen"
    >
        <img src={rishabhtele} alt="Landing Banner"/>
    </article>
  );
}

export default HomeScreen;
