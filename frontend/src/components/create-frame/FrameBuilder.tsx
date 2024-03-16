import Cards from "./Cards";
import Trashcan from "@/assets/icons/Trashcan";
import React from "react";

interface Props {
  step?: string;
}

export default function TemplateSelection(props: Props) {
  const { step = "template-selection" } = props;
  return (
    <div
      className="bg-[#02367d] border-yello-500 rounded-lg mt-4 p-8 text-white"
      style={{ width: "1000px", minHeight: "50vh" }}
    >
      <div className="flex justify-between">
        <h1 className="text-white text-4xl font-semibold font-['Wix Madefor Display'] leading-[54px]">
          Frame Quest Builder
        </h1>
        <div className="w-8 h-8 p-1 rounded-lg border-2 border-red-600 justify-start items-start inline-flex">
          <div className={`flex gap-3 items-center w-full`}>
            <Trashcan className="w-[1.2rem] h-[1.5rem] scale-[80%] fill-current text-red-600" />
          </div>
        </div>
      </div>

      {step === "template-selection" && <Cards />}
      {step === "create-on-chain-event" && <h1>Chain</h1>}
    </div>
  );
}
