import { userRoleModel } from "../models/userRoleModel";

export const getUserRoles = async () => {
  const users = await userRoleModel.find({});
  return users;
};

export const getUserRoleById = async (id) => {
  return await userRoleModel.findById(id);
};

export const createUserRole = async (userRole) => {
  return await userRoleModel.create(userRole);
};

export const updateUserRole = async (id, userRole) => {
  return await userRoleModel.findByIdAndUpdate(id, userRole, { new: true });
};

export const deleteUserRole = async (id) => {
  return await userRoleModel.findByIdAndDelete(id);
};
