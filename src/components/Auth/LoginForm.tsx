import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {
  const [error, setError] = useState<string>('')

  const [_, authActions] = useAuth()

  const form = useFormik({
    initialValues: defaultValuesForm(),
    validationSchema: schemaValidations(),
    onSubmit: (values: any) => {
      const { username, password } = values

      if (username !== user.username || password !== user.password) {
        setError('Username or password are incorrects!')
      } else {
        authActions.login(userDetails)
      }
    },
  })
  return (
    <View>
      <Text style={styles.title}>Sign in to SW</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={form.values.username}
        onChangeText={(value) => form.setFieldValue('username', value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={form.values.password}
        onChangeText={(value) => form.setFieldValue('password', value)}
      />
      <Button title="Sign in" onPress={form.handleSubmit} />

      <Text style={styles.error}>{form.errors.username}</Text>
      <Text style={styles.error}>{form.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function defaultValuesForm() {
  return {
    username: '',
    password: '',
  }
}

function schemaValidations() {
  return Yup.object({
    username: Yup.string().required('Username already required!'),
    password: Yup.string().required('Password already required!').min(6),
  })
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'lightgrey',
  },
  error: {
    color: 'red',
    padding: 20,
    textTransform: 'capitalize',
  },
})
