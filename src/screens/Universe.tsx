import { useStoreActions } from 'easy-peasy'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { getAllCharacters } from '../api/sw'
import CharacterList from '../components/CharacterList'

export default function Universe() {
  const [characters, setCharacters] = useState([])
  const pushAllCharacters = useStoreActions(
    (actions: any) => actions.pushAllCharacters,
  )

  useEffect(() => {
    loadCharacters()
  }, [])

  const loadCharacters = async () => {
    try {
      const response = await getAllCharacters()

      const charactersMapped = response.map((character: any) => ({
        id: character.id,
        name: character.name,
        species: character.species,
        homeworld: character.homeworld,
        image: character.image,
        masters: character.masters,
      }))

      setCharacters(charactersMapped)
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
