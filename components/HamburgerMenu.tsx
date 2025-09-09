import React, { useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Tg from "../assets/tg.svg";
import { fonts } from "../constants/fonts";

interface HamburgerMenuProps {
  visible: boolean;
  onHomeClick?: () => void;
  onOrderClick?: () => void;
  onTelegramClick?: () => void;
  onContactClick?: () => void;
  onPrivacyClick?: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  visible,
  onHomeClick,
  onOrderClick,
  onTelegramClick,
  onContactClick,
  onPrivacyClick,
}) => {
  const slideAnim = useRef(new Animated.Value(-1000)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log("HamburgerMenu: visible changed to:", visible);
    if (visible) {
      console.log("HamburgerMenu: Starting open animation");
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      console.log("HamburgerMenu: Starting close animation");
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -1000,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, slideAnim, fadeAnim]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
      <Animated.View
        style={[
          styles.menuContainer,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Menu Content */}
          <View style={styles.content}>
            <TouchableOpacity style={styles.menuItem} onPress={onHomeClick}>
              <Text style={styles.menuItemText}>Главная</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.orderButton} onPress={onOrderClick}>
              <View style={styles.playIcon}>
                <Text style={styles.playIconText}>▶</Text>
              </View>
              <Text style={styles.orderButtonText}>Заказать сайт</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.telegramButton}
              onPress={onTelegramClick}
            >
              <Tg width={16} height={14} />
              <Text style={styles.telegramButtonText}>Telegram канал</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.copyright}>2025 © MOLOKO69.RU</Text>
            <TouchableOpacity onPress={onPrivacyClick}>
              <Text style={styles.privacyText}>
                Политика конфиденциальности
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    paddingTop: 100, // Начинаем под хедером
  },
  menuContainer: {
    backgroundColor: "#fff",
    flex: 1,
    minHeight: "100%", // Занимает всю доступную высоту
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  menuItem: {
    paddingVertical: 16,
    marginBottom: 20,
  },
  menuItemText: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: "#333",
  },
  orderButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
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
  telegramButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 12,
  },
  telegramButtonText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: "#27A6E5",
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F2",
  },
  copyright: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "#999",
    marginBottom: 8,
  },
  privacyText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "#999",
    textDecorationLine: "underline",
  },
});
