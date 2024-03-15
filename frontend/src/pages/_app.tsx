import { SharedStateProvider } from "@/utils/store";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="example.com" trackOutboundLinks>
      <SharedStateProvider>
        <Component {...pageProps} />
      </SharedStateProvider>
    </PlausibleProvider>
  );
}
