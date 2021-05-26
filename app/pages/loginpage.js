import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textinput: {
    height: 30,
    margin: 5,
    borderBottomWidth: 1
  },
  link: {
    color: 'blue'
  }
})

export default function LoginPage (props) {
  // const [username, handleUsername] = useState('')
  // const [password, handlePassword] = useState('')

  // TODO: make password hidden and hook up button to backend
  // figure out some way to store credentials locally to
  // streamline the login process.
  return (
    <View>
      <TextInput
        style={styles.textinput}
        placeholder="Username"
        onChangeText={(text) => handleUsername(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        onChangeText={(text) => handlePassword(text)}
      />
      <Button title="Login" onPress={() => alert('logging in...')} />
      <br />
      <Text>
        Don't have an account yet?{' '}
        <Text style={styles.link} onPress={() => props.handlePage('signup')}>
          Sign up
        </Text>
      </Text>
    </View>
  )
}
