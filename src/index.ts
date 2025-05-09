import "dotenv/config";
import { allRoutes } from "./routes/routes.js";
import { serve } from "@hono/node-server";

serve(allRoutes, (info) => {
  console.log(`Server is running @ http://localhost:${info.port}`);
});