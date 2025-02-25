import { StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface CardRarityProp {
  rarity: number;
}

const CardRarity = ({ rarity }: CardRarityProp) => {
  const radius = 7.5; // Radius of the circle
  const centerX = 15; // X position of the center of the circle
  const centerY = 15; // Y position of the center of the circle
  // Calculate the angle between each icon
  const angleStep = (2 * Math.PI) / rarity;

  return (
    <View style={styles.wrapper}>
      <View style={[styles.circle, { width: 2 * radius, height: 2 * radius }]}>
        {new Array(rarity).fill(null).map((_, index) => {
          const angle = index * angleStep; // The angle for the current icon
          // Calculate the X and Y positions for each icon
          const x = centerX + radius * Math.cos(angle) - 5; // 25 is half the icon's width for centering
          const y = centerY + radius * Math.sin(angle) - 5; // 25 is half the icon's height for centering
          return (
            <AntDesign
              key={index}
              name="star"
              size={10}
              color="white"
              style={[styles.icon, { left: x, top: y }]} // Position the icon
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 30, // Icon width
    height: 30, // Icon height
  },
  circle: {
    borderRadius: 100, // Ensures the container is circular
  },
  icon: {
    position: "absolute",
  },
});

export default CardRarity;
