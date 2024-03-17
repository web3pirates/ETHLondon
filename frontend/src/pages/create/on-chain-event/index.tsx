import FrameBuilder from "@/components/create-frame/FrameBuilder";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create frame</title>
      </Head>

      <FrameBuilder step="on-chain" />
    </>
  );
}
