import { PlayerModel } from "../models/playerModel"
import * as PlayerRepository from "../repositories/playersRepository"
import * as HttpResponse from "../utils/httpHelper"

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers()
  let response = null

  if (data) {
    response = await HttpResponse.ok(data)
  } else {
    response = await HttpResponse.noContent()
  }

  return response
}

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayersById(id)
  let response = null

  if (data) {
    response = await HttpResponse.ok(data)
  } else {
    response = await HttpResponse.noContent()
  }

  return response
}

export const createPlayerService = async (player: PlayerModel) => {
  let response = null

  if (Object.keys(player).length !== 0) {
    await PlayerRepository.insertPlayer(player)
    response = HttpResponse.created()
  } else {
    response = HttpResponse.badRequest()
  }

  return response
}