import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../assets/logo.svg";
import Tg from "../assets/tg.svg";
import { fonts } from "../constants/fonts";

interface HeaderProps {
  onContactPress?: () => void;
  onMenuPress?: () => void;
  isMenuOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onContactPress,
  onMenuPress,
  isMenuOpen = false,
}) => {
  const rotationAnim = useRef(new Animated.Value(0)).current;
  const line1Anim = useRef(new Animated.Value(0)).current;
  const line2Anim = useRef(new Animated.Value(0)).current;
  const line3Anim = useRef(new Animated.Value(0)).current;

  // Инициализация анимации
  useEffect(() => {
    // Убеждаемся, что анимация начинается с правильного состояния
    line1Anim.setValue(0);
    line2Anim.setValue(0);
    line3Anim.setValue(0);
  }, []);

  useEffect(() => {
    console.log("Header: isMenuOpen changed to:", isMenuOpen);

    if (isMenuOpen) {
      // Анимация в крестик
      Animated.parallel([
        Animated.timing(line1Anim, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(line2Anim, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(line3Anim, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Анимация обратно в гамбургер
      Animated.parallel([
        Animated.timing(line1Anim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(line2Anim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(line3Anim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isMenuOpen, line1Anim, line2Anim, line3Anim]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Логотип слева */}
        <View style={styles.logoContainer}>
          <Logo width={144} height={30} />
        </View>

        {/* Кнопка по центру */}
        <TouchableOpacity style={styles.contactButton} onPress={onContactPress}>
          <Tg width={16} height={14} />
          <Text style={styles.contactText}>Связаться</Text>
        </TouchableOpacity>

        {/* Гамбургер-меню справа */}
        <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
          <View style={styles.hamburgerContainer}>
            <Animated.View
              style={[
                styles.hamburgerLine,
                styles.hamburgerLine1,
                {
                  transform: [
                    {
                      rotate: line1Anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"],
                      }),
                    },
                    {
                      translateY: line1Anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 8],
                      }),
                    },
                    {
                      translateX: line1Anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 3],
                      }),
                    },
                  ],
                },
              ]}
            />
            <Animated.View
              style={[
                styles.hamburgerLine,
                styles.hamburgerLine2,
                {
                  opacity: line2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ]}
            />
            <Animated.View
              style={[
                styles.hamburgerLine,
                styles.hamburgerLine3,
                {
                  transform: [
                    {
                      rotate: line3Anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "-45deg"],
                      }),
                    },
                    {
                      translateY: line3Anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -8],
                      }),
                    },
                    {
                      translateX: line3Anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 3],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 200,
    gap: 8,
  },
  contactText: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "#27A6E5",
    lineHeight: 14 * 1.4,
    letterSpacing: 0,
  },
  menuButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  hamburgerContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  hamburgerLine: {
    width: 30,
    height: 4,
    backgroundColor: "#046D53",
    borderRadius: 100,
    position: "absolute",
  },
  hamburgerLine1: {
    top: 5,
  },
  hamburgerLine2: {
    top: 13,
  },
  hamburgerLine3: {
    top: 21,
  },
});
