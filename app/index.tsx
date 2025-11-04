import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RenderBox } from "../components/render-box";
import { RenderStats } from "../components/render-stats";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0e1014" }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          padding: 24,
          gap: 16,
        }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "600" }}>
          Cross-Renderer Inspector
        </Text>

        <RenderStats />

        <RenderBox color="#5dade2" delay={0} />
        <RenderBox color="#48c9b0" delay={1000} />
        <RenderBox color="#f4d03f" delay={2500} />
      </ScrollView>
    </SafeAreaView>
  );
}
