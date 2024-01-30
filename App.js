import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const calculateAddition = () => {
    setResult((prevResult) => {
      const newResult = value1 + value2;
      setHistory([...history, `${value1} + ${value2} = ${newResult}`]);
      return newResult;
    });

    setValue1("");
    setValue2("");
  }

  const calculateSubtraction = () => {
    setResult((prevResult) => {
      const newResult = value1 - value2;
      setHistory([...history, `${value1} - ${value2} = ${newResult}`]);
      return newResult;
    });
    setValue1("");
    setValue2("");
  }

  return (
    <View style={styles.container}>

      <View style={styles.viewStyle}>
        <Text>Result: {result}</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={number => setValue1(parseFloat(number))}
          keyboardType='decimal-pad'
          value={value1}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={number => setValue2(parseFloat(number))}
          keyboardType='decimal-pad'
          value={value2}
        />
      </View>

      <View style={styles.buttons}>
        <Button title="+" onPress={() => { calculateAddition() }} />
        <Button title="-" onPress={() => { calculateSubtraction() }} />
      </View>

      <View style={styles.list}>
        <Text>History</Text>
        <FlatList
          data={history}
          renderItem={({ item }) =>
            <View style={styles.listItem}>
              <Text>{item}</Text>
            </View>}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 100,
  },

  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  textInput: {
    width: 200,
    borderColor: "#4c544b",
    borderWidth: 2
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    width: 150,
    justifyContent: 'space-around'
  },

  list: {
    flex: 5,
    width: 300,
    alignItems: 'center'
  },

  listItem: {
    flexDirection: "row",
    width: 300,
    justifyContent: 'center',
  }
});
