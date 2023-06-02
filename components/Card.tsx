import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { DateLabel } from "./DateLabel";

export const Card: React.FC<{
  text: string;
  date: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}> = ({ text, date, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress()}
    >
      <View style={styles.card}>
        <Text style={styles.text}>{text}</Text>
        <DateLabel
          date={date}
          style={{
            marginTop: 30,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 24,
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
