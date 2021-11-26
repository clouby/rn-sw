import React, { useState, useEffect } from 'react'
import { getCharacter } from '../api/sw'
import Main from '../components/Character/Main'
import Header from '../components/Character/Header'

export default function Character(props: any) {
  const {
    route: { params },
    navigation,
  } = props
  const [character, setCharacter] = useState<any>(null)

  useEffect(() => {
    loadCharacter(params.id)
  }, [params.id])

  const loadCharacter = async (id: number) => {
    try {
      const response = await getCharacter(id)

      setCharacter(response)
    } catch (_) {
      navigation.goBack()
    }
  }

  if (!character) return null

  return (
    <Main
      character={character}
      header={() => (
        <Header
          name={character.name}
          species={character.species}
          image={character.image}
          homeworld={character.homeworld}
          bornLocation={character.bornLocation}
          diedLocation={character.diedLocation}
        />
      )}
    />
  )
}
