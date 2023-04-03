import { Router } from "express";
import { loginUser, registerUser } from "../services/authService";

const authRouter = Router();

authRouter.post("/api/register", async (req, res) => {
  const { email, password, repassword } = req.body;

  if (password !== repassword) {
    return res
      .status(400)
      .json({ success: false, message: "Password did not match" });
  }
  try {
    await registerUser({ email, password });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
  return res
    .status(200)
    .json({ success: true, message: "Register successful" });
});

authRouter.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const response = await loginUser({ email, password });
  res.status(response.status).json(response);
});

export default authRouter;
