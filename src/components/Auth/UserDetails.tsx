import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useStoreState } from 'easy-peasy'
import useAuth from '../../hooks/useAuth'

export default function UserDetails() {
  const [{ user }, { logout }] = useAuth()

  const countFavs = useStoreState((state: any) => state.countFavs)
  return (
    <View style={styles.content}>
      <View style={styles.titleContent}>
        <Text style={styles.title}>Welcome, </Text>
        <Text
          style={[styles.titleName, styles.title]}
        >{`${user.firstName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Names" text={`${user.firstName} ${user.lastName}`} />
        <ItemMenu title="Username" text={user.username} />
        <ItemMenu title="Email" text={user.email} />
        <ItemMenu title="Total Favorites" text={`${countFavs} Characters`} />
      </View>

      <Button title="Logout" onPress={logout} color="red" />
    </View>
  )
}

function ItemMenu(props: any) {
  const { title, text } = props
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text style={styles.itemMenuText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleContent: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
  },
  titleName: {
    fontWeight: 'bold',
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    paddingVertical: 10,
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    color: 'grey',
    width: 120,
  },
  itemMenuText: {
    paddingTop: 5,
    fontSize: 16,
  },
  logoutButton: {
    color: 'red',
  },
})
