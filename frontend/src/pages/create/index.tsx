import { Footer } from "@/components/Footer";
import Layout from "@/components/Layout";
import { Nav } from "@/components/Nav";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create frame</title>
      </Head>

      <Layout>
        <h1>Create your frame</h1>
      </Layout>
    </>
  );
}
