"use client";

import { ConnectButton, darkTheme } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { defineChain } from "thirdweb";
import { client } from "@/app/client";

const wallets = [
  inAppWallet({
    auth: {
      options: [
        
        "google",
        "apple",
        "github",
        "coinbase",
        "x",

        "discord",
        "telegram",
        "line",
        "facebook",
        "farcaster",
        
        "twitch",
        "steam",
        
        "email",
        "passkey",
        "phone",
        "guest",
        
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.binance"),
  createWallet("com.okex.wallet"),
  createWallet("com.bitget.web3"),
  createWallet("org.uniswap"),
  createWallet("com.trustwallet.app"),
];

export function Conbutton() {
  return (
    <ConnectButton
      client={client}
      connectButton={{ label: "Get Started" }}
      wallets={wallets}
      theme={darkTheme({
        colors: {
        primaryButtonBg: "#2f0927",
        primaryButtonText: "#818183",
        secondaryButtonBg: "#18191e",
        secondaryButtonText: "#818183",
        modalBg: "#2f0927",
        accentText: "hsl(315, 67.70%, 24.30%)",
        separatorLine: "hsla(330, 1.90%, 78.80%, 0.10)",
        borderColor: "hsla(330, 1.90%, 78.80%, 0.10)",
      },
    })}
      connectModal={{
        title: "Login",
        size: "wide",
        showThirdwebBranding: true,
      }}
    // Replace the chain id with the chain you want to connect to
      chains={[  
        defineChain(137),  
      ]}
    />
  );
}
export default Conbutton;
