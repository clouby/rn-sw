import React from 'react'
import { View } from 'react-native'
import LoginForm from '../components/Auth/LoginForm'
import UserDetails from '../components/Auth/UserDetails'
import useAuth from '../hooks/useAuth'

export default function Account() {
  const [{ isAuth }] = useAuth()

  return <View>{isAuth ? <UserDetails /> : <LoginForm />}</View>
}
