import "./EventScreen.scss";
import React, { useEffect, useState } from "react";
import location_icon from "../../assets/location_icon.svg";
import seat_icon from "../../assets/seat_icon.svg";
import QRScanModal from "./QRScanModal";
import Loader from "../../components/Loader/Loader";
import Api from "../../utils/api";
import { useLocation } from "react-router-dom";

export default function EventScreen({ match }) {
  const [tempData, setTempData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const location = useLocation();
  const routePath = location.pathname;
  const eventID = routePath.substring(routePath.lastIndexOf("/") + 1);
  const api = new Api(localStorage.getItem("jwt"));
  const [event, setEvent] = useState({
    event_info: {
      _id: "",
      name: "",
      location: "",
      description:
        "",
      banner_url: "",
      category: "",
      organiser: "",
      nft: "",
      tickets_available: 0,
    },
    date: "Happening Now",
    nft_info: {
      _id: "",
      price: "10",
      toWallet: "mntl",
      event: "6368b96362f2b983959b2764",
      toId: "devnet-mantle-1.cGn3HMW8M3t5gMDv-wXa9sseHnA=|YkM2ZT8UEjwntQMy3_cBN1m0dRs=",
      fromId:
        "devnet-mantle-1.cGn3HMW8M3t5gMDv-wXa9sseHnA=|YkM2ZT8UEjwntQMy3_cBN1m0dRs=",
      classificationID: "devnet-mantle-1.j0Uuu1ZA7krYEQ036oQVnzmkQVs=",
      mutableProperties: "burn:H|1,lock:H|1",
      immutableProperties:
        "URI:S|aHR0cHM6Ly9kZW1vLWFzc2V0bWFudGxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1ZZVRlZ1QyUWhaUFdnQTJxeUJUYW1tWDNpd1AyVllyaHcxaWo3OG5naWc5ei9Nb2JDb29sLnBuZw=,name:S|YXNkZg=,description:S|YXNkZg=,category:S|YXJ0cw",
      mutableMetaProperties: "propertyName:S|AA=,type:S|asset",
      immutableMetaProperties:
        "URI:S|aHR0cHM6Ly9kZW1vLWFzc2V0bWFudGxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1ZZVRlZ1QyUWhaUFdnQTJxeUJUYW1tWDNpd1AyVllyaHcxaWo3OG5naWc5ei9Nb2JDb29sLnBuZw=,name:S|YXNkZg=,description:S|YXNkZg=,category:S|YXJ0cw",
      name: "",
      description: "",
      claimable: [""],
      image:
        "",
      org: "",
      properties: [
        {
          propertyName: "",
          propertyValue: "",
        },
      ],
    },
  });
  useEffect(() => {
    (async () => {
      const eventResponse = await api.getEvent(eventID);
      if (eventResponse.status) {
        setShowLoading(false);
        setEvent(eventResponse.data);
      } else {
        setShowLoading(false);
        console.log("api error");
      }
    })();
  }, []);
  const [showScanner, setShowScanner] = useState(false);
  return (
    <article
      style={{ filter: showScanner ? "blur(10px)" : "none" }}
      className="eventscreen"
    >
      <QRScanModal showScanner={showScanner} setShowScanner={setShowScanner} />
      <section className="eventscreen_maincontainer">
        <div className="eventscreen_eventcontainer">
          <div className="eventscreen_eventcontainer_event">
            <div className="flex justify-between">
              <div className="eventscreen_eventcontainer_event_detailscontainer">
                <div className="eventscreen_eventcontainer_event_detailscontainer_title">
                  {event.event_info.name}
                </div>
                <div className="eventscreen_eventcontainer_event_detailscontainer_subtitle">
                  <img
                    className="w-5 mr-1"
                    src={location_icon}
                    alt="location"
                  />
                  {event.event_info.location}
                </div>
                <div className="eventscreen_eventcontainer_event_detailscontainer_subtext">
                  <img className="w-5 mr-1" src={seat_icon} alt="seat" />

                  {`Only ${event.event_info.tickets_available} seats left`}
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url(${event.event_info.banner_url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="eventscreen_eventcontainer_event_imagecontainer"
              ></div>
            </div>
            <div className="eventscreen_eventcontainer_event_detailscontainer_title mt-6">
              Event Details
            </div>
            <div className="eventscreen_eventcontainer_event_detailscontainer_subtitle text-left mb-8">
              {event.event_info.description}
            </div>
            <div className="eventscreen_eventcontainer_event_detailscontainer_title mt-6">
              Statistics
            </div>
            <div className="eventscreen_nftcontainer_event">
              <div
                style={{
                  backgroundImage: `url(${event.nft_info.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="eventscreen_nftcontainer_event_imagecontainer"
              ></div>
              <div className="eventscreen_nftcontainer_event_detailscontainer">
                <div className="eventscreen_nftcontainer_event_detailscontainer_highlighttext">
                  {event.nft_info.date}
                </div>
                <div className="eventscreen_nftcontainer_event_detailscontainer_title">
                  {event.nft_info.name}
                </div>
                {/* <div className="eventscreen_nftcontainer_event_detailscontainer_subtitle">
                  {`36 people bought the ticket`}
                </div>
                <div className="eventscreen_nftcontainer_event_detailscontainer_subtitle">
                  {"24 people have checked in"}
                </div> */}
                <div className="eventscreen_nftcontainer_event_detailscontainer_subtitle">
                  {event.nft_info.description}
                </div>
                <div
                  onClick={() => {
                    setShowScanner(true);
                  }}
                  className="eventscreen_nftcontainer_event_detailscontainer_buycontainer"
                >
                  Scan QR
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
