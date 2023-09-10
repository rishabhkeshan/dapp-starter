import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import nftix_logo from "../../assets/nftix_logo_white.svg";

export default function Loader({ showLoading }) {
  return (
    <Modal
      open={showLoading}
      aria-labelledby="loader"
      aria-describedby="loading"
      className="align-middle justify-center items-center outline-none justify-items-center flex h-screen"
    >
      <div className="outline-none">
        <img
          alt="logo"
          src={nftix_logo}
          className="animate-pulse w-auto align-middle justify-center m-auto"
        />
      </div>
    </Modal>
  );
}
