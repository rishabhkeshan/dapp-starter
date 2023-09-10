import "./MyEventsScreen.scss";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import location_icon from "../../assets/location_icon.svg";
import seat_icon from "../../assets/seat_icon.svg";
import Api from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import QRScanModal from "./QRScanModal";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "notistack";


export default function Myscanscreen() {
  const api = new Api(localStorage.getItem("jwt"));
  const [tempData, setTempData] = useState([]);
  const [eventsData, setEventsData] = useState("");
    const [showLoading, setShowLoading] = useState(true);
    const [telegramID, setTelegramID] = useState("");
    const [telegramMessage, setTelegramMessage] = useState(
      "Hey Rishabh here from **onboarding.club**!"
    );
      const { enqueueSnackbar } = useSnackbar();
      const showErrorSnack = (message) => {
        enqueueSnackbar(message, {
          variant: "error",
          preventDuplicate: true,
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      };
      const showSuccessSnack = (message) => {
        enqueueSnackbar(message, {
          variant: "success",
          preventDuplicate: true,
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      };
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "1px solid white",
      },
      //   "&:hover": { border: "1px solid white" },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    input: { color: "white" },
    textarea: { color: "white" },
  };
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const data = await api.getOrgEvent();
      console.log(data.data);
      if (data.status) {
        if (data.data) {
          setTempData(data.data);
        }
        setShowLoading(false);
        console.log(data.data);
      }
      else{
        setShowLoading(false);
      }
    })();
  }, []);
    const [showScanner, setShowScanner] = useState(false);


  const trySendMessage = async() =>{
    try{
    const data = {
      username: telegramID,
      message: telegramMessage,
    };
    await api.sendMessage(data);
    showSuccessSnack("Message Sent!");
    setTelegramID("");
  }
  catch(err){
    showErrorSnack("Sorry unsuccessful!");

  }
  }
  return (
    <div
      style={{ filter: showLoading ? "blur(10px)" : "none" }}
      className="scanscreen"
    >
      <Loader showLoading={showLoading} />
      <QRScanModal setTelegramID={setTelegramID} showScanner={showScanner} setShowScanner={setShowScanner} />

      <div className="scanscreen_maincontainer">
        <TextField
          id="outlined-basic"
          className="createventscreen_maincontainer_inputcontainer_inputfield"
          label="Telegram ID"
          value={telegramID}
          onChange={(e) => setTelegramID(e.target.value)}
          sx={inputStyle}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          multiline
          rows={4}
          maxRows={6}
          className="createventscreen_maincontainer_inputcontainer_inputfield"
          label="Message"
          value={telegramMessage}
          onChange={(e) => setTelegramMessage(e.target.value)}
          sx={inputStyle}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <div
          onClick={() => {
            setShowScanner(true);
          }}
          className="scanscreen_maincontainer_scanQR"
        >
          Scan QR
        </div>
        <div
          onClick={trySendMessage}
          className="scanscreen_maincontainer_createevent"
        >
          Send Message
        </div>
        <div className="scanscreen_maincontainer_templatecontainer">
          <div
            onClick={() => {
              setTelegramMessage("Hey Rishabh here from **onboarding.club**!");
            }}
            className="scanscreen_maincontainer_templatecontainer_template"
          >
            1
          </div>
          <div
            onClick={() => {
              setTelegramMessage(
                "**Hey there, Rishabh here from onboarding.club!** \nPlease do visit our [product](onboarding.club) to get started"
              );
            }}
            className="scanscreen_maincontainer_templatecontainer_template"
          >
            2
          </div>
          <div
            onClick={() => {
              setTelegramMessage("Hey Rishabh here from **onboarding.club**!\nWe are live with our Beta across Cosmos, Stellar and Flow.");
            }}
            className="scanscreen_maincontainer_templatecontainer_template"
          >
            3
          </div>
          <div
            onClick={() => {
              setTelegramMessage("");
            }}
            className="scanscreen_maincontainer_templatecontainer_template bg-red-600"
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
}
