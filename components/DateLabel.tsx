import { useMemo } from "react";
import { View, StyleSheet, Text, StyleProp, ViewStyle } from "react-native";

export const DateLabel: React.FC<{
  date: string;
  style?: StyleProp<ViewStyle>;
}> = ({ date, style }) => {
  const parsedDate = useMemo(() => {
    const d = new Date(date);
    const monthName = d.toLocaleString("default", { month: "short" });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${monthName} ${day}, ${year}`;
  }, [date]);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{parsedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "rgba(255,255,255, 0.2)",
    maxWidth: 100,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});
