import mongoose from "mongoose";

export const UserRole = {
  name: {
    type: String,
    required: true,
  },
};

export const userRoleSchema = new mongoose.Schema(UserRole, {
  timestamps: true,
});

export const userRoleModel = mongoose.model("UserRole", userRoleSchema);
