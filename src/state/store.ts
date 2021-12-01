import { createStore, action, computed, persist } from 'easy-peasy'
import AsyncStorage from '@react-native-async-storage/async-storage'

const authModel = {
  user: null,
  login: action((state: any, payload = {}) => {
    state.user = payload
  }),
  logout: action((state: any, _) => {
    state.user = null
  }),
  isAuth: computed((state: any) => {
    return state.user !== null
  }),
}

const model = {
  // User
  auth: authModel,
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
  countFavs: computed((state: any) => state.favorites.length),
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
}

export const store = createStore(
  persist(model, {
    storage: AsyncStorage,
    allow: ['favorites', '_favs'],
    mergeStrategy: 'overwrite',
  }),
)
