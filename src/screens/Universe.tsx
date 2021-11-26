import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { getAllCharacters } from '../api/sw'
import CharacterList from '../components/CharacterList'

export default function Universe() {
  const characters = useStoreState((state: any) => state.characters)

  const pushAllCharacters = useStoreActions(
    (actions: any) => actions.pushAllCharacters,
  )

  useEffect(() => {
    loadCharacters()
  }, [])

  const loadCharacters = async () => {
    try {
      const response = await getAllCharacters()

      pushAllCharacters(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <CharacterList characters={characters} />
    </SafeAreaView>
  )
}
