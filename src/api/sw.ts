import { API_URL } from '../utils/constants'

export async function getAllCharacters(): Promise<any> {
  try {
    const url = `${API_URL}/all.json`
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export async function getCharacter(id: number) {
  try {
    const url = `${API_URL}/id/${id}.json`
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}
