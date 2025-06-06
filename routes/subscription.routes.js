import { Router } from "express";
import {
  createSubscription,
  getUserSubscription,
} from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscription" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscription details" })
);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE subscription" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE subscription" })
);

subscriptionRouter.get(
  "/user/:id",
  authorize,
  getUserSubscription
  // (req, res) =>
  // res.send({ title: "GET all user subscriptions" })
);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscriptions" })
);

subscriptionRouter.get("/upcoming-renewels", (req, res) =>
  res.send({ title: "GET upcoming renewels" })
);

export default subscriptionRouter;
