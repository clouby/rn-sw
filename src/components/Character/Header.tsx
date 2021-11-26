import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import { Character } from './../../interface'
import { getWords } from '../../utils/words'

export default function Header(props: Character) {
  const { image, name, species, homeworld, bornLocation, diedLocation } = props
  const [imageLoading, setImageLoading] = useState(true)

  const loading = imageLoading
    ? { backgroundColor: 'grey', opacity: 0.5 }
    : { backgroundColor: 'transparent' }

  return (
    <>
      <SafeAreaView style={styles.content}>
        <View style={styles.contentImage}>
          <Image
            source={{ uri: image }}
            style={[styles.image, loading]}
            resizeMode="contain"
            onLoadEnd={() => void setImageLoading(false)}
          />
        </View>
      </SafeAreaView>
      <View style={styles.contentSubheader}>
        <View style={styles.contentName}>
          <Text style={styles.name}>{getWords(name, 2)}</Text>
          <Text style={styles.species}>{species}</Text>
        </View>
        <View style={styles.contentLocation}>
          <Icon name="map-marker" color="grey" size={15} />
          <Text style={styles.locationName}>
            {homeworld ?? bornLocation ?? diedLocation}
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginTop: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  contentImage: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: '80%',
    height: 500,
    borderRadius: 5,
  },
  imageLoader: {
    width: '80%',
    height: 500,
    borderRadius: 5,
    position: 'absolute',
  },
  contentSubheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 45,
    marginBottom: 20,
  },
  contentName: {},
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  species: {
    color: 'grey',
    fontSize: 15,
    textTransform: 'capitalize',
  },
  contentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationName: {
    color: 'grey',
    fontSize: 15,
    textTransform: 'capitalize',
  },
})
