import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import * as Speech from 'expo-speech'
import Button from '@mui/material/Button'
import TranslateIcon from '@mui/icons-material/Translate';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  talk = () => {
    var words = this.state.text
    Speech.speak(words)
  }

  pause = () => {
    var words = this.state.text
    Speech.stop(words)
  }

  render() {
    return (
      <View style={styles.container}>
        <TranslateIcon sx={{ fontSize: 150 }}/>
        <TextInput placeholder='type something...' onChangeText={(text) => {
           this.setState({text: text})
         }} value={this.state.text} multiline={20} style={styles.placeholder}/>

        <View style={{justifyContent: 'space-evenly', flexDirection: 'row', padding: 30, paddingRight: 50}}>
        <Button variant="contained" onClick={() => { this.talk() }} size="large">speak</Button>
        <Button variant="contained" onClick={() => { this.pause() }} size="large">pause</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholder: {
    fontSize: 20,
    color: '#888',
    outline: '30px solid #888',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
    width: '80%',
  }, 
})
