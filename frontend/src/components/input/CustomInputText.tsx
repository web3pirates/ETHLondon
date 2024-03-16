import React from "react";

interface Props {
  value: string;
  className?: string;
}

export default function CustomInput(props: Props) {
  const { value, className } = props;

  return (
    <div
      className={`self-stretch h-[42px] flex-col justify-start items-start gap-2 flex ${className}`}
    >
      <div className="self-stretch px-4 py-3 bg-[#001224] rounded-lg border border-slate-700 justify-start items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-2.5 flex">
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
