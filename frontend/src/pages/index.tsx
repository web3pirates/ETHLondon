import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { mq } from "../styles/breakpoints";
import { SignInButton } from "@farcaster/auth-kit";
import { useProfile } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import Head from "next/head";
import React, { useState } from "react";
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
  const { isAuthenticated, profile } = useProfile();
  const [hide, setHide] = useState(false);

  const hideButton = () => {
    setHide(true);
  };

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
        {!hide && <SignInButton onSignOut={hideButton} />}

        <div>
          {isAuthenticated ? (
            <p>
              Hello, {profile.username}! Your fid is: {profile.fid}
            </p>
          ) : (
            <p>You're not signed in.</p>
          )}
        </div>
      </Layout>
    </>
  );
}
