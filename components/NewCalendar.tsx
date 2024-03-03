import { StyleSheet, useColorScheme } from "react-native";
import { View, Text } from "./Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const NewCalendar = () => {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const colorScheme = useColorScheme();

  const styles =
    colorScheme === "light"
      ? StyleSheet.create({
          calendarContainer: {
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          },
          NewCalendarHeadWrapper: {
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-around",
          },
          dayNamesWrapper: {},
          textStyle: {
            color: "black",
          },
        })
      : StyleSheet.create({
          calendarContainer: {
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          },
          NewCalendarHeadWrapper: {
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-around",
          },
          dayNamesWrapper: {},
          textStyle: {
            color: "white",
          },
        });

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.NewCalendarHeadWrapper}>
        <FontAwesome name="backward" style={styles.textStyle} />
        <Text style={styles.textStyle}>New Calendar</Text>
        <FontAwesome name="forward" style={styles.textStyle} />
      </View>
      <View style={styles.dayNamesWrapper}>
        {days.map((index) => {
          return (
            <Text key={index} style={styles.textStyle}>
              Mon
            </Text>
          );
        })}
      </View>
    </View>
  );
};
export default NewCalendar;
