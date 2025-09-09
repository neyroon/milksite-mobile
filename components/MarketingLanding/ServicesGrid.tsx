import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../../constants/fonts";

interface ServicesGridProps {
  onServiceClick?: (service: string) => void;
}

const services = [
  "сайт под ключ",
  "продвижение сайта",
  "реклама",
  "телеграм бот",
  "мобильное приложение",
  "логотип",
  "дизайн сайта",
  "фирменный стиль",
  "брендинг и брендбук",
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onServiceClick,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceTag}
            onPress={() => onServiceClick?.(service)}
          >
            <Text style={styles.serviceText}>{service}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceTag: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 12,
    minWidth: "30%",
    alignItems: "center",
  },
  serviceText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "#000",
    textAlign: "center",
  },
});
