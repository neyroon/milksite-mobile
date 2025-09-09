import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../../constants/fonts";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ServiceCardProps {
  service: Service;
  onPress?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Text style={styles.imageEmoji}>{service.image}</Text>

        {/* Имитация экранов устройств */}
        <View style={styles.deviceMockup}>
          <View style={styles.tablet}>
            <View style={styles.tabletScreen}>
              <View style={styles.chart}>
                <Text style={styles.chartText}>24%</Text>
              </View>
              <View style={styles.widgets}>
                <View style={[styles.widget, { backgroundColor: "#FF6B6B" }]} />
                <View style={[styles.widget, { backgroundColor: "#4ECDC4" }]} />
                <View style={[styles.widget, { backgroundColor: "#45B7D1" }]} />
              </View>
            </View>
          </View>

          <View style={styles.laptop}>
            <View style={styles.laptopScreen}>
              <Text style={styles.laptopTitle}>Alphavite</Text>
              <View style={styles.chatInterface}>
                <View style={styles.chatBubble} />
                <View style={styles.chatBubble} />
                <View style={styles.connectionNodes}>
                  <View style={styles.node} />
                  <View style={styles.node} />
                  <View style={styles.node} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.phone}>
            <View style={styles.phoneScreen}>
              <View style={styles.avatarList}>
                <View style={styles.avatar} />
                <View style={styles.avatar} />
                <View style={styles.avatar} />
              </View>
              <Text style={styles.phoneText}>социальный сервис</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.description}>{service.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  imageContainer: {
    height: 200,
    backgroundColor: "#F8F9FA",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  imageEmoji: {
    fontSize: 48,
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  deviceMockup: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  tablet: {
    width: 80,
    height: 60,
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 4,
    position: "absolute",
    top: 20,
    right: 20,
  },
  tabletScreen: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    width: 20,
    height: 20,
    backgroundColor: "#4ECDC4",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  chartText: {
    fontSize: 8,
    fontFamily: fonts.semiBold,
    color: "#fff",
  },
  widgets: {
    flexDirection: "row",
    gap: 2,
  },
  widget: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  laptop: {
    width: 100,
    height: 70,
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 4,
    position: "absolute",
    bottom: 30,
    left: 20,
  },
  laptopScreen: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 6,
  },
  laptopTitle: {
    fontSize: 8,
    fontFamily: fonts.semiBold,
    color: "#333",
    marginBottom: 4,
  },
  chatInterface: {
    flex: 1,
    justifyContent: "center",
  },
  chatBubble: {
    width: 20,
    height: 8,
    backgroundColor: "#4ECDC4",
    borderRadius: 4,
    marginBottom: 2,
  },
  connectionNodes: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
    marginTop: 4,
  },
  node: {
    width: 4,
    height: 4,
    backgroundColor: "#FF6B6B",
    borderRadius: 2,
  },
  phone: {
    width: 30,
    height: 50,
    backgroundColor: "#333",
    borderRadius: 6,
    padding: 2,
    position: "absolute",
    top: 50,
    left: 50,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 3,
    alignItems: "center",
  },
  avatarList: {
    flexDirection: "row",
    gap: 1,
    marginBottom: 2,
  },
  avatar: {
    width: 4,
    height: 4,
    backgroundColor: "#666",
    borderRadius: 2,
  },
  phoneText: {
    fontSize: 4,
    fontFamily: fonts.regular,
    color: "#666",
    textAlign: "center",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: "#333",
    marginBottom: 8,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "#666",
    lineHeight: 20,
  },
});
