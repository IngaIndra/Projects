import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
});

const orderModel = mongoose.model("Order", orderSchema);

orderModel.collection.createIndex({ location: "2dsphere" });

export default orderModel;
