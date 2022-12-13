import mongoose from 'mongoose';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 10);

export interface PlayerCardInput {
  swapTime: string;
  swapReason: string;
  oldPlayer: string;
  newPlayer: string;
}

export interface IPlayerCard extends PlayerCardInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const playerCardSchema = new mongoose.Schema(
  {
    playerCardId: {
      type: String,
      default: () => `ps_${nanoid()}`,
      unique: true,
      required: true,
    },
    swapTime: { type: String, required: true },
    swapReason: { type: String, required: true },
    oldPlayer: { type: String, required: true },
    newPlayer: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

const PlayerCardModel = mongoose.model<IPlayerCard>('PlayerCard', playerCardSchema);

export default PlayerCardModel;
