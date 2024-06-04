import express, { Request, Response } from 'express'

function createApp() {
  const app = express()

  app.use(express.json())

  app.get('/', function (req: Request, res: Response) {
    res.status(200).json({ player: "Beckham" })
  })

  return app
}

export default createApp