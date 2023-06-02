import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useMessages } from "../hooks/useMessages";

export function Create() {
  const [text, setText] = useState("");
  const { goBack } = useNavigation();
  const { addMessage } = useMessages();

  const handleCreate = async () => {
    await addMessage(text);
    goBack();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={goBack}>
          <Text style={{ fontSize: 20, color: "white" }}>x</Text>
        </TouchableOpacity>
        <TextInput
          autoFocus
          style={styles.input}
          placeholder="Start writing..."
          value={text}
          onChange={(ev) => setText(ev.nativeEvent.text)}
        />
        <TouchableOpacity style={styles.createButton} onPress={handleCreate}>
          <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    maxHeight: "90%",
    flex: 1,
    flexDirection: "column",
  },
  closeButton: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    borderRadius: 99999,
    maxWidth: 40,
    maxHeight: 40,
    alignSelf: "flex-end",
    marginRight: 30,
    fontSize: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 28,
    fontWeight: "700",
  },
  createButton: {
    backgroundColor: "black",
    maxHeight: 40,
    paddingHorizontal: 15,
    borderRadius: 14,
    marginTop: "auto",
    alignSelf: "flex-end",
    marginRight: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
