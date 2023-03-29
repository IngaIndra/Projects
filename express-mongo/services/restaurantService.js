import restaurantModel from "../models/restaurantModel.js";

export const createRestaurant = ({ name, location }) => {
  const response = restaurantModel.create({ name, location });
  return response;
};

export const findNearest = async (location) => {
  const response = await restaurantModel.findOne({
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
