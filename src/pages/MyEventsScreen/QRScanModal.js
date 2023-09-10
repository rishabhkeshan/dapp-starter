import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import nftix_logo from "../../assets/nftix_logo_white.svg";
import { QrReader } from "react-qr-reader";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useSnackbar } from "notistack";
import Api from "../../utils/api";

export default function QRScanModal({ showScanner, setShowScanner, setTelegramID }) {
const [data, setData] = useState("No result");
  const api = new Api(localStorage.getItem("jwt"));

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
  const handleData = async(payload)=>{
    if(payload.ticket_id){
      console.log("hi");
      if(payload.claimable){
        const resp = await api.claim(payload);
        if(resp.status){
          showSuccessSnack(resp.data);
        }

      } else{
        const resp = await api.markAttendance(payload);
        if (resp.status) {
          showSuccessSnack(resp.data);
        }
      }
    }
  }
  return (
    <Modal
      open={showScanner}
      aria-labelledby="loader"
      aria-describedby="loading"
      className="align-middle justify-center items-center outline-none justify-items-center flex h-screen"
    >
      <div className="outline-none h-80 w-80 flex flex-col justify-center items-center">
        {/* <QrReader
          scanDelay={5000}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              console.log(result?.text);
              showSuccessSnack(result?.text);
            }
            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        /> */}
        <BarcodeScannerComponent
          width={800}
          height={800}
          delay={3000}
          onUpdate={(err, result) => {
            if (result) {
              showSuccessSnack("Scan Successful")
              // handleData(JSON.parse(result?.text));
              console.log(result?.text);
              const parts = result?.text.split("/");
              const lastPart = parts[parts.length - 1];
              setTelegramID(lastPart);
              setShowScanner(false);
            } else showErrorSnack("Sorry scanning error");
          }}
        />
        <div
          className="font-bold text-xl underline"
          onClick={() => {
            setShowScanner(false);
          }}
        >
          Close
        </div>
      </div>
    </Modal>
  );
}
