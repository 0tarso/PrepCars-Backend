import express from "express"
import cors from "cors"
import morgan from "morgan"
import Routes from "./routes/routes"


export function createApp() {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(morgan("dev"))

  app.use("/api/v1", Routes)

  return app
}