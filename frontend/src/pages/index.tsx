import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>ETH London</title>
        <meta name="description" content="ETH London" />
      </Head>

      <Layout>
        <h1>ETHGlobal London Project</h1>
      </Layout>
    </>
  );
}
