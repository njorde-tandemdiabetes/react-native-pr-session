import { StyleSheet, View } from "react-native";
import { messages } from "./messageData";
import MessageList from "./Messages";

/**
 * In order to focus on feedback for React and React Native,
 * messages are loaded via a file import.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <MessageList messages={messages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
