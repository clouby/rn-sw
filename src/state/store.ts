import { createStore, action, computed } from 'easy-peasy'

export const store = createStore({
  // Favorites
  _favs: {},
  favorites: computed((state: any) =>
    Object.entries(state._favs)
      .filter(([_, value]) => value)
      .map(([key]) => state._chars[key]),
  ),
  toggleFavorite: action((state: any, payload) => {
    if (!state._favs[payload]) {
      state._favs[payload] = true
      return
    }

    state._favs[payload] = !state._favs[payload]
  }),
  getFavId: computed((state: any) => {
    return (id: number) => !!state._favs[id]
  }),
  // Characters
  _chars: computed((state: any) => {
    const mapped = state.characters.reduce((prev: any, current: any) => {
      prev[current.id] = current
      return { ...prev }
    }, {})
    return mapped
  }),
  characters: [],
  pushAllCharacters: action((state: any, payload = []) => {
    state.characters = payload
  }),
})
