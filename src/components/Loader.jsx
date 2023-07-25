import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Color } from "../utils";

const AppLoader = (props) => {
  const { loading } = props;
  if (loading) {
    return (
      <View style={styles.container} zIndex={999}>
        <View style={styles.subContainer}>
          <ActivityIndicator size={"large"} color={Color.blue} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default AppLoader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    elevation: 999,
  },
  subContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
