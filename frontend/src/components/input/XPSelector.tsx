import React, { useState } from "react";

const _XP = [10, 50, 100, 200];

interface Props {
  titleText: string;
}

export default function XPSelector(props: Props) {
  const { titleText } = props;
  const [selectedXpBox, setSelectedXpBox] = useState<number>(1);

  return (
    <div className="w-[944px] h-[81px] flex-col justify-start items-start gap-[15px] inline-flex mt-8">
      <div className="self-stretch justify-start items-start gap-3 inline-flex">
        <div className="grow shrink basis-0 text-indigo-200 text-xl font-semibold font-['Wix Madefor Display'] leading-normal">
          {titleText}
        </div>
      </div>
      <div className="flex gap-[10px] justify-between w-[900px] px-[18px] items-center">
        {_XP.map((xpValue, idx) => (
          <button
            type="button"
            key={idx}
            className={`bg-custom-gray-800 rounded-lg border-2 px-2.5 py-2 w-[150px] font-semibold whitespace-nowrap  ${
              selectedXpBox === idx
                ? "bg-[#002970] border-bright-blue text-custom-gray-100 border-2 border-[#ffcc33]"
                : `border-transparent  text-custom-gray-400`
            }`}
            onClick={() => {
              setSelectedXpBox(idx);
            }}
          >
            +{xpValue}
          </button>
        ))}
      </div>
    </div>
  );
}
