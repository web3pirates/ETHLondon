import ContractEvents from "../create-frame/ContractEvents";
import CustomInputText from "./CustomInputText";
import React from "react";

interface Props {
  value: string;
}

export default function CustomInputContractChecker(props: Props) {
  const { value } = props;

  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex">
      <CustomInputText value={value} className="w-[784px] pr-7" />
      <div className="w-[158px] h-[43px] px-5 py-3 rounded-lg border-2 border-[#ffcc33] bg-[#002970] justify-center items-center gap-2 inline-flex">
        <div
          className="text-[#ffcc33] text-base fleading-tight hover:cursor-pointer"
          onClick={handleDropdownClick}
        >
          Check Contract
        </div>
      </div>
      {showDropdown && <ContractEvents />}
    </div>
  );
}
