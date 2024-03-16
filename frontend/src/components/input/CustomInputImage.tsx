import React from "react";

interface Props {
  value: string;
}

export default function CustomInputImage(props: Props) {
  const { value } = props;

  return (
    <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 flex">
      <div className="self-stretch pr-4 py-3 bg-[#001224] rounded-lg border border-slate-700 justify-start items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-2.5 flex">
          <div className="w-[114px] pl-5 pr-[19px] py-2.5 bg-slate-700 rounded-tl-lg rounded-bl-lg border border-slate-700 justify-center items-center gap-2 flex">
            <div className="w-[75px] text-center text-white text-sm font-medium font-['Wix Madefor Display'] leading-[21px]">
              Image URL
            </div>
          </div>
          <input
            type="text"
            placeholder={value}
            className="grow shrink basis-0 text-slate-400 text-sm font-normal font-['Wix Madefor Display'] leading-[17.50px]"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}
