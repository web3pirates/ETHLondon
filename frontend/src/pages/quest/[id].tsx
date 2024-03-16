import {
  getFrameMetadata,
  FrameMetadata,
  FrameButtonMetadata,
  FrameImageMetadata,
} from "@coinbase/onchainkit";
import type { Metadata } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAsyncMemo } from "use-async-memo";

export default function Page() {
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
              action: "post_redirect",
              label: "Leaderboard",
            },
            {
              action: "link",
              label: "Apecoin website",
              target: "https://apecoin.com/",
            },
          ]}
          image={{
            src: "https://framenchips.s3.eu-west-1.amazonaws.com/apecoin-transfer-cover.jpg",
            aspectRatio: "1.91:1",
          }}
          state={{
            counter: 1,
          }}
          postUrl={`${process.env.NEXT_PUBLIC_URL}/api/leaderboard`}
        />
      </Head>
      My cool frame id
    </>
  );
}
