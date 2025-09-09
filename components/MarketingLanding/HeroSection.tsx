import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../../constants/fonts";

interface HeroSectionProps {
  onOrderClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Маркетинговое агентство</Text>

      <Text style={styles.subtitle}>
        Сайт — который будет приносить клиентов с момента запуска
      </Text>

      <TouchableOpacity style={styles.orderButton} onPress={onOrderClick}>
        <View style={styles.playIcon}>
          <Text style={styles.playIconText}>▶</Text>
        </View>
        <Text style={styles.orderButtonText}>Заказать сайт</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.semiBold,
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: "#27A6E5",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
    textDecorationLine: "underline",
  },
  orderButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  playIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  playIconText: {
    color: "#FFD700",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 2,
  },
  orderButtonText: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: "#000",
  },
});
