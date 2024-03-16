import TemplateCard from "./TemplateCard";
import NounsLogo from "@/assets/icons/NounsLogo";
import Link from "next/link";
import React from "react";

const _CARDS = [
  {
    title: "NOUNS BID",
    description: "Customize the campaing with aviable tasks based on you",
    logo: <NounsLogo className="fill-[#136fe8]" />,
    link: "/create/nouns-bid",
  },
  {
    title: "ON-CHAIN EVENTS",
    description: "Customize the campaing with aviable tasks based on you",
    link: "/create/on-chain-event",
  },
  {
    title: "MINIMUM ERC20 BALANCE",
    description: "Customize the campaing with aviable tasks based on you",
    link: "/create/minimum-erc20-balance",
  },
  {
    title: "HOLD NFTS",
    description: "Customize the campaing with aviable tasks based on you",
    link: "/create/hold-nfts",
  },
];

interface Props {
  className?: string;
}

export default function Cards(props: Props) {
  const { className } = props;
  return (
    <>
      <div className="mt-8 p-4 flex justify-center &{calssName}">
        <div className="grid grid-rows-2 grid-flow-col gap-8">
          {_CARDS.map((card, index) => (
            <Link
              className="border-2 border-[#ffcc33] rounded-lg"
              href={card.link}
            >
              <TemplateCard
                title={card.title}
                description={card.description}
                {...(card.logo ? { logo: card.logo } : {})}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
