import "@/styles/style.scss";
import { SharedStateProvider } from "@/utils/store";
import { AuthKitProvider } from "@farcaster/auth-kit";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const config = {
    rpcUrl: "https://mainnet.optimism.io",
    siweUri: "http://localhost:3000/",
    relay: "https://relay.farcaster.xyz",
  };

  return (
    <PlausibleProvider domain="example.com" trackOutboundLinks>
      <SharedStateProvider>
        <AuthKitProvider config={config}>
          <Component {...pageProps} />
        </AuthKitProvider>
      </SharedStateProvider>
    </PlausibleProvider>
  );
}
