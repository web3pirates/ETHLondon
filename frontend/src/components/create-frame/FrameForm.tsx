import CustomInput from "../input/CustomtInput";
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
        <CustomInput type="select" value="NFT" titleText="Contract *" />
        <CustomInput
          type="image-url"
          value="No url provided"
          titleText="Image"
        />
      </div>
    </form>
  );
}
