import Farcaster from "../../public/images/farcaster.png";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>ETH London</title>
        <meta name="description" content="ETH London" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-32 ">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <a className="text-[#ffcc33]">Frame n' Chips!</a>
          </h1>

          <p className="mt-3 text-2xl">A frame for every need.</p>

          <div className="mt-6">
            <Image
              src={Farcaster}
              alt="Farcaster Logo"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>

          {/* How it Works Section */}
          <section className="py-20 px-10">
            <h2 className="text-4xl text-center font-semibold mb-10">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <h3 className="text-2xl font-bold">1. Create a Quest</h3>
                <p>
                  Define your quest and set the parameters. It’s quick and
                  simple!
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">2. Distribute the Link</h3>
                <p>Share the unique URL as a Warpcast frame</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">3. Engage & Reward</h3>
                <p>Users complete quests to earn Chips XPs 🍟</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">4. Leaderboard Fame</h3>
                <p>Track progress and competition on the project leaderboard</p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-10 bg-[#ffcc33] text-[#002970] rounded-lg">
            <h2 className="text-4xl text-center font-semibold mb-10">
              Why Frame n' Chips?
            </h2>
            <p className="text-xl">
              Frame n' Chips bridges the gap between project creators and their
              communities, offering a unique mix of distribution and engagement.
              Projects gain exposure on Farcaster, keeping the community
              actively engaged and rewarding users for their participation. It’s
              a win-win, driving competition and excitement without ever needing
              to leave Warpcast.
            </p>
          </section>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">About the Project</h3>
            <p className="mt-2 text-lg">
              This project is a submission for the ETHLondon hackathon. It
              leverages the Farcaster protocol to create a decentralized frame
              marketplace.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
