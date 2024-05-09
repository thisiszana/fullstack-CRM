import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
  },
  phone: String,
  address: String,
  postalCode: Number,
  date: Date,
  products: {
    type: Array,
    default: [],
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  uppdatedAt: { type: Date, default: () => Date.now() },
});

const Customer = models.Customer || model("Customer", CustomerSchema);
export default Customer;
