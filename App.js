import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const LotsOfStyles = () => {

  const [name, setName] = useState('shawn');
  const [person, setPerson] = useState({
    name: 'David',
    age: 50
  })
  const pressHandler = () => {
    setName('Paul');
    setPerson({
      name: 'John',
      age: 60
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>{name}</Text>
      <Text style={styles.secondText}> {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Press me" onPress={pressHandler} />

      </View>
      <TextInput style={styles.input} placeholder="Name" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
  },

  boldText: {
    fontWeight: 'bold',
    backgroundColor: '#ccc',
    padding: 20,
  },
  secondText: {
    backgroundColor: 'red',
    padding: 20,
    color: 'white',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250
  }
});

export default LotsOfStyles;