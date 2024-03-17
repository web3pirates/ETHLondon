import Copy from "@/assets/icons/Copy";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const frameLink = "https://framenchips.xyz/quest/apecoin";
  const copyLink = async () => {
    await navigator.clipboard.writeText(frameLink);
    toast.success("Frame link copied!");
  };

  return (
    <>
      <Head>
        <title>Copy your new frame link and share it on Farcaster</title>
      </Head>
      <div
        className="bg-[#011445] border-yello-500 rounded-lg mt-24 p-8 text-white"
        style={{ width: "1000px", minHeight: "50vh" }}
      >
        <div className="flex justify-between">
          <h1 className="text-white text-4xl font-semibold font-['Wix Madefor Display'] leading-[54px]">
            Preview
          </h1>
        </div>

        <Image
          src="https://framenchips.s3.eu-west-1.amazonaws.com/frame-preview.png"
          alt="frame preview"
          width={500}
          height={500}
          className="mx-auto"
        />

        <div className="flex self-stretch justify-between items-start gap-3 my-5">
          <div className="grow shrink basis-0 text-indigo-200 text-xl font-semibold font-['Wix Madefor Display'] leading-normal justify-start">
            Frame URL (copy and paste it on Warpcast)
          </div>

          <div
            onClick={copyLink}
            className="flex w-[138px] h-[43px] px-5 py-3 hover:cursor-pointer rounded-lg border-[#ffcc33] border-2 bg-[#002970] justify-between items-center gap-2"
          >
            <div className="text-[#ffcc33] text-base fleading-tight justify-center">
              Copy link
            </div>
            <Copy className="w-5 h-5" />
          </div>

          <div
            onClick={() => {
              window.open(
                "https://warpcast.com/~/developers/frames?url=https%3A%2F%2Fframenchips.xyz%2Fquest%2Fapecoin",
                "_blank"
              );
            }}
            className="flex h-[43px] px-5 py-3 hover:cursor-pointer rounded-lg border-[#ffcc33] border-2 bg-[#002970] justify-between items-center gap-2"
          >
            <div className="text-[#ffcc33] text-base fleading-tight hover:cursor-pointer justify-center">
              View on Warpcast
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
