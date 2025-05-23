import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscription" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscription details" })
);

subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "CREATE subscription" })
);

subscriptionRouter.put("/:", (req, res) =>
  res.send({ title: "UPDATE subscription" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE subscription" })
);

subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "GET all user subscriptions" })
);

subscriptionRouter.put("/user/:id", (req, res) =>
  res.send({ title: "CANCEL subscriptions" })
);

subscriptionRouter.get("/upcoming-renewels", (req, res) =>
  res.send({ title: "GET upcoming renewels" })
);

export default subscriptionRouter;
