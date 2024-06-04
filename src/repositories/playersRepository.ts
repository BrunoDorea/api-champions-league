import { PlayerModel } from "../models/playerModel"

const db: PlayerModel[] = [
  { id: 1, name: 'Leo Messi' },
  { id: 2, name: 'Cristiano Ronaldo' },
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return db
}

export const findPlayersById = async (id: number): Promise<PlayerModel | undefined> => {
  return db.find(player => player.id === id)
}