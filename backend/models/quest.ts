import mongoose, { Document } from "mongoose";

interface Quest extends Document {
  title: string;
  description: string;
  image: string;
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
});

const Quest = mongoose.model<Quest>("Quest", questSchema);

export default Quest;
