import { Hono } from "hono";
import { authenticationRoutes } from "./authentication-routes.js";
import { usersRoutes } from "./users-routes.js";
import { logger } from "hono/logger";

export const allRoutes = new Hono();

allRoutes.use(logger());

allRoutes.route("/authentication", authenticationRoutes);
allRoutes.route("/users", usersRoutes);

allRoutes.get("/health", (context) => {
  return context.json(
    {
      message: "All Ok",
    },
    200
  );
});