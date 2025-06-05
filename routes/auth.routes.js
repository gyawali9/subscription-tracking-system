import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post(
  "/sign-out",
  // signOut
  (req, res) => res.send({ message: "Sign out" })
);

export default authRouter;
