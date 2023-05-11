import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-web";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ backgroundColor: "red", width: 100, height: 100, justifyContent: "center", alignItems: "center" }}>
        {/* <Text>List of goals!!</Text> */}
        <Text>1</Text>
      </View>
      <View
        style={{ backgroundColor: "blue", width: 100, height: 100, justifyContent: "center", alignItems: "center" }}
      >
        {/* <Text>List of goals!!</Text> */}
        <Text>2</Text>
      </View>
      <View
        style={{ backgroundColor: "green", width: 100, height: 100, justifyContent: "center", alignItems: "center" }}
      >
        {/* <Text>List of goals!!</Text> */}
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { padding: 20 },
  inputContainer: { flexDirection: "column", justifyContent: "space-between" },
});
{
  /* <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" />
        <Button title="ADD Goal!!" /> */
}
