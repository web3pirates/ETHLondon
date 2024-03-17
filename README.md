# Frame n' Chips - EthGlobal London 2024 Project

Frame n’ Chips is a no-code builder for creating quests that can be distributed via Farcaster Frames. Users can perform on-chain actions to complete quests without leaving the frame. Then, they receive Chips XPs, and climb the project leaderboard competing with others for rewards.

## Description

Through our frames, projects ask users to complete on-chain quests. Quest might involve completing an on-chain event, holding a minimum ERC20 balance, holding an NFT, etc. Projects will be asked to provide simple information such as the quest title, the chain and the contract address. Finally, projects assign points that will be distributed to users in case a quest is completed. The builder will then output a URL that can be copied and pasted in farcaster-like website such as Warpcast so that it generates a dynamic frame. Users will find the quest on their feed, complete/verify that the task is completed and receive Chips (XPs). The frame will then show the project leaderboard with all participant's rankings. T

## The Benefits
he gamified community interaction inside social media is the perfect mix of distribution and engagement. Projects will reach countless users on Farcaster and will keep the community engaged and rewarded. Users will be incentivised to complete a quest on the protocol, compete to be on top of the project leaderboard and win exciting rewards! All, without leaving a simple frame.

## Technology Stack

Frame n’ Chips leverages cutting-edge technologies to power its platform:

- **Base L2**: Leveraging the scalability and efficiency of Base for seamless user experience.
- **ApeCoin**: An ERC-20 governance and utility token used to empower a decentralized community building at the forefront of web3.
- **@coinbase/onchainkit**: high-tech React library that provides TypeScript utilities and React components to help building Frames.
- **@farcaster/auth-kit**: Official Farcaster React library to handle Sign In with Warpcast.




## Getting Started

To get started, clone this repository, get in the Frontend folder and run the following commands:

```bash
yarn install
yarn dev
```

## Environment variables

Create a `.env` file in the Frontend folder and add the following environment variables:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_API_KEY=your-api-key
```
