export interface Character {
  id?: number
  name: string
  species: string
  homeworld: string
  image: string
  masters?: string[]
  bornLocation?: string
  diedLocation?: string
}
