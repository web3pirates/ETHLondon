import FrameBuilder from "@/components/create-frame/FrameBuilder";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create frame</title>
      </Head>

      <h1>Create your frame</h1>
      <FrameBuilder step="erc20" />
    </>
  );
}
