import { bottomTabs, TabPaths, TabRoutes } from "@/constants/constant";
import { Colors, FontWeights, Sizes } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PlatformPressable } from "@react-navigation/elements";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface TabItemProps {
  tab: {
    label: TabRoutes;
    route: TabRoutes;
    path: TabPaths;
    icon: string;
  };
  active: boolean;
  setLayouts: React.Dispatch<
    React.SetStateAction<Record<string, { x: number; width: number }>>
  >;
}

const tabs = bottomTabs;

function BottomNav({ state }: { state: any }) {
  const current = state.routes[state.index].name;

  const [layouts, setLayouts] = useState<
    Record<string, { x: number; width: number }>
  >({});

  const translateX = useSharedValue(0);
  const pillWidth = useSharedValue(0);

  useEffect(() => {
    const active = layouts[current];

    if (active) {
      translateX.value = withSpring(active.x);
      pillWidth.value = withSpring(active.width + 48);
    }
  }, [current, layouts, pillWidth, translateX]);

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: pillWidth.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, sliderStyle]} />
      {tabs.map((tab) => (
        <TabItem
          key={tab.route}
          tab={tab}
          active={current === tab.route}
          setLayouts={setLayouts}
        />
      ))}
    </View>
  );
}

function TabItem({ tab, active, setLayouts }: Readonly<TabItemProps>) {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.7);

  useEffect(() => {
    scale.value = withSpring(active ? 1.12 : 1);
    opacity.value = withTiming(active ? 1 : 0.7);
  }, [active, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
    display: "flex",
    alignItems: "center",
  }));

  return (
    <PlatformPressable
      onLayout={(e) => {
        const { x, width } = e.nativeEvent.layout;

        setLayouts((prev) => ({
          ...prev,
          [tab.route]: { x, width },
        }));
      }}
      onPress={() => router.navigate(tab.path)}
    >
      <Animated.View style={animatedStyle}>
        <MaterialCommunityIcons
          name={tab.icon}
          size={24}
          color={active ? Colors.primary : Colors.textSecondary}
        />
        <Text style={[styles.label, active && styles.activeLabel]}>
          {tab.label}
        </Text>
      </Animated.View>
    </PlatformPressable>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: Colors.accent,
    borderWidth: Sizes.borderWidth,
    backgroundColor: Colors.backgroundWhite,
    borderRadius: Sizes.radius,
    paddingVertical: Sizes.paddingVertical,
  },
  label: {
    marginTop: 4,
    fontSize: Sizes.font,
    color: Colors.textSecondary,
  },
  activeLabel: {
    color: Colors.primary,
    fontWeight: FontWeights.bold,
  },
  slider: {
    position: "absolute",
    top: 8,
    bottom: 8,
    left: -24,
    borderRadius: Sizes.radius,
    backgroundColor: Colors.accent,
  },
});
