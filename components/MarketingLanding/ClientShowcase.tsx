import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { fonts } from "../../constants/fonts";

interface ClientShowcaseProps {
  clientCount?: number;
}

export const ClientShowcase: React.FC<ClientShowcaseProps> = ({
  clientCount = 100,
}) => {
  // Массив аватаров клиентов (в реальном проекте это были бы URL изображений)
  const clientAvatars = ["👨‍💼", "🏃‍♂️", "👩", "🧔", "👨‍💻", "👩‍💼", "👨‍🎨", "👩‍🔬"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Более {clientCount} довольных клиентных проектов
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.avatarsContainer}
      >
        {clientAvatars.map((avatar, index) => (
          <View key={index} style={styles.avatar}>
            <Text style={styles.avatarText}>{avatar}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
  },
  avatarsContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
  avatarText: {
    fontSize: 24,
  },
});
