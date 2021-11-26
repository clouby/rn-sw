import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Character } from '../interface'
import { getWords } from '../utils/words'

interface Props {
  character: Character
}

export default function CharacterCard(props: Props) {
  const { character } = props
  const navigation = useNavigation()

  const goToDetails = () => {
    navigation.navigate('Character', { id: character.id })
  }
  return (
    <TouchableWithoutFeedback onPress={goToDetails}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bg}>
            <Text style={styles.name}>{getWords(character.name, 2)}</Text>
            <Text style={styles.species}>{character.species}</Text>
            <Image source={{ uri: character.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 60,
  },
  spacing: {
    flex: 1,
    margin: 5,
  },
  bg: {
    backgroundColor: '#333333',
    borderRadius: 5,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 5,
    zIndex: 1,
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 5,
    // textShadowColor: 'grey',
  },
  image: {
    position: 'absolute',
    top: 35,
    right: 0,
    height: 70,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  species: {
    paddingHorizontal: 5,
    paddingBottom: 5,
    color: 'grey',
    textTransform: 'capitalize',
  },
})
