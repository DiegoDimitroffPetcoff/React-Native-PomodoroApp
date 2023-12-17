import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { TimerFormatter } from "../utils/timeFormatter";

export const Timer = ({ time }) => {
const formattedTime = TimerFormatter(time)


  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    paddingTop: "20%",
    padding: 20,

    borderRadius: 10,
    backgroundColor: "#F2F2F2",
  },
  timer: {
    color: "#333333",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 80,
  },
});
