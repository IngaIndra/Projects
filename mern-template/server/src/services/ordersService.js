import orderModel from "../models/orderModel";

export const createOrder = async (order) => {
  const response = await orderModel.create(order);
  return response;
};

export const findAllOrders = async () => {
  const response = await orderModel.find({});
  return response;
};

export const findNearestOrder = async (location) => {
  const response = await orderModel.findOne({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: location,
        },
        $maxDistance: 1000,
      },
    },
  });
  return response;
};
