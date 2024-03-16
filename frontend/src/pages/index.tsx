import Head from "next/head";
import Image from "next/image";
import React from "react";
import Farcaster from '../../public/images/farcaster.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>ETH London</title>
        <meta name="description" content="ETH London" />
      </Head>

      <h1>ETHGlobal London Project</h1>
      <Image src={Farcaster} alt="Farcaster" width={1000} height={500} />
    </>
  );
}
