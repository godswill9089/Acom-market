import "../styles/globals.css";
import WagmiWrapper from "../utils/Wagmi";

function MyApp({ Component, pageProps }) {
  return (
    <WagmiWrapper Component={Component} pageProps={pageProps} />
  );
}

export default MyApp;
