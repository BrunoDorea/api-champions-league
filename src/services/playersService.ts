import * as PlayerRepository from "../repositories/playersRepository"
import { noContent, ok } from "../utils/httpHelper"

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers()
  let response = null

  if (data) {
    response = await ok(data)
  } else {
    response = await noContent()
  }

  return response
}