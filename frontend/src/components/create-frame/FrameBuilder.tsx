import Cards from "./Cards";
import FrameForm from "./FrameForm";
import React from "react";

interface Props {
  step?: "template-selection" | "on-chain" | "nouns" | "erc20" | "nfts";
}

export default function TemplateSelection(props: Props) {
  const { step = "template-selection" } = props;
  return (
    <div
      className="bg-[#001F42] border-yello-500 rounded-lg mt-24 p-8 text-white"
      style={{ width: "1000px", minHeight: "50vh" }}
    >
      <div className="flex justify-between">
        <h1 className="text-white text-4xl font-semibold font-['Wix Madefor Display'] leading-[54px]">
          Frame Quest Builder
        </h1>
      </div>

      {step === "template-selection" && <Cards />}
      {step === "on-chain" && <FrameForm type="ON-CHAIN" />}
      {step === "nouns" && <FrameForm type="NOUNS" />}
      {step === "erc20" && <FrameForm type="ERC20" />}
      {step === "nfts" && <FrameForm type="NFTS" />}
    </div>
  );
}
