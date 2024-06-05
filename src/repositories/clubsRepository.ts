import { ClubModel } from "../models/clubModel"

const db = [{
  id: 1,
  name: 'Real Madrid'
}]

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return db
}