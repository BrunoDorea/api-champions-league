import { Router } from "express"
import * as PlayerController from "./controllers/playersController"

const router = Router()

router.get('/players', PlayerController.getPlayer)
router.post('/players', PlayerController.createPlayer)

router.get('/players/:id', PlayerController.getPlayerById)

export default router