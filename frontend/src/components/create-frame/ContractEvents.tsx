import React, { useState } from "react";

const _EVENTS = [
  {
    name: "Approval",
    arguments: [
      {
        name: "argument1",
        type: "address",
      },
      {
        name: "argument2",
        type: "address",
      },
      {
        name: "argument3",
        type: "address",
      },
    ],
  },
  {
    name: "Transfer",
    arguments: [
      {
        name: "argument1",
        type: "address",
      },
      {
        name: "argument2",
        type: "address",
      },
      {
        name: "argument3",
        type: "address",
      },
    ],
  },
  {
    name: "Deposit",
    arguments: [
      {
        name: "argument1",
        type: "address",
      },
      {
        name: "argument2",
        type: "address",
      },
      {
        name: "argument3",
        type: "address",
      },
    ],
  },
  {
    name: "Provide",
    arguments: [
      {
        name: "argument1",
        type: "address",
      },
      {
        name: "argument2",
        type: "address",
      },
      {
        name: "argument3",
        type: "address",
      },
    ],
  },
];

export default function ContractEvents() {
  const [selectedXpBox, setSelectedXpBox] = useState<number>(-1);

  return (
    <div className="absolute mt-[45px] bg-[#011124] shadow-lg w-[831px] h-[180px] px-3 py-[11px] rounded-[10px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="self-stretch h-[27px] justify-start items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 self-stretch text-indigo-200 text-base leading-tight">
          Functions/Events
        </div>
        <div className="p-1.5 flex-col justify-start items-start gap-2.5 inline-flex"></div>
      </div>
      <div className="pr-1 justify-center items-start gap-[8px] inline-flex">
        <div className="w-[790px] h-[346px] relative">
          {_EVENTS.map((event, idx) => (
            <div className="w-[790px] h-[30px] left-0 justify-start items-center gap-[5px] inline-flex">
              <div className="text-indigo-200 text-base leading-tight">
                {event.name}
              </div>
              <div className="grow shrink basis-0">
                <span className="text-blue-200 text-xs font-normal font-['ABeeZee'] leading-[14.40px]">
                  (
                </span>
                {event.arguments.map((argument) => (
                  <>
                    <span className="text-lime-500 text-xs font-normal font-['ABeeZee'] leading-[14.40px]">
                      {argument.type}{" "}
                    </span>
                    <span className="text-orange-300 text-xs font-normal font-['ABeeZee'] leading-[14.40px]">
                      {argument.name},{" "}
                    </span>
                  </>
                ))}
                <span className="text-blue-200 text-xs font-normal font-['ABeeZee'] leading-[14.40px]">
                  )
                </span>
              </div>
              <div className="w-[22px] h-[22px] relative">
                <div
                  className={`w-[22px] h-[22px] left-0 top-0 absolute rounded-full border-2 border-sky-500 ${
                    selectedXpBox === idx ? "bg-[#ffcc33]" : ""
                  }`}
                  onClick={() => {
                    setSelectedXpBox(idx);
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
