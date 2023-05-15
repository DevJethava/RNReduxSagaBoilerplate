import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { getDashbordData } from "../../redux/actions/homeActions";
import { connect } from "react-redux";
import Toast from "react-native-toast-message";
import {
  Const,
} from "../../utils";

const HomeScreen = ({ navigation, ...props }) => {
  const insets = useSafeAreaInsets();
  const { Color } = useTheme();

  React.useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = () => {
    const data = {};
    props.getDashbordData(data).then((value) => {
      console.log(value);
    }, (error) => {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Something went wrong please try again",
      });
    });
  };

  /**
   * Other way to call Promises
   */
  // function resolve(value) {

  // }

  // function reject(value) {

  // }

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <Text>{Const.lang.t("lbl_demo")}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlignVertical: "center",
    textAlign: "center"
  }
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getDashbordData: (data) =>
    new Promise((resolve, reject) => {
      dispatch(getDashbordData(data, resolve, reject));
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);