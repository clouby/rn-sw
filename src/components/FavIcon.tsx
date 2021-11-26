import React from 'react'
import { StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useStoreActions, useStoreState } from 'easy-peasy'

export default function FavIcon() {
  const { params }: any = useRoute()
  const toggleFavorites = useStoreActions(
    (actions: any) => actions.toggleFavorite,
  )
  const getFavId = useStoreState((state: any) => state.getFavId)

  const handleAddFavorite = React.useCallback(() => {
    toggleFavorites(params.id)
  }, [params?.id])

  const nameIcon = getFavId(params.id) ? 'heart' : 'heart-outline'

  return (
    <Icon
      name={nameIcon}
      size={22}
      color="red"
      style={styles.icon}
      onPress={handleAddFavorite}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 20,
  },
})
