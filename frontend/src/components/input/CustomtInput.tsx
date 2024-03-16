import CustomInputContractChecker from "./CustomInputContractChecker";
import CustomInputImage from "./CustomInputImage";
import CustomInputSelect from "./CustomInputSelect";
import CustomInputText from "./CustomInputText";
import React from "react";

interface Props {
  type: "text" | "select" | "image-url" | "contract-checker";
  value: string;
  titleText?: string;
}

export default function CustomInput(props: Props) {
  const { type, value, titleText } = props;

  return (
    <>
      {titleText && (
        <div className="w-[944px] h-[81px] flex-col justify-start items-start gap-[15px] inline-flex mt-8">
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 text-indigo-200 text-xl font-semibold font-['Wix Madefor Display'] leading-normal">
              {titleText}
            </div>
          </div>
          {type === "text" && <CustomInputText value={value} />}
          {type === "select" && (
            <CustomInputSelect value={value} options={["Base"]} />
          )}
          {type === "image-url" && <CustomInputImage value={value} />}
          {type === "contract-checker" && (
            <CustomInputContractChecker value={value} />
          )}
        </div>
      )}
    </>
  );
}
