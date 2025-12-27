import React from "react";
import { showConnect, AppConfig, UserSession } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

export const ConnectWallet = () => {
  const authenticate = () => {
    showConnect({
      appDetails: {
        name: "Biometric Key",
        icon: window.location.origin + "/vite.svg",
      },
      redirectTo: "/",
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  };

  if (userSession.isUserSignedIn()) {
    return (
      <button onClick={() => userSession.signUserOut()}>
        Sign Out
      </button>
    );
  }

  return (
    <button onClick={authenticate}>
      Connect Wallet
    </button>
  );
};
