import apecoin from "../../../public/images/apecoin.png";
import chain from "../../../public/images/chain.png";
import nouns from "../../../public/images/nouns2.png";
import usdc from "../../../public/images/usdc.png";
import TemplateCard from "./TemplateCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const _CARDS = [
  {
    title: "STAKE APECOIN",
    description:
      "Customize the quest with an on chain event. Users will stake ApeCoin directly on Warpcast",
    logo: <Image src={apecoin} alt="chain" width={75} height={75} />,
    link: "/create/hold-nfts",
  },
  {
    title: "MINIMUM ERC20",
    description:
      "Customize the quest to verify if users hold a minimum ERC20 balance",
    logo: <Image src={usdc} alt="chain" width={75} height={75} />,
    link: "/create/minimum-erc20-balance",
  },
  {
    title: "ON-CHAIN EVENTS",
    description:
      "Customize the quest to verify if users completed a specified on-chain event",
    logo: (
      <Image
        src={chain}
        alt="chain"
        width={75}
        height={75}
        className="rounded-full"
      />
    ),
    link: "/create/on-chain-event",
  },
  {
    title: "HOLD NFT",
    description: "Customize the quest to verify if users hold a specific NFT",
    link: "/create/nouns-bid",

    logo: <Image src={nouns} alt="chain" width={100} height={150} />,
  },
];

interface Props {
  className?: string;
}

export default function Cards(props: Props) {
  const { className } = props;
  return (
    <>
      <div className={`mt-8 p-4 flex justify-center ${className}`}>
        <div className="grid grid-rows-2 grid-flow-col gap-8">
          {_CARDS.map((card) => (
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
