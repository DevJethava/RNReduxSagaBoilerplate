import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator, useTheme, Appbar, Button, TextInput, Avatar } from "react-native-paper";
import { getDashbordData } from "../../redux/actions/homeActions";
import { connect } from "react-redux";
import Toast from "react-native-toast-message";
import {
  Color,
  Const,
  Responsive,
} from "../../utils";
import Loader from '../../components/Loader';
import moment from 'moment';
import Clipboard from '@react-native-clipboard/clipboard';

const HomeScreen = ({ navigation, ...props }) => {
  const insets = useSafeAreaInsets();
  const { Color } = useTheme();

  const [response, setResponse] = useState({});
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = () => {
    const data = {};
    props.getDashbordData(data).then((value) => {
      // console.log(value.results[0]);
      setResponse(value.results[0]);
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
    <>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title={Const.lang.t("lbl_title")} />
        </Appbar.Header>
        <StatusBar
          barStyle={"dark-content"}
        />
        <View style={styles.containerView}>
          <View style={[styles.centerItem, { marginBottom: Responsive.heightPx(2) }]}>
            <Avatar.Image size={150} source={{
              uri: response?.picture?.large ? response.picture.large : 'https://reactnative.dev/img/tiny_logo.png',
            }} />
          </View>
          <TextInput
            style={styles.inputTextMargin}
            label="Name"
            editable={false}
            value={response?.name?.title + " " + response?.name?.first + " " + response?.name?.last}
          />
          <TextInput
            style={styles.inputTextMargin}
            label="Email"
            editable={false}
            value={response?.email}
            onChangeText={text => setText(text)}
          />
          <TextInput
            style={styles.inputTextMargin}
            label="Phone"
            editable={false}
            value={response?.phone}
          />
          <TextInput
            style={styles.inputTextMargin}
            label="Birthdate"
            editable={false}
            value={moment(response?.dob?.date).format('DD-MM-yyyy')}
          />
          <TextInput
            style={styles.inputTextMargin}
            label="Address"
            editable={false}
            value={response?.location?.street?.number.toString() + ", " + response?.location?.street?.name.toString()}
          />
          <View style={styles.centerItem}>
            {
              props.isLoading ?
                <ActivityIndicator style={styles.buttonStyle} animating={true} />
                :
                <Button style={styles.buttonStyle} mode="contained" onPress={getUserProfile}>
                  Refresh
                </Button>
            }
          </View>

        </View>
      </View >
      <Loader loading={props.isLoading} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  containerView: {
    padding: Responsive.heightPx(4)
  },
  centerItem: {
    alignItems: 'center'
  },
  inputTextMargin: {
    marginVertical: Responsive.heightPx(1)
  },
  buttonStyle: {
    marginVertical: Responsive.heightPx(3),
    width: "50%"
  }
});

const mapStateToProps = (state) => ({
  isLoading: state.appLoader?.loading,
  theme: state.home?.theme,
});

const mapDispatchToProps = (dispatch) => ({
  getDashbordData: (data) =>
    new Promise((resolve, reject) => {
      dispatch(getDashbordData(data, resolve, reject));
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);