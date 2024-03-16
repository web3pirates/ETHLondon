import { getFrameMetadata, FrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAsyncMemo } from "use-async-memo";

// const frameMetadata = getFrameMetadata({
//   buttons: [
//     {
//       label: "Send tx",
//     },
//   ],
//   image: `${process.env.NEXT_PUBLIC_URL}/main.png`,
//   post_url: `${process.env.NEXT_PUBLIC_URL}/api/account`,
// });

// console.log(frameMetadata);

// export const metadata: Metadata = {
//   title: "Testing",
//   description: "LFG",
//   openGraph: {
//     title: "Testing",
//     description: "LFG",
//     images: [`${process.env.NEXT_PUBLIC_URL}/main.png`],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };

export default function Page() {
  const [isFetching, setIsFetching] = useState(true);

  return (
    <>
      <Head>
        <FrameMetadata
          buttons={[
            {
              label: "Complete task link",
              action: "link",
              target: "https://uniswap.org",
            },
            {
              action: "post_redirect",
              label: "Verify",
            },
            {
              action: "link",
              label: "Link to project website",
              target: "https://www.google.com",
            },
          ]}
          image={{
            src: "https://zizzamia.xyz/park-3.png",
            aspectRatio: "1:1",
          }}
          state={{
            counter: 1,
          }}
          postUrl="http://localhost:3001/api/leaderboard"
        />
      </Head>
      My cool frame id
    </>
  );
}
