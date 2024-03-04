import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { darkMode, lightMode } from "@/redux/slices/appSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  // const isEnabled = useSelector();
  const dispatch = useDispatch();

  // switch functionality
  const toggleSwitch = (state: any) => {
    console.log(state);
  };

  const storeData = async (value: string) => {
    value === "active" ? dispatch(darkMode()) : dispatch(lightMode());
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("dark-mode", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("dark-mode");
      if (value !== null) {
        value === "active" ? dispatch(darkMode()) : dispatch(lightMode());
      } else {
        dispatch(lightMode());
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    isEnabled ? storeData("active") : storeData("inactive");
  }, [isEnabled]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerRight: () => (
          <Switch
            trackColor={{ false: "#81b0ff", true: "#767577" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f5dd4b"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Time",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="clock-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="date"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="exclamation-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
