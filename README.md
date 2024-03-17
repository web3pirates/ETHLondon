# FramenChips - EthGlobal London 2024 Project

## Description

Frame n’ Chips is a no-code quest builder that leverages Farcaster frames. Through our frames, projects ask users to complete one of the following quests: complete an on-chain event, hold a minimum ERC20 balance, hold an NFT, or stake ApeCoin. Projects will be asked to provide simple information such as the quest title, the chain, and the contract address. Finally, projects assign points that will be distributed to users in case a quest is completed.  
The builder will then output a URL that can be copied and pasted as a Warpcast frame. Users will find the quest on their feed, complete/verify that the task is completed and receive XPs. The frame will then show the project leaderboard. All actions will be gasless as the gas fee will be covered by the Safe Wallet.  

The gamified community interaction inside social media is the perfect mix of distribution and engagement. Projects will reach countless users on Farcaster and will keep the community engaged and rewarded. Users will be incentivized to complete a gasless quest on the protocol, compete to be on top of the project leaderboard and win exciting rewards! All, without leaving Warpcast.

## Getting Started

To get started, clone this repository and run the following commands:

```bash
yarn install
yarn dev
```

## Environment variables

Create a `.env` file and add the following environment variables:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_API_KEY=your-api-key
```
