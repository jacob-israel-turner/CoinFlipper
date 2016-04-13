/**
 * Sample React Native App
 *
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Score from './app/components/score'
import Results from './app/components/results'
import Game from './app/components/game'

class CoinFlipper extends Component {
  constructor() {
    super()
    this.state = {
      tally: {you: 0, computer: 0}, 
      pickedSide: 'heads',
      lastGame: null,
    }
  }
  resolveGame(gameObj) {
    let tallyObj = this.state.tally
    tallyObj[gameObj.winner]++
    this.setState({
      tally: tallyObj,
      lastGame: {winner: gameObj.winner, side: gameObj.side},
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Coin Flipper!
        </Text>
        <Score tally={this.state.tally} />
        {this.state.lastGame ? <Results side={this.state.lastGame.side} winner={this.state.lastGame.winner} /> : null}
        <Game handleGame={this.resolveGame.bind(this)} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CoinFlipper', () => CoinFlipper);
