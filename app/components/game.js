import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

class Game extends Component {
  constructor() {
    super()
    this.state = {side: 'heads'}
  }
  handlePress(side) {
    this.setState({side})
  }
  playGame() {
    const flip = Math.random()
    const side = flip < .5 ? 'heads' : 'tails'
    const winner = side === this.state.side ? 'you' : 'computer'
    this.props.handleGame({side, winner})
  }
  render() {
    const pickedSide = this.state.side
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.handlePress.bind(this, 'heads')}>
            <Text style={pickedSide === 'heads' ? styles.picked : null}>Heads</Text>
          </TouchableOpacity>
          <Text> | </Text>
          <TouchableOpacity onPress={this.handlePress.bind(this, 'tails')}>
            <Text style={pickedSide === 'tails' ? styles.picked : null}>Tails</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.playGame.bind(this)}><Text>Flip!</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  picked: {
    textDecorationLine: 'underline',
  },
  container: {
    flexDirection: 'row'
  }
})

export default Game
