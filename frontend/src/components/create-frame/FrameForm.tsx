import CustomInput from "../input/CustomtInput";
import XPSelector from "../input/XPSelector";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface Props {
  type: "NOUNS" | "ON-CHAIN" | "ERC20" | "NFTS";
}

export default function FrameForm(props: Props) {
  const { type } = props;

  const handleClick = () => {
    toast.success("Frame correctly created!");
    setTimeout(() => {
      toast.loading("Redirecting to success page...");
      setTimeout(() => {
        window.location.href = "/success";
      }, 1000);
    }, 2000);
  };

  return (
    <form action="" method="get">
      <div className="mt-8">
        <CustomInput type="text" value="Awesom Frame" titleText="Title" />
        <CustomInput type="select" value="Base" titleText="Contract *" />
        <CustomInput
          type="contract-checker"
          value="Contract address"
          titleText="Contract address"
        />
        <CustomInput type="text" value="URL" titleText="Task URL" />
        <CustomInput
          type="text"
          value="Description"
          titleText="Description *"
        />
        <CustomInput
          type="image-url"
          value="No file chosen"
          titleText="Frame Image (1.91:1) *"
        />
        <CustomInput type="text" value="URL" titleText="Website URL *" />
        <XPSelector titleText="Provided XP points" />
        <div className="flex justify-end mt-[20px]">
          <div className="w-[158px] h-[43px] px-5 py-3 rounded-lg border-2 border-[#ffcc33] bg-[#002970] justify-center items-center gap-2 inline-flex">
            <div
              className="text-[#ffcc33] text-base fleading-tight hover:cursor-pointer"
              onClick={handleClick}
            >
              Submint
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
