import React, {
  Component,
  View,
  Text,
} from 'react-native'

class Score extends Component {
  render() {
    return (
      <View>
        <Text>You: {this.props.tally.you} | Computer: {this.props.tally.computer}</Text>
      </View>
    )
  }
}

export default Score
