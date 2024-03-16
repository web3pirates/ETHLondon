import CustomInput from "../input/CustomtInput";
import XPSelector from "../input/XPSelector";
import React, { useState } from "react";

interface Props {
  type: "NOUNS" | "ON-CHAIN" | "ERC20" | "NFTS";
}

export default function FrameForm(props: Props) {
  const { type } = props;
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
      </div>
    </form>
  );
}
