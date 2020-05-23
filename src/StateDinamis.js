import React, {useState, Component} from 'react';
import {View, Text, Button} from 'react-native';

const Counter = () => {
  const [Count, setCount] = useState(0);
  return (
    <View>
      <Text>functional components</Text>
      <Text style={{textAlign: 'center'}}>{Count}</Text>
      <Button title="plus" onPress={() => setCount(Count + 1)} />
    </View>
  );
};

class Number extends Component {
  state = {
    Num: 0,
  };

  render() {
    const min = () => {
      this.setState({
        Num: this.state.Num - 1,
      });
    };
    return (
      <View style={{marginTop: 30}}>
        <Text>class components</Text>
        <Text style={{textAlign: 'center'}}>{this.state.Num}</Text>
        <Button title="min" onPress={min} />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>components dinamis dengan state</Text>
      <Counter />
      <Number />
    </View>
  );
};

export default StateDinamis;
