import React from "react";
import { View, Text, ActivityIndicator, StatusBar } from "react-native";
import { Color, CommonStyles } from "../utils";

function AppLoader() {
    return (
        <View
            style={[
                CommonStyles.container,
                {
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: Color.blackBackground,
                },
            ]}
        >
            <StatusBar translucent={true} backgroundColor={Color.transparent} />
            <Text style={{ textAlignVertical: "center", textAlign: "center" }}>
                <ActivityIndicator size="large" color={Color.blue} />
            </Text>
        </View>
    );
}

export default AppLoader;
