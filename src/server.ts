import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', function (req: Request, res: Response) {
  res.status(200).json({player: "Beckham"})
})

app.listen(port, () => {
  console.log(`🔥 Server running at port http://localhost:${port}`)
})