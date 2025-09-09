import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fonts } from "../../constants/fonts";
import { ServiceCard } from "./ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ServicesSectionProps {
  onServiceClick?: (service: Service) => void;
}

const categories = [
  "Популярные",
  "Разработка, дизайн и брендинг",
  "Маркетинг",
  "Мобильные приложения",
  "Автоматизация",
];

const services: Service[] = [
  {
    id: "1",
    title: "Бесплатный концепт сайта",
    description: "Разработаем бесплатный концепт вашего будущего сайта",
    image: "💻",
    category: "Популярные",
  },
  {
    id: "2",
    title: "Бесплатный аудит сайта",
    description: "Проведем полный анализ вашего сайта и дадим рекомендации",
    image: "📊",
    category: "Популярные",
  },
  {
    id: "3",
    title: "Дизайн логотипа",
    description: "Создадим уникальный логотип для вашего бренда",
    image: "🎨",
    category: "Разработка, дизайн и брендинг",
  },
  {
    id: "4",
    title: "Мобильное приложение",
    description: "Разработаем приложение для iOS и Android",
    image: "📱",
    category: "Мобильные приложения",
  },
  {
    id: "5",
    title: "Реклама в соцсетях",
    description: "Настроим эффективную рекламу в Facebook и Instagram",
    image: "📢",
    category: "Маркетинг",
  },
  {
    id: "6",
    title: "Telegram бот",
    description: "Создадим бота для автоматизации бизнес-процессов",
    image: "🤖",
    category: "Автоматизация",
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onServiceClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Популярные");

  const filteredServices = services.filter(
    (service) => service.category === selectedCategory
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Услуги</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryTag,
              selectedCategory === category && styles.categoryTagActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.servicesContainer}
        style={styles.servicesScroll}
      >
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onPress={() => onServiceClick?.(service)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.semiBold,
    color: "#333",
    marginBottom: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 4,
    marginBottom: 24,
  },
  categoryTag: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryTagActive: {
    backgroundColor: "#046D53",
  },
  categoryText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "#666",
  },
  categoryTextActive: {
    color: "#fff",
  },
  servicesContainer: {
    paddingHorizontal: 4,
  },
  servicesScroll: {
    flexGrow: 0,
  },
});
