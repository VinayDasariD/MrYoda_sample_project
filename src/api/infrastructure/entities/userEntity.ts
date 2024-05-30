import { Types, Schema, model, Document } from "mongoose";

export interface IuserEntity extends Document {
  identifier?: string;
  name?: string;
  description?: string;
  default?: boolean;
}

const AddonEntitySchema = new Schema<IuserEntity>({
  identifier: String,
  name: String,
  description: String,
  default: Boolean
});

const Addon = model<IuserEntity>(
  'Addon', // Model name
  AddonEntitySchema, // Schema
  'Addon' // Custom collection name
);

export default Addon;
