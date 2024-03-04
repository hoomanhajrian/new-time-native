import { StyleSheet, useColorScheme, ViewStyle } from "react-native";
import { View } from "@/components/Themed";
import TimeComponent from "../../components/TimeComponent";
import { getAppModeState, useSelector } from "../redux";
import Colors from "@/constants/Colors";

const TabOneScreen = () => {
  const appMode = useSelector(getAppModeState);

  const styles =
    appMode === "light"
      ? StyleSheet.create({
          container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.light.background,
          },
        })
      : StyleSheet.create({
          container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.dark.background,
          },
        });

  return (
    <View style={styles.container}>
      <TimeComponent />
    </View>
  );
};

export default TabOneScreen;
