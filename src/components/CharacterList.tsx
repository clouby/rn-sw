import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import { Character } from '../interface'
import CharacterCard from './CharacterCard'

interface Props {
  characters: Character[]
  columns?: number
}

export default function CharacterList(props: Props) {
  const { characters, columns = 2 } = props

  return (
    <FlatList
      data={characters}
      numColumns={columns}
      contentContainerStyle={styles.flatListContentContainer}
      showsVerticalScrollIndicator={false}
      keyExtractor={(character) => `${character.id}`}
      renderItem={({ item }) => <CharacterCard character={item} />}
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})
