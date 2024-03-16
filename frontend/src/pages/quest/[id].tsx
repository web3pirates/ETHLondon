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
              label: "Send tx",
              action: "tx",
              target: `${process.env.NEXT_PUBLIC_URL}/api/quest/1/execute`,
            },
            {
              action: "link",
              label: "Link to Google",
              target: "https://www.google.com",
            },
            {
              action: "post_redirect",
              label: "Redirect to cute pictures",
            },
          ]}
          image={{
            src: "https://zizzamia.xyz/park-3.png",
            aspectRatio: "1:1",
          }}
          input={{
            text: "Tell me a boat story",
          }}
          state={{
            counter: 1,
          }}
          postUrl="https://zizzamia.xyz/api/frame"
        />
      </Head>
      My cool frame
    </>
  );
}
