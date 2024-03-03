import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import CalendarComponent from "@/components/CalendarComponent";
import NewCalendar from "@/components/NewCalendar";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <CalendarComponent />
      <NewCalendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
});
