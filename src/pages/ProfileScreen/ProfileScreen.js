import "./ProfileScreen.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function ProfileScreen() {
  const [userData, setUserData] = useState({});
  const [balance, setBalance] = useState(0);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      // const data = JSON.parse(localStorage.getItem("deto"));
      // setUserData(data);
      // const mantleFunctions = new AssetMantleFunctions(data.username);
      // mantleFunctions.walletId = data.wallet_id;
      // const bal = await mantleFunctions.getAccountBalance();
      // setBalance(bal);
    })();
  }, []);

  return (
    <div className="profilescreen">
      <div className="profilescreen_maincontainer">
        <div>
          <div className="profilescreen_maincontainer_title">Username</div>
          <div className="profilescreen_maincontainer_subtitle">
            {"rishabhkeshan"}
          </div>
        </div>
        <div>
          <div className="profilescreen_maincontainer_title">Email</div>
          <div className="profilescreen_maincontainer_subtitle">
            {"rishabh@onboarding.club"}
          </div>
        </div>
      </div>
    </div>
  );
}
