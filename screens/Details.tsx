import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { DateLabel } from "../components/DateLabel";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackParamList } from "../App";

export function Details() {
  const { goBack } = useNavigation();
  const route = useRoute<RouteProp<StackParamList, "Details">>();
  const message = route.params.message;

  return (
    <SafeAreaView
      style={[styles.safeContainer, { backgroundColor: message.color }]}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            goBack();
          }}
        >
          <Text style={{ fontSize: 20 }}>x</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{message.text}</Text>
        <DateLabel date={message.date} />
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeButton: {
    backgroundColor: "#FFFFFF",
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
  text: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    maxWidth: "80%",
  },
});
