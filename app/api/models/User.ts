import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true, select: false, },
});

export default mongoose.model<IUser>("User", userSchema);
