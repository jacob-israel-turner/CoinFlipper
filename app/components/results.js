import React, {
  Component,
  View,
  Text,
} from 'react-native'

class Results extends Component {
  render() {
    return (
      <View>
        <Text>Side: {this.props.side} | Winner: {this.props.winner} </Text>
      </View>
    )
  }
}

export default Results
