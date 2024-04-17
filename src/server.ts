import { env } from "./config/env";
import { app } from "./config/app";

import { userRoutes } from "./http/routes/index";

app.register(userRoutes);

app.listen({port: env.PORT})
  .then(() => console.log("Running..."));
