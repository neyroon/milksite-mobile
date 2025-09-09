import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Header } from "./components/Header";
import { MarketingLanding } from "./components/MarketingLanding";

export default function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleContactPress = () => {
    Alert.alert("Связаться", "Функция связи будет реализована позже");
  };

  const handleMenuPress = () => {
    if (isMenuVisible) {
      console.log("App: Closing menu");
      setIsMenuVisible(false);
    } else {
      console.log("App: Opening menu");
      setIsMenuVisible(true);
    }
  };

  const handleCloseMenu = () => {
    console.log("App: Closing menu");
    setIsMenuVisible(false);
  };

  const handleOrderClick = () => {
    Alert.alert("Заказ", "Функция заказа сайта будет реализована позже");
  };

  const handleServiceClick = (service: string) => {
    Alert.alert("Услуга", `Вы выбрали услугу: ${service}`);
  };

  const handleServiceCardClick = (service: any) => {
    Alert.alert("Услуга", `Вы выбрали: ${service.title}`);
  };

  const handleHomeClick = () => {
    setIsMenuVisible(false);
    setTimeout(() => {
      Alert.alert("Главная", "Переход на главную страницу");
    }, 300); // Ждем завершения анимации
  };

  const handleTelegramClick = () => {
    setIsMenuVisible(false);
    setTimeout(() => {
      Alert.alert("Telegram", "Переход в Telegram канал");
    }, 300); // Ждем завершения анимации
  };

  const handlePrivacyClick = () => {
    Alert.alert(
      "Политика конфиденциальности",
      "Открытие политики конфиденциальности"
    );
  };

  return (
    <View style={styles.container}>
      <Header
        onContactPress={handleContactPress}
        onMenuPress={handleMenuPress}
        isMenuOpen={isMenuVisible}
      />

      <MarketingLanding
        onOrderClick={handleOrderClick}
        onServiceClick={handleServiceClick}
        onServiceCardClick={handleServiceCardClick}
      />

      <HamburgerMenu
        visible={isMenuVisible}
        onHomeClick={handleHomeClick}
        onOrderClick={handleOrderClick}
        onTelegramClick={handleTelegramClick}
        onContactClick={handleContactPress}
        onPrivacyClick={handlePrivacyClick}
      />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
