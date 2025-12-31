import express from "express"
import morgan from "morgan"
import Routes from "./routes/routes"
import { corsConfig } from "./config/cors.config"


export function createApp() {
  const app = express()

  app.use(corsConfig)
  app.use(express.json())
  app.use(morgan("dev"))

  app.use("/api/v1", Routes)

  return app
}