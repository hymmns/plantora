import { Tabs } from "expo-router";
import React from "react";

import BottomNav from "@/components/BottomNav";
import { Colors, FontWeights, Sizes } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNav {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors.background,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerStyle: { backgroundColor: Colors.background },
          headerTitleStyle: {
            fontSize: Sizes.screenTitle,
            fontWeight: FontWeights.extraBold,
            color: Colors.primary,
          },
        }}
      />

      <Tabs.Screen
        name="diagnostics"
        options={{
          title: "Diagnostics",
          headerStyle: { backgroundColor: Colors.background },
          headerTitleStyle: {
            fontSize: Sizes.screenTitle,
            fontWeight: FontWeights.extraBold,
            color: Colors.primary,
          },
        }}
      />
    </Tabs>
  );
}
