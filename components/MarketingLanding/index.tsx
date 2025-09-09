import React from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { ClientShowcase } from "./ClientShowcase";
import { HeroSection } from "./HeroSection";
import { ServicesGrid } from "./ServicesGrid";
import { ServicesSection } from "./ServicesSection";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface MarketingLandingProps {
  onOrderClick?: () => void;
  onServiceClick?: (service: string) => void;
  onServiceCardClick?: (service: Service) => void;
}

export const MarketingLanding: React.FC<MarketingLandingProps> = ({
  onOrderClick,
  onServiceClick,
  onServiceCardClick,
}) => {
  const handleOrderClick = () => {
    if (onOrderClick) {
      onOrderClick();
    } else {
      Alert.alert("Заказать сайт", "Функция заказа будет реализована позже");
    }
  };

  const handleServiceClick = (service: string) => {
    if (onServiceClick) {
      onServiceClick(service);
    } else {
      Alert.alert("Услуга", `Вы выбрали: ${service}`);
    }
  };

  const handleServiceCardClick = (service: Service) => {
    if (onServiceCardClick) {
      onServiceCardClick(service);
    } else {
      Alert.alert("Услуга", `Вы выбрали: ${service.title}`);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection onOrderClick={handleOrderClick} />
      <ClientShowcase clientCount={100} />
      <ServicesGrid onServiceClick={handleServiceClick} />
      <ServicesSection onServiceClick={handleServiceCardClick} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
