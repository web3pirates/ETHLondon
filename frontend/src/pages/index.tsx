import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { mq } from "../styles/breakpoints";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

// -----------------------------------------------
export const Layout = styled.div`
  // Vertically centered layout
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f4f7fa;
  color: #1d3b3b;
  gap: 3rem;

  width: 100%;
  padding: 2rem;
  min-height: 100svh;

  @media ${mq.sm.max} {
    padding: 1rem;
  }
`;
// -----------------------------------------------

export default function Home() {
  return (
    <>
      <Head>
        <title>ETH London</title>
        <meta name="description" content="ETH London" />
      </Head>

      <Layout>
        <Nav />

        <h1>ETHGlobal London Project</h1>
        <br />
        <Footer />
      </Layout>
    </>
  );
}
