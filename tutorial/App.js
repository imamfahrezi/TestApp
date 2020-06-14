import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import ListItem from './components/ListItem';

export default function App() {
  const [items, setItems] = useState([
    {id: uuid(), text: 'susu'},
    {id: uuid(), text: 'telur'},
    {id: uuid(), text: 'mie'},
    {id: uuid(), text: 'ayam'},
    {id: uuid(), text: 'garam'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Header title="Shopping List" />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});
