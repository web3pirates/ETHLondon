import Rocket from "@/assets/icons/Rocket";
import React from "react";

interface Props {
  title: string;
  description: string;
  logo?: React.ReactNode;
}
export default function TemplateCard(props: Props) {
  const {
    title,
    description,
    logo = <Rocket className="fill-[#136fe8]" />,
  } = props;
  return (
    <div className="w-[308px] h-[197px] p-[25px] bg-[#012b73] rounded-[10px] shadow flex-col justify-center items-start gap-5 inline-flex">
      <div className="self-stretch justify-end items-start gap-2.5 inline-flex">
        {logo}
      </div>
      <div className="self-stretch h-[105px] flex-col justify-start items-start gap-[5px] flex">
        <div className="text-indigo-200 text-xl font-semibold font-['Wix Madefor Display'] leading-normal">
          {title}
        </div>
        <div className="self-stretch text-blue-200 text-base font-normal font-['Wix Madefor Display'] leading-tight">
          {description}
          <br />
        </div>
      </div>
    </div>
  );
}
