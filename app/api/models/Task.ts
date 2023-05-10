import mongoose from "mongoose";

interface ITask extends mongoose.Document {
  name: string;
}

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ITask>("Task", taskSchema);
