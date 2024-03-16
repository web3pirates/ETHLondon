import React, { ChangeEvent, useState } from "react";

interface Props {
  type: "text" | "select" | "image-url";
  value: string;
  titleText?: string;
}

export default function CustomInput(props: Props) {
  const { type, value, titleText } = props;
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleBlur = (event: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(event.target.value);
    setIsValidUrl(validateUrl(inputValue));
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputValue(event.target.value);
    setIsValidUrl(validateUrl(inputValue));
  };

  const validateUrl = (url: string): boolean => {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(url);
  };

  return (
    <>
      {titleText && (
        <div className="w-[944px] h-[81px] flex-col justify-start items-start gap-[15px] inline-flex mt-8">
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 text-indigo-200 text-xl font-semibold font-['Wix Madefor Display'] leading-normal">
              {titleText}
            </div>
          </div>
          {type === "text" && (
            <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 flex">
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
          )}
          {type === "select" && (
            <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch px-4 py-3 bg-[#001224] rounded-lg border border-slate-700 justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-2.5 flex">
                  <select
                    placeholder={value}
                    className="grow shrink basis-0 text-slate-400 text-sm font-normal font-['Wix Madefor Display'] leading-[17.50px]"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          {type === "image-url" && (
            <div className="flex">
              <div className="self-stretch h-[42px] flex-col justify-start items-start gap-2 flex w-[500px]">
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
                      onBlur={handleChange}
                      className="grow shrink basis-0 text-slate-400 text-sm font-normal font-['Wix Madefor Display'] leading-[17.50px]"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              {isValidUrl && (
                <div className="self-stretch ml-40 px-4 py-3 bg-[#001224] rounded-lg border border-slate-700 justify-start items-center gap-2.5 inline-flex align-right h-[240px]">
                  <img
                    src={inputValue}
                    alt="Not a valid link"
                    className="h-[200px]"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
