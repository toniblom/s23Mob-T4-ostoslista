import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function App() {
  
  const [text, setText] = useState();
  const [data, setData] = useState([]);
  
  const addPressed = () => {
    setText(text);
    setData([...data, { key: text }]);
  }
  
  const clearPressed = () => {
    setData([])
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />

      <View style={styles.buttons}>
          <View style={styles.button}>
          </View>
          <View style={styles.button}>
            <Button onPress={addPressed} title="Add" />
          </View>
          <View style={styles.button}>
            <Button onPress={clearPressed} title="Clear" />
          </View>
          <View style={styles.button}>
          </View>
      </View>

      <Text style={{fontWeight: "bold", color: "blue"}}>Shopping List</Text>

      <FlatList style={styles.list}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  input: {
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justyifyContent: "space-around",
  },
  button: {
    flex: 1,
    margin: 20,
  }
});
