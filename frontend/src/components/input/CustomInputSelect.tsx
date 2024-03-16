import React from "react";

interface Props {
  value: string;
  options: string[];
}

export default function CustomInputSelect(props: Props) {
  const { value, options } = props;

  return (
    <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 flex">
      <div className="self-stretch px-4 py-3 bg-[#001224] rounded-lg border border-slate-700 justify-start items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-2.5 flex">
          <select
            defaultValue="Select network"
            className="grow shrink basis-0 text-slate-400 text-sm font-normal font-['Wix Madefor Display'] leading-[17.50px]"
            style={{ backgroundColor: "transparent" }}
          >
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
