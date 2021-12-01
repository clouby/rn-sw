import React from 'react'
import { SafeAreaView } from 'react-native'
import { useStoreState } from 'easy-peasy'

import CharacterList from '../components/CharacterList'
import useAuth from '../hooks/useAuth'

export default function Favorite() {
  const favorites = useStoreState((state: any) => state.favorites)
  const [{ isAuth }] = useAuth()

  return (
    <SafeAreaView>
      {isAuth ? <CharacterList characters={favorites} columns={1} /> : null}
    </SafeAreaView>
  )
}
