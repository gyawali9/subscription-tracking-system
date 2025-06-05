import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get(
  "/",
  getUsers
  // (req, res) => res.send({ title: "GET all users" })
);

userRouter.get(
  "/:id",
  authorize,
  getUser
  // (req, res) => res.send({ title: "GET user details" })
);

userRouter.post("/", (req, res) => res.send({ title: "CREATE new user" }));

userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user" }));

userRouter.delete("/:id", (req, res) => res.send({ title: "delate user" }));

export default userRouter;
