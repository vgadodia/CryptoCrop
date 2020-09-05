import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";

function AccountButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome
          name="rupee"
          color={"#FFFFFF"}
          size={40}
          style={{ bottom: 20 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 100,
    justifyContent: "center",
    width: 140,
    backgroundColor: "#1A2C70",
    bottom: 10,
  },
});

export default AccountButton;
