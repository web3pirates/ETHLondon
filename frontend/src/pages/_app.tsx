import "../styles/globals.css";
import Layout from "@/components/Layout";
import { SharedStateProvider } from "@/utils/store";
import { AuthKitProvider } from "@farcaster/auth-kit";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const config = {
    siweUri: "http://localhost:3000",
    rpcUrl: process.env.OP_MAINNET_RPC_URL,
    relay: "https://relay.farcaster.xyz",
  };

  return (
    <PlausibleProvider domain="example.com" trackOutboundLinks>
      <SharedStateProvider>
        <AuthKitProvider config={config}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthKitProvider>
      </SharedStateProvider>
    </PlausibleProvider>
  );
}
