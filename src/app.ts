import express from "express";
import config from "./config";
import videosRoutes from "./routes/videos.routes";

const app = express();

app.set("port", config.PORT);

app.use(videosRoutes);

export default app;
