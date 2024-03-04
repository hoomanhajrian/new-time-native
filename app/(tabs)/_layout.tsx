import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Switch, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch, getAppModeState, appSlice } from "../redux";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const appMode = useSelector(getAppModeState);

  const dispatch = useDispatch();

  // switch functionality
  const toggleSwitch = (dark: any) => {
    dark
      ? dispatch(appSlice.actions.darkMode())
      : dispatch(appSlice.actions.lightMode());
  };

  const storeAppMode = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("dark-mode", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getAppMode = async () => {
    try {
      const value = await AsyncStorage.getItem("dark-mode");
      console.log(value);

      // if (value !== null) {
      //   value === "active"
      //     ? dispatch(appSlice.actions.darkMode())
      //     : dispatch(appSlice.actions.lightMode());
      // } else {
      //   dispatch(appSlice.actions.lightMode());
      // }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    appMode === "dark" ? storeAppMode("active") : storeAppMode("inactive");
  }, [appMode]);

  useEffect(() => {
    getAppMode();
  }, []);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          appMode === "dark"
            ? Colors.dark.tabIconDefault
            : Colors.light.tabIconSelected,
        tabBarActiveBackgroundColor: appMode === "dark" ? "black" : "lightblue",
        tabBarInactiveBackgroundColor:
          appMode === "dark" ? "black" : "lightblue",
        headerTintColor: appMode === "dark" ? "white" : "black",
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor:
            appMode === "dark"
              ? Colors.dark.background
              : Colors.light.background,
        },
        headerRight: () => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {appMode === "dark" ? (
              <Text
                style={{
                  color: Colors.dark.text,
                  marginRight: 5,
                }}
              >
                Theme: Dark
              </Text>
            ) : (
              <Text
                style={{
                  color: Colors.light.text,
                  marginRight: 5,
                }}
              >
                Theme: Light
              </Text>
            )}
            <Switch
              trackColor={{ false: "#81b0ff", true: "#767577" }}
              thumbColor={appMode === "dark" ? "#f4f3f4" : "#f5dd4b"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={appMode === "dark" ? true : false}
            />
          </View>
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
