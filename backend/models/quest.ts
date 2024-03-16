import mongoose, { Document } from "mongoose";

interface Quest extends Document {
  title: string;
  description: string;
  image: string;
}

export enum QuestTemplate {
  ONCHAIN_EVENT = "onchain_event",
  NFT_HOLDING = "nft_holding",
  ERC20_HOLDING = "erc20_holding",
  NOUNS = "nouns",
}

const questSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  template: {
    type: String,
    enum: [Object.values(QuestTemplate)],
    default: QuestTemplate.ONCHAIN_EVENT,
  },
});

const Quest = mongoose.model<Quest>("Quest", questSchema);

export default Quest;
