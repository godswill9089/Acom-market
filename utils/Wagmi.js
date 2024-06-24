"use client";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";

const { chains, provider } = configureChains(
  [chain.polygonMumbai, chain.mainnet],
  [
    infuraProvider({
      apiKey: "INFURA_API", 
      priority: 1,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function WagmiWrapper({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default WagmiWrapper;
