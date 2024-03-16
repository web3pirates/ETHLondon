import mongoose, { Document } from "mongoose";

interface User extends Document {
  farcasterId: string;
  farcasterHandle: string;
}

const userSchema = new mongoose.Schema({
  farcasterId: {
    type: String,
    required: true,
    unique: true,
  },
  farcasterHandle: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<User>("User", userSchema);

export default User;
