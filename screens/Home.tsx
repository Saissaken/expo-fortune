import { BlurView } from "expo-blur";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { Message, useMessages } from "../hooks/useMessages";
import { useIsFocused } from "@react-navigation/native";

export function Home() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList, "Home">>();

  const { getMessages } = useMessages();
  const [messages, setMessages] = useState<Array<Message>>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) return;
    async function loadMessages() {
      const messageList = await getMessages();
      setMessages(messageList);
    }

    loadMessages();
  }, [isFocused]);

  const handleOpenMessage = (index: number) => {
    navigate("Details", {
      message: messages[index],
    });
  };

  const handleCreateMessage = () => {
    navigate("Create");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Constants.statusBarHeight + 10,
        }}
      >
        <Text style={styles.pageTitle}>My Fortune</Text>
        <View style={styles.messageList}>
          {messages.map((msg, i) => (
            <Card
              key={i}
              text={msg.text}
              date={msg.date}
              onPress={() => {
                handleOpenMessage(i);
              }}
              style={{
                backgroundColor: msg.color,
                width: i % 5 ? "49%" : "100%",
              }}
            />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreateMessage}
      >
        <Text
          style={{
            color: "white",
            fontSize: 32,
          }}
        >
          +
        </Text>
      </TouchableOpacity>
      <BlurView intensity={40} tint="default" style={styles.header}>
        <StatusBar style="auto" />
        <View
          style={{
            width: "100%",
            height: Constants.statusBarHeight,
          }}
        ></View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  messageList: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
    marginTop: 30,
  },
  createButton: {
    position: "absolute",
    bottom: 50,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowRadius: 3,
  },
});
