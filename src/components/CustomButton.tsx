import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Color } from "../utils";

export default function CustomButton({ onPress, label }) {
    return (
        <View style={styles.buttomContainer}>
            <TouchableOpacity
                activeOpacity={0.5}
                style={[
                    styles.bottomButton,
                    {
                        backgroundColor: Color.white,
                    },
                ]}
                onPress={onPress}
            >
                <Text
                    style={{
                        color: Color.violet,
                        fontWeight: "bold",
                    }}
                >
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttomContainer: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        marginBottom: 8,
    },
    bottomButton: {
        margin: 16,
        alignItems: "center",
        padding: 12,
        borderRadius: 12,
    },
});
