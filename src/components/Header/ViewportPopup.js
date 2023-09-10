import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import nftix_logo from "../../assets/nftix_logo_white.svg";
import viewport_popup from "../../assets/viewport_popup.svg";

export default function ViewportPopup({ viewPopup }) {

  return (
    <Modal
      open={viewPopup}
      aria-labelledby="viewport"
      aria-describedby="open on smaller screen"
      className="align-middle justify-center items-center outline-none justify-items-center flex h-screen"
    >
      <div className="outline-none w-96 flex flex-col justify-center items-center">
        <img src={viewport_popup} alt="viewport"/>
      </div>
    </Modal>
  );
}
