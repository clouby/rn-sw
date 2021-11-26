import React from 'react'
import { SafeAreaView } from 'react-native'
import { useStoreState } from 'easy-peasy'

import CharacterList from '../components/CharacterList'

export default function Favorite() {
  const favorites = useStoreState((state: any) => state.favorites)
  return (
    <SafeAreaView>
      <CharacterList characters={favorites} columns={1} />
    </SafeAreaView>
  )
}
