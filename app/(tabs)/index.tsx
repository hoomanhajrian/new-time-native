import { StyleSheet, useColorScheme, ViewStyle } from "react-native";
import { View } from "@/components/Themed";
import TimeComponent from "../../components/TimeComponent";

const TabOneScreen = () => {
  const colorScheme = useColorScheme();

  const styles =
    colorScheme === "light"
      ? StyleSheet.create({
          container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          },
        })
      : StyleSheet.create({
          container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
          },
        });

  return (
    <View style={styles.container}>
      <TimeComponent />
    </View>
  );
};

export default TabOneScreen;
