import TemplateCard from "./TemplateCard";
import NounsLogo from "@/assets/icons/NounsLogo";
import apecoin from '../../../public/images/apecoin.png'
import nouns from '../../../public/images/nouns2.png'
import chain from '../../../public/images/chain.png'
import usdc from '../../../public/images/usdc.png'
import Link from "next/link";
import React from "react";
import Image from "next/image";

const _CARDS = [
  {
    title: "NOUNS BID",
    description: "Customize the campaing with aviable tasks based on you",
    logo: <Image src={nouns} alt='chain' width={100} height={100}/>,
    link: "/create/nouns-bid",
  },
  {
    title: "ON-CHAIN EVENTS",
    description: "Customize the campaing with aviable tasks based on you",
    logo: <Image src={chain} alt='chain' width={75} height={75} className="rounded-full"/>,
    link: "/create/on-chain-event",
  },
  {
    title: "MINIMUM ERC20",
    description: "Customize the campaing with aviable tasks based on you",
    logo: <Image src={usdc} alt='chain' width={75} height={75}/>,
    link: "/create/minimum-erc20-balance",
  },
  {
    title: "HOLD NFTS",
    description: "Customize the campaing with aviable tasks based on you",
    logo: <Image src={apecoin} alt='chain' width={75} height={75}/>,
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
